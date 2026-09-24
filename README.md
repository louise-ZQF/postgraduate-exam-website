<div align="center">

# 数学二知识库

### 为考研数学二打造的公式、结论与方法检索站

把分散在笔记和资料里的高等数学、线性代数内容整理成可以搜索、可以定位、可以收藏背诵的电子知识库。

[![在线访问](https://img.shields.io/badge/在线访问-数学二知识库-1f5a42?style=for-the-badge)](https://louise-zqf.github.io/postgraduate-exam-website/)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-222222?style=flat-square&logo=github)](https://louise-zqf.github.io/postgraduate-exam-website/)
[![License](https://img.shields.io/badge/内容许可-CC_BY_4.0-b67a32?style=flat-square)](LICENSE)

**[进入知识库](https://louise-zqf.github.io/postgraduate-exam-website/)**　·　**[浏览知识目录](https://louise-zqf.github.io/postgraduate-exam-website/#/knowledge)**　·　**[提交问题](https://github.com/louise-ZQF/postgraduate-exam-website/issues)**

</div>

---

## 项目介绍

数学二知识库不是把一整份笔记原样搬到网页，而是把数学二范围内的重要公式、定理、判定条件和常用结论按照章节重新组织，并为每个具体知识点建立独立定位。输入“参数方程二阶导数”“相似对角化判断”“质心公式”等关键词后，搜索结果可以直接跳到公式所在位置，而不是只打开对应章节；暂时没有背熟的内容可以加入收藏，之后集中复习，最近五次搜索也会保留在本机，方便继续查阅。

## 核心能力

| 能力 | 说明 |
| --- | --- |
| 精准搜索 | 支持中文知识点、公式名称、常见简称和近义表达，搜索结果直达具体条目 |
| 公式阅读 | Markdown 管理正文，KaTeX 清晰渲染行内公式、独立公式和矩阵 |
| 章节体系 | 高等数学与线性代数共 12 章，每章集中在一个页面内，避免内容被切得过碎 |
| 待背收藏 | 一键收藏尚未掌握的公式或结论，背熟后可直接移除 |
| 历史搜索 | 自动保留最近 5 次搜索记录，数据仅存储在当前浏览器中 |
| 持续维护 | 内容与页面分离，修改 Markdown 后即可自动重建目录和全文搜索索引 |

## 内容范围

目前收录 **12 章、60 个章节主题、188 个可直接搜索定位的条目**，内容严格限定在考研数学二范围内。

| 高等数学 | 线性代数 |
| --- | --- |
| 极限 | 行列式 |
| 一元函数微分学 | 矩阵 |
| 一元函数积分学 | 向量 |
| 常微分方程 | 线性方程组 |
| 多元函数微分学 | 特征值与相似矩阵 |
| 二重积分 | 二次型 |

> 项目以公式和结论为主体，强调名称清楚、表达简洁和方便检索；不收录数学一、数学三的专属内容，也不以堆积例题代替知识整理。

## 本地运行

请先安装 Node.js 22，然后在仓库根目录执行：

```bash
npm ci
npm run dev
```

生产构建使用：

```bash
npm run build
```

构建过程会先重新读取数学内容，再生成章节目录与搜索索引，最后完成前端打包。

## 内容维护

项目的正式内容只维护在下面两份 Markdown 文件中：

```text
content/approved/高等数学.md
content/approved/线性代数.md
```

新增或修改知识点时，保持下面的章节层级即可：

```markdown
## 第一部分　高等数学
### 第一章　极限
#### 可搜索的知识点名称

知识点正文与公式……
```

运行 `npm run build:content` 可以单独重建内容数据，运行 `npm run dev` 或 `npm run build` 时也会自动执行这一步，因此后续补充公式时不需要手工维护搜索索引。

## 项目结构

```text
math2-knowledge-site/
├── client/                 # Vue 前端、搜索、收藏与页面组件
├── content/approved/       # 高等数学与线性代数正式内容
├── scripts/                # 内容解析、索引生成与校验脚本
├── .github/workflows/      # GitHub Pages 自动部署
└── README.md
```

## 技术与部署

前端使用 Vue 3、TypeScript、Vite 和 Vue Router，数学公式由 KaTeX 渲染，Markdown 由 Marked 解析并通过 DOMPurify 清理。代码推送到 `master` 分支后，GitHub Actions 会自动生成内容、构建站点并发布到 GitHub Pages；站点使用 Hash 路由，可以在项目二级目录中直接刷新和分享具体页面。

## 项目来源

本项目基于 [liangbohan/postgraduate-exam-website](https://github.com/liangbohan/postgraduate-exam-website) 的项目结构进行改造，内容组织、数学二资料、精准定位搜索、历史记录、收藏系统与界面均围绕个人考研复习需求持续完善。

## 许可

仓库内容采用 [CC BY 4.0](LICENSE) 许可协议。转载或二次整理时请保留来源说明；公式与结论仍应结合考试大纲和权威教材进行核对。
