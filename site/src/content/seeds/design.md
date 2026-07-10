---
id: "design"
slug: "design"
titleZh: "Web 设计目录"
titleEn: "Web Design Catalogue"
originalDate: "2015-01-11"
originalDocument: "3.DESIGNING For The Web.md"
originalIntent: "翻译 / 重新整理一份'做 Web 设计'的资源列表（来源：webfieldmanual.com）。把分散的好链接，按主题分组，作为设计师自己的'长期起点'。"
coreProblem: "链接是会腐烂的。2015 的隐含假设是'set and forget'（一旦发出去，就能一直好用）。这件事在 2026 被 153 条 URL 中 10 条 confirmed DEAD、19 条 REDIRECTED、49 条 NEEDS_MANUAL_REVIEW 直接证伪。"
status: "archive-maintained"
currentInterpretation: "把它降级为历史资源档案。AI Agent 负责每季度做一轮链接审计与替换建议，人决定是否合并。原文件保持不动；定期新增带日期后缀的'再版'文件。"
currentRole: "历史资源档案；Agent 链接审计与知识维护实验；不恢复为人工维护的大型链接目录。"
descendantProjects:
  - repo: "conanxin/courses-zh"
    role: "把'设计资源'中的'学习资源'半边独立成课程集合"
    linkTo: "https://github.com/conanxin/courses-zh"
  - repo: "conanxin/medium-archive"
    role: "类似的'内容归档'思路，已用 Astro 落地"
    linkTo: "https://github.com/conanxin/medium-archive"
completedParts:
  - "R0 链接审计完成：153 条 URL，6 类分类"
  - "确认了一批 healthy redirect 候选（mozilla.org / typekit / sketch / invisionapp / agile methodology）"
  - "确认了一批被 spam/停车域接管的链接（bestaboutpages / az-project / magneticzero / uxarchive 等）"
unresolvedQuestions:
  - "健康重定向中的目标是否仍与原文一致（不只看 200，也看内容是否保留）"
  - "是否需要把 31 条 network_unreachable 链接打回去人工核验"
  - "季度再版的发布节奏：3 个月、6 个月、还是不定期"
nextExperiment: "将 audits 工具化：'tools/link_audit.py'（v0.3 候选）按 R0 的判定逻辑重跑，并以 2026-Q3 之名出一份'再版'附在原文件旁。"
lastReviewed: "2026-07-11"
---

这一份文件实际上是 2015 年对 webfieldmanual.com（DEAD in 2026）的中文整理版。九个章节的列表：STAYING CURRENT / INSPIRATION / STYLEGUIDES / Process / WORKFLOW / Toolbox / GRIDS & TYPOGRAPHY / Animation / BEST PRACTICES / ACCESSIBILITY。

它最有趣的地方不是任何一条具体链接，而是它示范了一种'运营一份目录'的思路。R0 审计里 49 条 NEEDS_MANUAL_REVIEW 给出的不是'链接坏了'，而是'目录会被时间养坏'这个命题本身。下一阶段把这个命题转化为 Agent 工作流，比再做一份新列表更值得。
