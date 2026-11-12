#!/usr/bin/env python3
"""将 880 原书裁图、解析与题型分类导入题库。"""
import argparse
import collections
import json
import re
import shutil
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
NOTES = {
    1: ('函数、极限、连续', None, 77, 8),
    2: ('一元函数微分学及其应用', '一元函数微分学题型分类总结.pdf', 145, 30),
    3: ('一元函数积分学及其应用', '一元积分题型分类总结（最终版）.docx', 167, 31),
    4: ('多元函数微分学及其应用', '多元函数微分学题型分类总结(可编辑公式版).docx', 75, 21),
    5: ('二重积分', None, 78, 8),
    6: ('微分方程及其应用', '微分方程题型分类总结(可编辑公式版).docx', 76, 16),
    7: ('行列式', '行列式题型分类总结.pdf', 39, 20),
    8: ('矩阵', '矩阵题型分类总结.pdf', 56, 24),
    9: ('向量', '向量题型分类总结.pdf', 37, 17),
    10: ('线性方程组', '李林880线性方程组题型分类总结.docx', 54, 33),
    11: ('相似矩阵', None, 62, 8),
    12: ('二次型', None, 63, 8),
}
CHINESE = dict(enumerate('一 二 三 四 五 六 七 八 九 十 十一 十二'.split(), 1))
BOOKS = {'calculus': '【A4留白版】李林880数二高数篇做题本.pdf', 'algebra': '【A4留白版】李林880数二线代篇做题本(2).pdf'}
BOOK_TYPES = {
    1: [
        '函数的奇偶性、单调性、周期性与有界性',
        '无穷小的比较与泰勒展开',
        '函数极限与参数的确定',
        '数列极限的定义、性质与存在性',
        '递推数列的收敛与极限',
        '数列和式、乘积与夹逼求极限',
        '连续性、间断点与连续函数的性质',
        '变限积分与隐函数中的极限',
    ],
    5: [
        '二重积分的性质与大小比较',
        '直角坐标、分块积分与积分换序',
        '对称性与轮换对称性',
        '极坐标、积分区域与几何应用',
        '变量代换与坐标转换',
        '分段函数、绝对值与取整',
        '二重积分极限与积分和式',
        '含参数积分与积分方程',
    ],
    11: [
        '特征值、特征向量与矩阵多项式',
        '相似的判定、不变量与参数确定',
        '相似对角化与过渡矩阵',
        '实对称矩阵与正交对角化',
        '由特征信息或作用关系确定矩阵',
        '特征空间与秩、行列式、线性方程组',
        '交换矩阵、共同特征向量与同时对角化',
        '相似对角化在矩阵幂与递推中的应用',
    ],
    12: [
        '二次型与矩阵的互相表示',
        '合同、相似与等价的判定',
        '配方法与可逆线性变换化标准形',
        '正交变换化标准形与参数确定',
        '二次型的秩、惯性指数与规范形',
        '正定性与参数范围',
        '二次型的零点、大小比较与最值',
        '利用特征值和特征向量确定矩阵',
    ],
}
KINDS = {'choice': '选择', 'fill': '填空', 'solution': '解答'}


def read_note(path):
    if path.suffix == '.pdf':
        with fitz.open(path) as doc:
            text = '\n'.join(page.get_text(sort=True) for page in doc)
    else:
        with zipfile.ZipFile(path) as archive:
            doc = ET.fromstring(archive.read('word/document.xml'))
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        text = '\n'.join(''.join(t.text or '' for t in p.findall('.//w:t', ns)) for p in doc.findall('.//w:p', ns))
    # 旧 PDF 的个别标题与前一公式落在同一行，保留原分类边界。
    return re.sub(r'#{2,}\s*(?=类型\s*\d+)', '\n', text)


def classifications(chapter, text):
    titles = {}
    references = collections.defaultdict(lambda: collections.defaultdict(list))
    current = None
    lines = text.splitlines()
    for index, line in enumerate(lines):
        heading = re.match(r'^\s*类型\s*(\d+)\s*(.+)', line)
        if heading:
            current = int(heading[1])
            title = heading[2].strip()
            if index + 1 < len(lines) and len(lines[index + 1].strip()) < 12 and title.count('（') > title.count('）'):
                title += lines[index + 1].strip()
            titles[current] = re.sub(r'\s+', ' ', re.sub(r'\s*[（(]共\s*\d+\s*题[）)]$', '', title)).strip()
        for tag in re.findall(r'【([^】]{1,80})】', line):
            compact = re.sub(r'\s+', '', tag)
            match = re.match(r'(基础|综合|拓展)[-－—·]?(?:题)?[-－—·]?(选择|填空|解答)(?:题)?(?:[（(](\d+)[）)])?', compact)
            if not match:
                continue
            assert current is not None, (chapter, tag)
            tier = {'基础': 'b', '综合': 'c', '拓展': 'e'}[match[1]]
            kind = {'选择': 'c', '填空': 'f', '解答': 's'}[match[2]]
            number = int(match[3] or 1)
            question_id = f'll880-c{chapter:02}-{tier}-{kind}{number:02}'
            if compact not in references[question_id][current]:
                references[question_id][current].append(compact)
    assert set(titles) == set(range(1, NOTES[chapter][3] + 1)), (chapter, '题型标题不全', titles.keys())
    return titles, references


