# 数学二知识库

一个可全文搜索的考研数学二公式、结论与题型知识库。

**在线站点：** [https://louise-zqf.github.io/postgraduate-exam-website/](https://louise-zqf.github.io/postgraduate-exam-website/)

## 当前内容

- 高等数学 6 章：极限、一元微分、一元积分、微分方程、多元微分、二重积分
- 线性代数 6 章：行列式、矩阵、向量、线性方程组、特征值与相似矩阵、二次型
- 60 个大观园主题型、529 个可检索的细分题型
- Markdown 正文与 KaTeX 公式渲染
- 中文近义词归一搜索，支持从搜索结果直达条目

## 本地运行

```bash
npm ci
npm run dev
```

生产构建：

```bash
npm run build
```

## 如何继续补充资料

内容的唯一数据源是：

```text
content/approved/高等数学.md
content/approved/线性代数.md
```

章节使用固定的 Markdown 层级：

```markdown
## 第一部分　高等数学
### 第一章　极限
#### 某个可搜索的知识点名称

知识点正文……
```

修改这两份文档后运行 `npm run build:content`，即可重新生成目录和搜索数据。`npm run dev` 与 `npm run build` 也会自动执行这一步。

## 部署

`master` 分支每次推送后，GitHub Actions 会自动构建并部署到 GitHub Pages。站点使用 Hash 路由，可在项目二级目录下直接刷新。

## 技术栈

Vue 3、TypeScript、Vite、Vue Router、Marked、KaTeX、DOMPurify。

> 本项目基于 [liangbohan/postgraduate-exam-website](https://github.com/liangbohan/postgraduate-exam-website) 的项目结构改造。
