# 2015 年原始仓库入口

> 本目录保存 2015 年仓库原本的 GitHub 入口与项目档案。它不是新功能，只是把过去 11 年的内容**按字节归档**，以便未来任何人都可以验证历史。

## 这是什么

- 这是 2015 年 1 月初 conanxin 在 GitHub 上新建的 4 件项目的「计划笔记本」。
- 2015 那个仓库只有 4 个 commit、5 个 markdown、4 张概念性说明：
  - `README.md`（仓库当时的自我介绍，仅有 316 字节）
  - `1.Podcast-Plan.md`（P1：广播复兴）
  - `2.E-Reader.md`（P2：开放阅读）
  - `3.DESIGNING For The Web.md`（P3：Web 设计目录）
  - `4.Recordingl history.md`（P4：家庭口述历史）

## 仓库起点

- 原始源 commit：`dc8e86e7a6aa4f8dab44c381a912b29dd825d085`
- 原始 commit message：`add a project`（最终于 2015-01-12 把第 3 份文件加入）
- 第一次 commit 时间：2015-01-03
- 原始 README 自述日期：2015.1.3

## 历史内容没有被删除或改写

- 原始 README 已按字节保存为 [`README.original.md`](./README.original.md)
- 原始 README 的 SHA-256 与原始 commit 中 `README.md` 的内容**完全相同**
- 四份 2015 项目文档（`1.Podcast-Plan.md`、`2.E-Reader.md`、`3.DESIGNING For The Web.md`、`4.Recordingl history.md`）**仍然保留在仓库根目录**，路径与内容均不变
- 全部 5 个文件的 SHA-256 清单见 [`manifest.sha256`](./manifest.sha256)

## 2026 年发生了什么

- 2026 年 6–7 月期间，对这 5 份历史文档进行了**复兴审计**（R0 报告：`reports/2026_revival_research_report.md`）。
- 2026 年 7 月，开发了 Astro 静态站 `site/`，并通过 GitHub Pages 部署了「2015 Projects Reborn · 个人知识与记忆实验室」项目谱系站。
- 2026 年 7 月（V0.1C，本阶段），根 `README.md` **被有意识地更新为现代项目入口**。

## 为什么不删除 2015 文档

重写或删除会抹掉这条线索。SHA-256 是判定「这份文档是否被动过」的硬依据；本任务在现代化 5 份中的 1 份（README），是因为 README 的功能是**入口**而不是历史。其余 4 份原始项目文档本任务不动，未来也不动。

## 入口与档案

| 内容 | 位置 |
|---|---|
| 现行仓库入口 | `README.md`（根目录，已更新） |
| 原始 README 字节级副本 | [`README.original.md`](./README.original.md) |
| 5 文件 SHA-256 清单 | [`manifest.sha256`](./manifest.sha256) |
| 原始源 commit | `dc8e86e7a6aa4f8dab44c381a912b29dd825d085` |
| 复兴研究基线 | `reports/2026_revival_research_report.md` |
| R0 链接审计 CSV | `reports/2026_link_audit_raw.csv` |
| 站点构建报告 | `reports/v0_1a_lineage_site_report.md` |
| Pages 部署报告 | `reports/v0_1b_github_pages_deployment_report.md` |
| 本阶段报告 | `reports/v0_1c_readme_revival_report.md` |

—— 历史在另一处，生活在这里。
