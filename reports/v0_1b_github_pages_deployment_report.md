# 2015 Projects Reborn V0.1B GitHub Pages Deployment Report

---

## 1. Status

| 字段 | 值 |
|---|---|
| 状态 | **PASS** |
| 执行日期 | 2026-07-11 |
| 仓库路径 | `/home/ubuntu/.hermes/workspace/project/2015-Projects` |
| 当前分支 | `master` |
| 起始 HEAD | `4d68c426d78de0c22478bc6ce2cbf19d5d3b6722` |

## 2. Deployment Target

| 字段 | 值 |
|---|---|
| Repository | `conanxin/2015-Projects` |
| Branch | `master` |
| Site source | GitHub Actions（Pages build_type = workflow） |
| Expected URL | `https://conanxin.github.io/2015-Projects/` |
| Custom domain | 无 |

## 3. Workflow

| 维度 | 值 |
|---|---|
| 文件路径 | `.github/workflows/pages.yml` |
| Name | `Deploy 2015 Projects Reborn to GitHub Pages` |
| Triggers | `push` on `master`；`workflow_dispatch` |
| Node.js 版本 | `20`（LTS） |
| Build working directory | `site/`（用 `defaults.run.working-directory: site`） |
| Artifact directory | `site/dist` |
| Permissions | `contents: read` · `pages: write` · `id-token: write` |
| Concurrency | `group: pages`, `cancel-in-progress: false` |
| Environment | `github-pages` |
| Steps | Checkout → Setup Node 20 → Configure Pages → `npm ci` → `npm run check` → `npm run build` → Upload Pages Artifact → Deploy to GitHub Pages |

使用的官方 Actions：

- `actions/checkout@v4`
- `actions/setup-node@v4`
- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

未引入任何第三方托管 / Vercel / Cloudflare Pages / gh-pages 分支 / Docker / 自定义服务器。

## 4. Astro Configuration

| 维度 | 值 |
|---|---|
| Astro 版本 | v5.18.2 |
| `site` | `https://conanxin.github.io` |
| `base` | `/2015-Projects` |
| `output` | `static` |
| `trailingSlash` | `ignore`（与 GH Pages 项目子路径语义吻合） |
| 生成页面数量 | **8**（index / about / lineage / timeline / seeds × 4） |

## 5. Local Validation

| 检查 | 结果 |
|---|---|
| `npm ci` | `added 360 packages in 4s` |
| `npm run check` | PASS — 0 errors / 0 warnings / 0 hints (8 files) |
| `npm run build` | PASS — `8 page(s) built in 1.41s` |
| 生成的路由 | `/`、`/about/`、`/lineage/`、`/timeline/`、`/seeds/voice/`、`/seeds/reading/`、`/seeds/design/`、`/seeds/memory/` |
| 静态资源路径 | 全部以 `/2015-Projects/_astro/...` 开头，无裸 `/assets/...` |
| localhost 引用 | 0 |
| 服务器私有路径 | 0（无 `/Users/`、`/home/ubuntu/`、`/Users/...` 之类） |
| API key / token / secret | 0 |

## 6. GitHub Pages Configuration

通过 GitHub REST API `POST /repos/{owner}/{repo}/pages` 启用并配置：

| 字段 | 值 |
|---|---|
| 启用方式 | `gh api -X POST repos/conanxin/2015-Projects/pages` 创建 + `gh api -X PUT .../pages -F build_type=workflow` |
| Build type | `workflow`（GitHub Actions） |
| Source | `master` 触发 `pages.yml` |
| public | `true` |
| Initial html_url | `http://conanxin.github.io/2015-Projects/`（HTTPS 由 GH Pages 强制） |
| Final URL | `https://conanxin.github.io/2015-Projects/`（HTTPS enforced） |

未记录任何 token / 密码 / 私有内容。`gh` CLI 使用本地 OAuth token，自动从 `gh auth status` 验证，不在报告中复述。

## 7. Workflow Run

| 字段 | 值 |
|---|---|
| Workflow name | `Deploy 2015 Projects Reborn to GitHub Pages` |
| Workflow run ID | `29123942495` |
| Run URL | https://github.com/conanxin/2015-Projects/actions/runs/29123942495 |
| Head SHA | `14972fe2b104565ce6731d8d9f58051c6a4b6743` |
| Status | `completed` |
| Conclusion | **success** |
| Trigger | `push`（来自 Pages workflow commit `14972fe2`）|
| 创建时间 | 2026-07-10T21:11:55Z |
| 完成时间 | 2026-07-10T21:12:40Z（45 秒） |

Job 步骤：

| Job | Step | Conclusion |
|---|---|---|
| Build Astro static site | Set up job | success |
| | Checkout repository | success |
| | Setup Node.js (LTS) | success |
| | Configure Pages | success |
| | Install dependencies | success |
| | Astro check | success |
| | Astro build (output to site/dist) | success |
| | Upload Pages artifact | success |
| Deploy to GitHub Pages | Deploy to GitHub Pages | success |