def save_image(image, target):
    image.save(target, 'WEBP', quality=92, method=4)
    return {'src': target.relative_to(ROOT / 'client/public').as_posix(), 'width': image.width, 'height': image.height}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--sources', type=Path, required=True)
    parser.add_argument('--notes', type=Path, required=True)
    parser.add_argument('--chapters', nargs='+', type=int, choices=NOTES)
    args = parser.parse_args()
    source_map = json.loads((ROOT / 'content/ll880-source-map.json').read_text())
    output = ROOT / 'client/public/ll880'
    output.mkdir(exist_ok=True)
    documents = {key: fitz.open(args.sources / name) for key, name in BOOKS.items()}
    fitz.TOOLS.mupdf_display_errors(False)
    answers = fitz.open(args.sources / '27版880题《数二解析册》.pdf')
    answer_pages = {}
    content = ROOT / 'client/src/content'
    chapter_index = content / 'll880-classification.json'
    question_index = content / 'll880-questions.json'
    chapters = []
    questions = []
    if args.chapters:
        chapters = [c for c in json.loads(chapter_index.read_text()) if c['number'] not in args.chapters]
        questions = [q for q in json.loads(question_index.read_text()) if q['chapterNumber'] not in args.chapters]
    for chapter, (name, filename, expected, _) in NOTES.items():
        if args.chapters and chapter not in args.chapters:
            continue
        selected = {key: value for key, value in source_map.items() if value['chapter'] == chapter}
        assert len(selected) == expected
        chapter_id = f'll880-c{chapter:02}'
        source = {}
        if filename:
            titles, references = classifications(chapter, read_note(args.notes / filename))
            source_file = f'{chapter_id}-types{Path(filename).suffix}'
            shutil.copy2(args.notes / filename, output / source_file)
            source = {'sourceName': filename, 'sourceFile': f'll880/{source_file}'}
        else:
            titles = dict(enumerate(BOOK_TYPES[chapter], 1))
            references = {
                key: {q['typeOrder']: [f'{q["tier"]}·{KINDS[q["type"]]}（{q["n"]}）']}
                for key, q in selected.items()
            }
        assert set(selected) == set(references), (chapter, '题号覆盖不一致', set(selected) ^ set(references))
        types = [{'id': f'{chapter_id}-t{order:02}', 'order': order, 'title': title} for order, title in sorted(titles.items())]
        chapters.append({'id': chapter_id, 'number': chapter, 'title': f'第{CHINESE[chapter]}章 {name}', 'count': expected, 'types': types, **source})
        for order, (question_id, q) in enumerate(selected.items()):
            stem_images = []
            for i, crop in enumerate(q['crops']):
                page = documents[q['file']][crop['page'] - 1]
                rect = fitz.Rect(crop['rect'])
                # 固定左右版心，避免短题被放得过大；纵向使用已核对的原书裁图边界。
                rect = fitz.Rect(68, max(43, rect.y0), page.rect.width - 65, min(page.rect.height - 32, rect.y1))
                pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5), clip=rect, alpha=False)
                image = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
                entry = save_image(image, output / f'{question_id}-q{i+1}.webp')
                entry['alt'] = f'{name} {q["tier"]} {q["type"]}第{q["n"]}题原题' + (f'（续页{i+1}）' if i else '')
                stem_images.append(entry)
            answer_images = []
            for i, crop in enumerate(q['answerCrops']):
                p = crop['page']
                if p not in answer_pages:
                    page = answers[p-1]
                    pix = page.get_pixmap(matrix=fitz.Matrix(1800/page.rect.height, 1800/page.rect.height), alpha=False)
                    answer_pages[p] = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
                page_image = answer_pages[p]
                w, h = page_image.size
                x0, y0, x1, y1 = crop['rect']
                image = page_image.crop((round(w*x0), round(h*y0), round(w*x1), round(h*y1)))
                entry = save_image(image, output / f'{question_id}-a{i+1}.webp')
                entry['alt'] = f'{name} {q["tier"]}第{q["n"]}题原书答案与解析（解析册 PDF 第{p}页）'
                answer_images.append(entry)
            kind = KINDS[q['type']]
            question_types = [{'id': f'{chapter_id}-t{n:02}', 'title': titles[n], 'references': refs} for n, refs in sorted(references[question_id].items())]
            questions.append({'id': question_id, 'year': 2027, 'paperId': chapter_id, 'paperTitle': f'李林880 · 第{CHINESE[chapter]}章 {name}', 'bookId': 'll880', 'chapterNumber': chapter, 'sourceOrder': order, 'kind': 'original', 'number': str(q['n']), 'source': f'李林880 · {q["tier"][:2]}{kind}（{q["n"]}）', 'sourceCategory': 'book', 'level': q['tier'], 'questionTypes': question_types, 'topic': f'{"高等数学" if chapter <= 6 else "线性代数"} / {name}', 'type': q['type'], 'stem': f'{q["tier"]} · {kind}题（{q["n"]}）', 'searchText': re.sub(r'\s+', ' ', q['textClean']).strip(), 'questionImages': stem_images, 'answerImages': answer_images, 'answer': '见原书答案与解析。', 'explanation': '原书解析截图保留完整公式与解题步骤。'})
        print(f'{chapter_id}: {len(selected)} 题，{len(types)} 个题型', flush=True)
    assert len(questions) == sum(c['count'] for c in chapters)
    chapters.sort(key=lambda chapter: chapter['number'])
    questions.sort(key=lambda q: (q['chapterNumber'], q['sourceOrder']))
    chapter_index.write_text(json.dumps(chapters, ensure_ascii=False, indent=2) + '\n')
    question_index.write_text(json.dumps(questions, ensure_ascii=False, indent=2) + '\n')
    print(f'导入完成：{len(questions)} 题，{sum(len(c["types"]) for c in chapters)} 个题型')


if __name__ == '__main__':
    main()
