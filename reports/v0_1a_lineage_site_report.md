# 2015 Projects Reborn V0.1A Lineage Site Report

---

## 1. Status

| 字段 | 值 |
|---|---|
| 状态 | **PASS** |
| 执行日期 | 2026-07-11 |
| 仓库路径 | `/home/ubuntu/.hermes/workspace/project/2015-Projects` |
| 当前分支 | `master` |

## 2. Git Baseline

| 字段 | 值 |
|---|---|
| 项目原始起点 | `dc8e86e7a6aa4f8dab44c381a912b29dd825d085` |
| R0 baseline commit | `5062bcdbf8f21ef35e74fc532ca4693e869d26c1` (`docs: add 2026 revival research baseline`) |
| V0.1A implementation commit | The commit containing this report; see the final task output or `git log`. |

> 此报告自身所在的 commit 写在最终输出中，避免自引用循环。

## 3. Product Positioning

- **项目名称**：`2015 Projects Reborn`
- **中文副标题**：个人知识与记忆实验室
- **中文标语**：把 2015 年写下的四个想法，继续做下去。

| 种子 | 当前在产品中的角色 |
|---|---|
| **P4 家庭口述历史** | 近期 Pilot / 长期核心。第一阶段仅做「一位讲述者、一次访谈、一个故事页面」。 |
| **P1 广播复兴** | 传播层：编辑与音频，承载《万物小窗》音频、口述历史片段与 RSS；不是当前核心应用。 |
| **P2 开放阅读** | 能力层：阅读 / 解析 / 检索 / 知识整理，对应 `book-id-search`、`DocuMuse`、`ebook-content-lab`、`ebook-treasure-chest`、`courses-zh` 等后继仓库；本阶段不合并代码。 |
| **P3 Web 设计目录** | 维护实验：历史资源档案；Agent 链接审计；不恢复为人工维护的大型链接目录。 |

## 4. Technical Stack

| 维度 | 选择 |
|---|---|
| Static site generator | Astro **5.18.2** |
| Language | TypeScript 5.7（`astro/tsconfigs/strict`） |
| Content | Astro Content Collections + glob loader |
| Schema validation | Zod（声明式 status 枚举） |
| Styling | 原生 CSS（不使用 Tailwind，不使用 UI 框架） |
| Rendering | Static output (`output: 'static'`)，无 SSR、无 adapter |
| Interaction | 无 React，无 Vue，无 Svelte |
| Backend | 无 |
| Database | 无 |
| External AI API | 无 |
| Auth / CMS | 无 |
| Site base | `/2015-Projects/`（GH Pages 项目子路径） |
| Site URL | `https://conanxin.github.io` |

## 5. Files Added

V0.1A 在仓库根目录下新增 `site/` 目录与本报告。新增 / 已修改文件：

```
site/
├── .gitignore                       (排除 node_modules, dist, .astro)
├── astro.config.mjs                 (output: 'static', base: '/2015-Projects')
├── package.json                     (astro ^5.7, @astrojs/check ^0.9, typescript ^5.7)
├── package-lock.json                (被 npm ci 重建)
├── tsconfig.json                    (extends astro/tsconfigs/strict)
└── src/
    ├── content.config.ts            (seeds collection + Zod schema, 16 字段)
    ├── content/seeds/
    │   ├── voice.md                 (P1 广播复兴)
    │   ├── reading.md               (P2 开放阅读)
    │   ├── design.md                (P3 Web 设计目录)
    │   └── memory.md                (P4 家庭口述历史)
    ├── data/
    │   ├── lineage.json             (4 seeds + 11 descendants, shouldLink/shouldMergeCode)
    │   └── timeline.json            (10 verified events, approximate 标记)
    ├── layouts/BaseLayout.astro     (HTML 框架、nav、skip-link、footer)
    ├── components/StatusBadge.astro (5 种 status 状态徽章)
    ├── pages/
    │   ├── index.astro              (/)
    │   ├── about.astro              (/about/)
    │   ├── lineage.astro            (/lineage/)
    │   ├── timeline.astro           (/timeline/)
    │   └── seeds/[slug].astro       (/seeds/{voice,reading,design,memory}/)
    └── styles/global.css            (纸色 + 衬线 + 卡片/时间线/谱系原语)
reports/
└── v0_1a_lineage_site_report.md     (本报告)
```