Deployment URL：`https://conanxin.github.io/2015-Projects/`

> 旁注：`gh api` 同期返回了一条名为 `pages build and deployment` 的旧系统自动 workflow run（ID `29123952048`，conclusion `failure`），来自切换 build_type 时 GH 的一次性 legacy 探测性触发。该 run 与本任务的 `pages.yml` workflow 完全独立，且未影响实际部署（部署由我提交的 `Deploy 2015 Projects Reborn to GitHub Pages` workflow 负责，success）。可忽略。

## 8. Online Validation

完整地址前缀：`https://conanxin.github.io/2015-Projects/`

| 路径 | HTTP | final URL | title | description（摘要） | 主体可见 | PASS/FAIL |
|---|---:|---|---|---|---|---|
| `/` | 200 | `https://conanxin.github.io/2015-Projects/` | `2015 Projects Reborn · 个人知识与记忆实验室` | `把 2015 年写下的四个想法，继续做下去。本仓库是「个人知识与记忆实验室」的项目谱系中枢。` | 是 | **PASS** |
| `/about/` | 200 | `https://conanxin.github.io/2015-Projects/about/` | `关于 · 2015 Projects Reborn` | 同上 | 是 | **PASS** |
| `/lineage/` | 200 | `https://conanxin.github.io/2015-Projects/lineage/` | `项目谱系 · 2015 Projects Reborn` | 同上 | 是 | **PASS** |
| `/timeline/` | 200 | `https://conanxin.github.io/2015-Projects/timeline/` | `时间线 · 2015 Projects Reborn` | 同上 | 是 | **PASS** |
| `/seeds/voice/` | 200 | `https://conanxin.github.io/2015-Projects/seeds/voice/` | `广播复兴 · Personal Radio Revival · 2015 Projects Reborn` | `读一段文字，听一首音乐，问候一下大家 —— 做成一档像《整点看世界》那样的个人广播台。` | 是 | **PASS** |
| `/seeds/reading/` | 200 | `https://conanxin.github.io/2015-Projects/seeds/reading/` | `开放阅读 · Open Reading · 2015 Projects Reborn` | `做一个开放电子阅读器，让更多人尤其是偏远地区的孩子能够开始阅读。` | 是 | **PASS** |
| `/seeds/design/` | 200 | `https://conanxin.github.io/2015-Projects/seeds/design/` | `Web 设计目录 · Web Design Catalogue · 2015 Projects Reborn` | `翻译 / 重新整理一份'做 Web 设计'的资源列表...` | 是 | **PASS** |
| `/seeds/memory/` | 200 | `https://conanxin.github.io/2015-Projects/seeds/memory/` | `家庭口述历史 · Family Oral History · 2015 Projects Reborn` | `把每个人家里的故事，变成'一个中国人家庭的近代史' wiki...` | 是 | **PASS** |

静态资源：

| 路径 | HTTP | size |
|---|---:|---:|
| `/_astro/about.DUKOEpsK.css` | 200 | 8 890 bytes |
| `/_astro/page.BT_9kWGp.js` | 200 | 2 250 bytes |

页面不是 GitHub 404；页面不是未样式化的 HTML；内部链接全部指向 `/2015-Projects/...`；无跳转 localhost；无资源路径丢失。

## 9. Browser Validation

通过 puppeteer 25（headless Chromium）对全部 8 路由 × 2 viewport（1440×900 desktop + 390×844 mobile）共 16 page-view 实际打开页面。

| Route | vp=1440×900 | vp=390×844 |
|---|---|---|
| `/` | HTTP 200 · 主区可渲染 · nav=4 · docW=clientW=1440 · 无横滚 · CSS loaded · console clean | HTTP 200 · 主区可渲染 · nav=4 · docW=clientW=390 · 无横滚 · CSS loaded · console clean |
| `/about/` | HTTP 200 · PASS | HTTP 200 · PASS |
| `/lineage/` | HTTP 200 · PASS | HTTP 200 · PASS |
| `/timeline/` | HTTP 200 · PASS | HTTP 200 · PASS |
| `/seeds/voice/` | HTTP 200 · PASS | HTTP 200 · PASS |
| `/seeds/reading/` | HTTP 200 · PASS | HTTP 200 · PASS |
| `/seeds/design/` | HTTP 200 · PASS | HTTP 200 · PASS |
| `/seeds/memory/` | HTTP 200 · PASS | HTTP 200 · PASS |

总览：

- **横向溢出**：0 页（16/16 都满足 `scrollWidth ≤ clientWidth`）
- **console error**：0 条
- **requestfailed**：0 条
- **CSS 加载**：16/16 页面 `document.styleSheets.length ≥ 1`

临时截图保存在 `/tmp/2015-projects-v0_1b-online/`，共 16 张 PNG；任务书要求的「首页 + lineage + memory 桌面+移动 6 张核心截图」全部生成。

