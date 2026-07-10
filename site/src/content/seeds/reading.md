---
id: "reading"
slug: "reading"
titleZh: "开放阅读"
titleEn: "Open Reading"
originalDate: "2015-01-03"
originalDocument: "2.E-Reader.md"
originalIntent: "做一个开放电子阅读器，让更多人尤其是偏远地区的孩子能够开始阅读。"
coreProblem: "让不会主动阅读的人开始阅读，需要的不是设备本身，而是持续的内容供给、检索能力、可读性优化与社区引导。"
status: "active"
currentInterpretation: "放弃自制硬件，专注阅读、解析、检索与知识整理能力层；EPUB 3.3 已经是 W3C Recommendation（2026-01-13），开放容器生态成熟。"
currentRole: "阅读、解析、检索与知识整理能力层。对应 book-id-search、DocuMuse、ebook-content-lab、ebook-treasure-chest、courses-zh 等后继仓库；本阶段不合并这些仓库的代码。"
descendantProjects:
  - repo: "conanxin/ebook-treasure-chest"
    role: "大规模电子书下载与索引（GitHub Pages 实时搜索）"
    linkTo: "https://github.com/conanxin/ebook-treasure-chest"
  - repo: "conanxin/ebook-content-lab"
    role: "以单本电子书为单位的证据驱动内容项目（含路线图解）"
    linkTo: "https://github.com/conanxin/ebook-content-lab"
  - repo: "conanxin/book-id-search"
    role: "SSID / DXID / ISBN 元数据检索（Meilisearch，5.1M+ 记录）"
    linkTo: "https://github.com/conanxin/book-id-search"
  - repo: "conanxin/DocuMuse"
    role: "本地 PDF 阅读 + AI 解析工作空间"
    linkTo: "https://github.com/conanxin/DocuMuse"
  - repo: "conanxin/courses-zh"
    role: "中文版学习课程集合（MIT How to Speak 中文版等）"
    linkTo: "https://github.com/conanxin/courses-zh"
completedParts:
  - "EPUB 3.3 已成 W3C Recommendation（2026-01-13），开放容器生态稳定"
  - "book-id-search 已收录 5,115,734 条书目元数据"
  - "DocuMuse 已能识别 'interview' 与其它多种文档类型"
  - "ebook-content-lab 已上线《从大都到上都》路线图解项目（v0.5.x）"
unresolvedQuestions:
  - "开源 EPUB 工作流是否能让一个非技术老人独立完成一次截屏-摘录-标记"
  - "中文学习课程集合（courses-zh）的扩张策略，是放弃还是聚焦"
  - "是否需要把后继仓库的 schemas 抽到统一位置"
nextExperiment: "用 DocuMuse 处理一份样例公开 PDF（如《乱时候，穷时候》），验证 interview/fiction/manual 的文档类型识别是否可信，为 P4 立项做准备。"
lastReviewed: "2026-07-11"
---

P2 在 2014 年就已经有过一个 Tumblr 主页（mereader.tumblr.com，2026 链接审计中表现为 network_unreachable）。2015 的文档承认自己"在以后还应该考虑如何引导阅读，然后形成一个阅读的社区"——这一半才是真正留下来的部分。

五件具体后继已经在工作，本阶段把它们视为能力层（reading / parsing / search / 整理 / knowledge），而不是孤立的几个网站。下一阶段的实验是把这些能力真正串到 P4 的访谈 PDF 上。