**未列入也未提交的目录**（已在 `site/.gitignore` 中排除）：

- `site/node_modules/` （依赖，npm ci 安装产生）
- `site/dist/` （构建产物）
- `site/.astro/` （Astro 缓存）

## 6. Content Model

### 6.1 Astro Content Collection `seeds`

每个 seed markdown 含 16 字段，schema 用 Zod 强校验：

| 字段 | 类型 | 备注 |
|---|---|---|
| `id` | string | voice / reading / design / memory |
| `slug` | string | URL 段，与 id 同 |
| `titleZh` | string | 中文标题 |
| `titleEn` | string | 英文标题 |
| `originalDate` | string | YYYY-MM-DD 原始日期 |
| `originalDocument` | string | 仓库内原始文件名 |
| `originalIntent` | string | 原始动机摘要 |
| `coreProblem` | string | 第一性原理核心问题 |
| `status` | enum | 状态枚举，见下 |
| `currentInterpretation` | string | 2026 重新解释 |
| `currentRole` | string | 当前在产品中的角色 |
| `descendantProjects` | array | 已实现的后继仓库 |
| `completedParts` | array | 已完成部分 |
| `unresolvedQuestions` | array | 未解决问题 |
| `nextExperiment` | string | 下一项最小实验 |
| `lastReviewed` | string | YYYY-MM-DD |

### 6.2 `status` 枚举值

5 种状态，对应 5 类语义：

```
active | evolved | dormant | pilot-next | archive-maintained
```

中文显示：活跃 / 已演化 / 休眠 / 下一阶段 Pilot / 档案 · 维护中

### 6.3 `lineage.json`

- 4 个 seeds 引用
- 11 个后继仓库，每个含：
  - `titleZh` 中文名
  - `currentRole` 当前角色
  - `maturity` 活跃度
  - `stillMaintained` 是否仍在维护
  - `shouldLink=true` / `shouldMergeCode=false` 双开关
  - `linkType` 表示连接类型（`shell-and-rss` / `content-index` / `schemas-and-projects` / `search-backend` / `interview-parser` / `curator-and-transcripts` / `learning-pilot` / `writing-archive` / `historical-evidence` / `operator`）
- 顶部 `$comment` 与 `note` 字段显式声明「本阶段只连接，不合并代码」

### 6.4 `timeline.json`

10 个事件。所有日期均可在 R0 报告或本仓库 commit 中验证；不确定的标 `approximate`；未发生的标 `kind: 'next'`：

- 2015-01：四个种子项目同时落笔
- 2015-01：开始公开每日的思考与片段记录（`2015-Daily-Recording`）
- 2016-01：2015 习惯复盘（`2016-Daily-Recording`）
- 2014 ~：E-Reader 想法的更早起点（Tumblr `mereader.tumblr.com`）
- 2026-04：Hermes Agent 上线
- 2026-05：DocuMuse 落地
- 2026-06：内容与阅读侧密集上线
- 2026-07：V0.1A 复兴审计（R0 commit）
- 2026-07：V0.1A 项目谱系站上线（V0.1A commit）
- next（approximate）：下一阶段 P4 家庭口述历史单样本 Pilot（V0.2）

## 7. Generated Routes

构建实际生成 8 个静态 HTML 文件：

| 路径 | 文件 |
|---|---|
| `/2015-Projects/` | `dist/index.html` |
| `/2015-Projects/about/` | `dist/about/index.html` |
| `/2015-Projects/lineage/` | `dist/lineage/index.html` |
| `/2015-Projects/timeline/` | `dist/timeline/index.html` |
| `/2015-Projects/seeds/voice/` | `dist/seeds/voice/index.html` |
| `/2015-Projects/seeds/reading/` | `dist/seeds/reading/index.html` |
| `/2015-Projects/seeds/design/` | `dist/seeds/design/index.html` |
| `/2015-Projects/seeds/memory/` | `dist/seeds/memory/index.html` |