> 重要：这些截图位于 `/tmp/`，**不属于 Git 交付物**。本 commit 与之前的 Pages workflow commit 均不包含截图。

## 10. Historical Integrity

SHA-256 比对：当前工作树 vs `git show dc8e86e7:<file>`

| 文件 | 原始 SHA-256 | 当前 SHA-256 | 结果 |
|---|---|---|---|
| `README.md` | `3c630b3a644660c8e1ac9e1a948c6cd33fa62dc33867b716e9e4a35d507efbba` | `3c630b3a644660c8e1ac9e1a948c6cd33fa62dc33867b716e9e4a35d507efbba` | **MATCH** |
| `1.Podcast-Plan.md` | `98d2580d48a1498e531265676fdc9e0649f260cd2d2d9ddbd238d39c7e7cd8b0` | `98d2580d48a1498e531265676fdc9e0649f260cd2d2d9ddbd238d39c7e7cd8b0` | **MATCH** |
| `2.E-Reader.md` | `1c6551563df132c8673a7d794b92b97abb87992f6d75005a29a0926dc5a3dc36` | `1c6551563df132c8673a7d794b92b97abb87992f6d75005a29a0926dc5a3dc36` | **MATCH** |
| `3.DESIGNING For The Web.md` | `6a562415efe31a16638fb51d89b0236c47675d2820b92770612dc1ac44f9928c` | `6a562415efe31a16638fb51d89b0236c47675d2820b92770612dc1ac44f9928c` | **MATCH** |
| `4.Recordingl history.md` | `7bf48c923edee4837b325b755e606d6b711458763587ea82cc02aac8eb4eee5b` | `7bf48c923edee4837b325b755e606d6b711458763587ea82cc02aac8eb4eee5b` | **MATCH** |

**全部 MATCH。** V0.1A → V0.1B 完整流程未触动 5 份原始文件。

## 11. Repository Side Effects

| 维度 | 实际 | 预期 | 符合 |
|---|---|---|---|
| README.md 是否修改 | 否 | 否 | ✓ |
| 四份 2015 项目文档是否修改 | 否 | 否 | ✓ |
| 是否创建 tag | 否（`git tag --list` 为空） | 否 | ✓ |
| 是否创建 GitHub Issue | 否 | 否 | ✓ |
| 是否修改默认分支 | 否（保持 `master`） | 否 | ✓ |
| 是否新增 workflow | 是（`.github/workflows/pages.yml`） | 是 | ✓ |
| 是否创建 `gh-pages` 分支 | 否（仅 `master`） | 否 | ✓ |
| 是否使用外部部署服务 | 否（仅 GH Actions） | 否 | ✓ |
| 是否改动 GitHub Pages 设置 | 是（启用 + 设置 build_type=workflow） | 是（仅此必要操作） | ✓ |
| 是否改动 11 个后继仓库 | 否（仅在本仓库内添加 workflow 与报告） | 否 | ✓ |

## 12. Known Limitations

V0.1B 范围内**未做**：

- **仓库根目录 README.md 保持 2015 原文**——5 份原始文件一字未改。
- **站点没有自定义域名**，默认 `*.github.io`。
- **没有真实家庭成员资料** —— 仅方法论展示。
- **没有访谈、录音、自动转录功能** —— 没有 OHMS clone。
- **没有搜索后端、AI 聊天、CMS、用户账号、评论或社区**。
- **11 个后继仓库仍仅通过谱系链接连接**，没有合并代码或共享 runtime。
- **本地 preview server 在本任务期间被显式 kill**，避免和线上混淆；如需进一步检查，请使用 `cd site && npm run preview`。
- **本次未启用 RSS / sitemap** —— Astro static 默认仅发 HTML/CSS/JS；如未来需要，等 V0.1C 之后再加。

## 13. Next Stage

下一阶段建议为 **V0.1C：历史 README 保存策略与新版仓库入口设计**。

要点：
- 现状：仓库根 `README.md` 仍是 2015 原文（5 份原始 SHA-256 之第一），不可修改。需要设计一个**新版本入口 README**，可能放在 `reports/` 之外或用 `docs/ENTRYPOINT.md`，既不替代 5 份原始文件（其中一份 README），也让第一次到访的人在 GitHub 仓库首页一眼看到「2015 Projects Reborn / 个人知识与记忆实验室」与本仓库当前是 Meta 项目谱系而非 2015 当时的应用计划。
- 这一阶段**仍不修改** `README.md` 原文件。
- 然后才进入 **V0.2**：家庭口述历史单样本 Pilot（仅使用公开材料，不引入真实家庭成员）。

**关键不变项（下一阶段必须继续守住）**：

1. 5 份 2015 原始文件 SHA-256 必须继续 MATCH。
2. `master` 分支必须保持默认分支。
3. 仓库名称保持 `2015-Projects`。
4. 11 个后继仓库保持独立，本仓库仅建立连接关系。
5. AI Agent 角色：整理 / 审计 / 辅助，不替代讲述者本人。
