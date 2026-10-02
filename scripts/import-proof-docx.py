"""把指定 Word 证明题笔记转换为独立专场数据，保留原生公式结构。"""
import json
import re
import sys
from pathlib import Path
from zipfile import ZipFile
from lxml import etree

NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
      'm': 'http://schemas.openxmlformats.org/officeDocument/2006/math'}
SYMBOLS = {'α': r'\alpha ', 'β': r'\beta ', 'ξ': r'\xi ', 'λ': r'\lambda ',
           'Δ': r'\Delta ', '≤': r'\le ', '≥': r'\ge ', '≠': r'\ne ',
           '⇒': r'\Rightarrow ', '−': '-', '⋯': r'\cdots ', '…': r'\ldots ',
           ' ': r'\quad ', '{': r'\{', '}': r'\}'}


def local(node):
    return etree.QName(node).localname


def value(node, path, default):
    found = node.find(path, NS)
    return found.get('{%s}val' % NS['m'], default) if found is not None else default


def latex(node):
    kind = local(node)
    if kind.endswith('Pr'):
        return ''
    if kind == 't':
        text = node.text or ''
        if re.search(r'[\u3400-\u9fff]', text):
            return r'\text{' + text + '}'
        return re.sub(r'\bmin\b', lambda _: r'\min ',
                      ''.join(SYMBOLS.get(char, char) for char in text))
    if kind in ('sSup', 'sSub'):
        base = latex(node.find('m:e', NS))
        position, mark = ('sup', '^') if kind == 'sSup' else ('sub', '_')
        script = latex(node.find('m:' + position, NS))
        if position == 'sup' and script == 'T':
            script = r'\mathrm{T}'
        return '{' + base + '}' + mark + '{' + script + '}'
    if kind == 'd':
        left = value(node, 'm:dPr/m:begChr', '(')
        right = value(node, 'm:dPr/m:endChr', ')')
        sep = value(node, 'm:dPr/m:sepChr', '|')
        delimiter = lambda text: {'{': r'\{', '}': r'\}', '': '.'}.get(text, text)
        inside = sep.join(latex(child) for child in node.findall('m:e', NS))
        return r'\left' + delimiter(left) + ' ' + inside + r'\right' + delimiter(right)
    if kind == 'm':
        rows = [' & '.join(latex(cell) for cell in row.findall('m:e', NS))
                for row in node.findall('m:mr', NS)]
        return r'\begin{matrix}' + r' \\ '.join(rows) + r'\end{matrix}'
    if kind not in ('oMath', 'oMathPara', 'r', 'e', 'sup', 'sub'):
        raise ValueError('未支持的公式结构：' + kind)
    return ''.join(latex(child) for child in node if etree.QName(child).namespace == NS['m'])


def paragraph_source(paragraph):
    parts = []
    for child in paragraph:
        kind = local(child)
        if kind == 'pPr':
            continue
        if kind == 'oMath':
            parts.append(r'\(' + latex(child) + r'\)')
        elif kind == 'oMathPara':
            parts.append(r'\[' + latex(child) + r'\]')
        else:
            parts.append(''.join(child.xpath('.//w:t/text()', namespaces=NS)))
    return ''.join(parts).strip()


def main():
    source_path, output_path = map(Path, sys.argv[1:3])
    with ZipFile(source_path) as archive:
        root = etree.fromstring(archive.read('word/document.xml'))
    data = {'title': '', 'intro': '', 'sections': [],
            'sourceName': source_path.name, 'paragraphCount': 0,
            'mathCount': len(root.findall('.//m:oMath', NS))}
    section = problem = None
    for paragraph in root.findall('.//w:body/w:p', NS):
        text = paragraph_source(paragraph)
        if not text:
            continue
        data['paragraphCount'] += 1
        style_node = paragraph.find('w:pPr/w:pStyle', NS)
        style = style_node.get('{%s}val' % NS['w']) if style_node is not None else ''
        if style == 'a4':
            data['title'] = text
        elif style == '1':
            section = {'id': 'proof-part-' + str(len(data['sections']) + 1),
                       'title': text, 'intro': '', 'problems': [], 'footer': ''}
            data['sections'].append(section)
            problem = None
        elif style == '2':
            problem = {'id': section['id'] + '-type-' + str(len(section['problems']) + 1),
                       'title': text, 'body': ''}
            section['problems'].append(problem)
        elif text.startswith('本章记法：'):
            section['footer'] = text
        else:
            if style == 'MethodHeading':
                text = '#### ' + text
            target = problem if problem is not None else section if section is not None else data
            field = 'body' if problem is not None else 'intro'
            target[field] += ('\n\n' if target[field] else '') + text
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    count = sum(len(section['problems']) for section in data['sections'])
    print(f"已导入 {len(data['sections'])} 部分、{count} 个题型、{data['paragraphCount']} 段、{data['mathCount']} 处公式")


if __name__ == '__main__':
    main()