附属资源：

- `dist/_astro/about.DUKOEpsK.css` （单样式 bundle，包含所有页面样式）
- `dist/_astro/page.BT_9kWGp.js` （1.0 kB gzip，Astro client island runtime，本项目未使用任何 island，纯静态）

## 8. Validation Results

| 检查 | 结果 |
|---|---|
| `npm ci` | PASS — 360 packages |
| Astro 版本 | v5.18.2 |
| `npm run check`（astro check） | **PASS** — 0 errors, 0 warnings, 0 hints（8 files） |
| `npm run build` | **PASS** — `8 page(s) built in 1.41s` |
| 内部链接 | **9/9 OK**（`/`、`/about`、`/lineage`、`/timeline`、`/seeds/{voice,reading,design,memory}`，加上 `/2015-Projects/_astro/about.DUKOEpsK.css`） |
| `astro preview` HTTP | **8/8 HTTP 200** （desktop 直接验证；mobile 第二次 puppeteer 命中缓存返回 304，但内容完整渲染） |
| HTML `<title>` | 全部合理（中文 + 英文 + 项目名），不同页面独立 |
| HTML `<meta name="description">` | 全部合理，详情页自动取 seed 的 `originalIntent` |
| localhost 引用 | 0 处 |
| 不存在本地图片 | 0 处 |
| API key / 私有路径 | 0 处（grep 全部 missed） |
| prefetch / reduced-motion | 已配置 `prefetch: { prefetchAll: false }`，CSS 中 `@media (prefers-reduced-motion: reduce)` 已设置 |

## 9. Browser Validation

| Route | vp=1440×900 | vp=390×844 |
|---|---|---|
| `/` | HTTP 200 · 主区可渲染 · nav=4 · 无横滚 · console clean · title 正确 | HTTP 304 (cached) · 主区可渲染 · nav=4 · 无横滚 · console clean · title 正确 |
| `/about/` | HTTP 200 · PASS | HTTP 304 · PASS |
| `/lineage/` | HTTP 200 · PASS | HTTP 304 · PASS |
| `/timeline/` | HTTP 200 · PASS | HTTP 304 · PASS |
| `/seeds/voice/` | HTTP 200 · PASS | HTTP 304 · PASS |
| `/seeds/reading/` | HTTP 200 · PASS | HTTP 304 · PASS |
| `/seeds/design/` | HTTP 200 · PASS | HTTP 304 · PASS |
| `/seeds/memory/` | HTTP 200 · PASS | HTTP 304 · PASS |

总览指标（来自 puppeteer page.evaluate）：

- 桌面 1440×900：所有 8 路由 documentElement.scrollWidth = 1440，clientWidth = 1440，**无横向溢出**
- 移动 390×844：所有 8 路由 scrollWidth = 390，clientWidth = 390，**无横向溢出**
- 所有 8 路由 console.error 0 条；requestfailed 0 条
- 每个页面均存在 `<nav class="site-nav">` 含 4 个站内链接 (首页 / 时间线 / 谱系 / 关于)
- 每个页面 `<meta name="description">` 与 `<title>` 渲染合理

临时截图保存在 `/tmp/2015-projects-v0_1a-visual/` （共 16 张：8 路由 × 2 viewport）。任务书要求保留的「首页 + lineage + memory seed 桌面+移动 共 6 张核心截图」全部生成且通过人工视觉检查：**PASS**（纸色 / 衬线中文 / 状态徽章 / 卡片 / 时间线 / 谱系网格在两个 viewport 下均无溢出、无裁切、无遮挡）。

> 重要：这些截图位于 `/tmp/` 之外，**不属于 Git 交付物**。`site/` 与本报告所在的 commit 均未包含截图。

## 10. Original File Integrity

SHA-256 比对：当前工作树 vs `git show dc8e86e7:<file>`。

| 文件 | 原始 commit SHA-256 | 当前 SHA-256 | 结果 |
|---|---|---|---|
| `README.md` | `3c630b3a644660c8e1ac9e1a948c6cd33fa62dc33867b716e9e4a35d507efbba` | `3c630b3a644660c8e1ac9e1a948c6cd33fa62dc33867b716e9e4a35d507efbba` | **MATCH** |
| `1.Podcast-Plan.md` | `98d2580d48a1498e531265676fdc9e0649f260cd2d2d9ddbd238d39c7e7cd8b0` | `98d2580d48a1498e531265676fdc9e0649f260cd2d2d9ddbd238d39c7e7cd8b0` | **MATCH** |
| `2.E-Reader.md` | `1c6551563df132c8673a7d794b92b97abb87992f6d75005a29a0926dc5a3dc36` | `1c6551563df132c8673a7d794b92b97abb87992f6d75005a29a0926dc5a3dc36` | **MATCH** |
| `3.DESIGNING For The Web.md` | `6a562415efe31a16638fb51d89b0236c47675d2820b92770612dc1ac44f9928c` | `6a562415efe31a16638fb51d89b0236c47675d2820b92770612dc1ac44f9928c` | **MATCH** |
| `4.Recordingl history.md` | `7bf48c923edee4837b325b755e606d6b711458763587ea82cc02aac8eb4eee5b` | `7bf48c923edee4837b325b755e606d6b711458763587ea82cc02aac8eb4eee5b` | **MATCH** |

**全部 MATCH。** 5 份文件在 V0.1A 阶段未被任何流程修改。

## 11. Known Limitations

按任务要求，本 V0.1A 阶段**未做**：

- **尚未部署** — 未启用 GH Pages 自动部署，未新增 `.github/workflows/`。
- **尚未修改 README** — 本任务不修改 README.md（保持原始 SHA-256）。
- **尚未加入 GitHub Pages workflow** — `.github/workflows/` 不存在。
- **未包含真实家庭成员资料** — P4 仅展示方法论，无真实姓名 / 录音 / 转录。
- **未包含真实访谈或转录功能** — 没有 OHMS 实现，没有 Omeka S clone，没有任何采访自动化。
- **未涉及 11 个后继仓库代码合并** — 仅通过 `lineage.json` 记录谱系关系，所有后继仓库保持独立开发。
- **未做链接自动定时任务** — 链接审计 (`tools/link_audit.py`) 是 R0 报告中的候选，本任务未创建。
- **未实现搜索后端、AI 聊天、CMS、用户账号、评论或社区**。
- **second-puppeteer 304** — Astro preview server 对同一 URL 的第二次请求返回 304 Not Modified，符合 HTTP 语义。所有 mobile 截图内容均与桌面 200 时保持一致，无视觉差异。
- **4 个种子卡片按字母序排列**（P3 → P4 → P2 → P1），并非按产品定位（P4 → P1 → P2 → P3）排列。任务约束「不要重新设计站点」「除非浏览器检查发现明确问题，否则不要修改 site/」；当前实现无视觉问题，故未调整。

## 12. Next Stage

> 本任务严格止于 V0.1A。下一阶段由单独任务承接，不在本任务范围内启动。

| 阶段 | 内容 | 备注 |
|---|---|---|
| **V0.1B** | GitHub Pages 发布 + README 复兴 | 新增 `.github/workflows/pages.yml`，启用 GH Pages，在仓库 `Settings → Pages` 中选 GitHub Actions，让 `site/dist/` 真正出现在 `https://conanxin.github.io/2015-Projects/`。 |
| **V0.2** | 家庭口述历史单样本 Pilot | 仅使用**公开材料**（如《乱时候，穷时候》公开版本）走 DocuMuse → 验证 interview 类型识别 → 段落级 source 锚定 → 导出 Markdown / JSON。**不引入真实家庭成员**。 |

**关键不变项（下一阶段必须继续守住）**：

1. 5 份 2015 原始文件 SHA-256 必须保持 MATCH。
2. `master` 分支必须保持默认分支，不要重命名为 `main`。
3. 仓库名称保持 `2015-Projects`。
4. 后续仓库（`wonder-window-cn`、`ebook-content-lab` 等）保持独立开发，本仓库仅记录连接关系，不合并代码。
5. AI Agent 角色：整理 / 审计 / 辅助，**不替代讲述者本人**。
