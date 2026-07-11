# 2015 Projects Reborn V0.1C README Revival Report

---

## 1. Status

| 字段 | 值 |
|---|---|
| 状态 | **PASS** |
| 执行日期 | 2026-07-11 |
| 仓库路径 | `/home/ubuntu/.hermes/workspace/project/2015-Projects` |
| Branch | `master` |
| 起始 HEAD | `f65cfaf7a2acf3904e75b775d251ae9bd87f8b7d` |

## 2. Why the README Changed

仓库首页 README 直接决定 GitHub 上第一次到访者看到什么。从 V0.1B 开始，仓库的 GitHub Pages 上线后，**GitHub 仓库根 README 仍是 2015 年的 316 字节短文**，对访问者提供的提示极其有限。

V0.1C 是有意识的产品入口迁移：

- 把根 `README.md` 写成一个现代化的入口（项目名、副标题、标语、英文简介、Live Site、Timeline、Lineage Map、四个种子、后继项目、Roadmap、报告索引）。
- 在 **改动任何字节之前**，把 2015 原始 README 按字节归档到 `archive/2015/README.original.md`，并记录一份 `manifest.sha256` 用于未来任何人都能验证。

这不是删改历史，是把历史保留到合适的地方、把入口迁移到现在。

## 3. Historical Preservation

| 维度 | 值 |
|---|---|
| 原始 source commit | `dc8e86e7a6aa4f8dab44c381a912b29dd825d085` |
| 原始 README 在 Git 对象的 SHA-256 | `3c630b3a644660c8e1ac9e1a948c6cd33fa62dc33867b716e9e4a35d507efbba` |
| Archive `README.original.md` 实际 SHA-256 | `3c630b3a644660c8e1ac9e1a948c6cd33fa62dc33867b716e9e4a35d507efbba` |
| 二者关系 | **BYTE-EQUAL** (`diff` 输出空) |
| Archive `README.original.md` 路径 | `archive/2015/README.original.md` |
| Archive 目录说明文件 | `archive/2015/README.md` |
| SHA-256 manifest 路径 | [`archive/2015/manifest.sha256`](../archive/2015/manifest.sha256) |

manifest 文件基于 `git cat-file blob <sha>:<path>` 计算（不依赖当前工作树），保证其反映历史 Git 对象而非当前状态。包含 5 个条目 README + 四份 2015 项目文档，并定义了「未来如何验证」与「根 README 不再视为不可变」的规则。

四份 2015 项目文档的 SHA-256 在 V0.1C 之前 4 个 commit 中已多次核验，全部 MATCH。它们在 V0.1C 不会被改动，也未改动。

## 4. Integrity Rule Migration

| 旧规则 | 新规则（自 V0.1C 起） |
|---|---|
| 5 个根文件全部不变（README + 4 份 2015 文档） | **4 份根项目文档保持不变 + 1 份 README 原文档案保持不变** |
| 5 个文件均在仓库根 | 4 份项目文档仍在仓库根；README 原文在 `archive/2015/README.original.md` |
| 根 README 必须 MATCH `dc8e86e` | 根 README 由 V0.1C 入口负责，可与 `dc8e86e` 偏离 |

旧规则的覆盖范围是「改动任何根文件都会破坏完整性」——这适用于有强不可变意图的内容（4 份项目文档），但不适合作 为入口的 README。

新规则保留 4 份项目文档的不可变性（它们是内容）；把 README 的不变性**复制到归档**而非根目录（这样 README 可以更新）。

> 这不是历史完整性失败，是受控的入口迁移。

## 5. New README Structure

新根 `README.md` 主要章节（顺序按 GitHub 渲染首屏重要性）：

1. 标题：项目名称（中文副标题 + 中文标语 + 英文一句话简介）
2. GitHub Pages 状态 badge（仅一个）
3. **入口表**：Live Site / Project Timeline / Lineage Map
4. **这是什么**：诚实叙事，强调「不是成功学」与「2026 仍有 1 个孤立种子」
5. **四个项目种子**：表格，中英文角色与状态，每个链接到对应线上 seed 页面 + 原始项目文档链接
6. **2015 → 2026 时间线**：5 行故事，不写无法验证的精确日期
7. **后继项目**：11 个按 P1/P2/P3/P4 分组，每个 GitHub 链接，附「连接不合并」原则
8. **当前状态**：V0.1A / V0.1B / V0.1C 三段（无易过时的 workflow run ID）
9. **本地运行**：`npm ci / npm run dev / npm run check / npm run build`，明示 base path `/2015-Projects/`
10. **仓库结构**：树图，覆盖四份原始文档 + archive + reports + site + .github/workflows
11. **历史原件**：指向 `archive/2015/README.original.md` 与 `manifest.sha256` 与原始源 commit `dc8e86e`
12. **Roadmap**：Current (V0.1C) / Next (V0.2 一位讲述者、一次访谈、一个故事页面) / Later
13. **Research and Reports**：4 份已生成的报告 + V0.1C 本报告
14. **License**：未声明（与现有仓库事实一致）
15. 结尾：AI Agent 角色说明

## 6. Four Project Seeds

| 种子 | 当前角色 | 状态 |
|---|---|---|
| P1 广播复兴 | 编辑与音频传播层（承载《万物小窗》/ RSS / 口述历史片段） | Evolved |
| P2 开放阅读 | 阅读、解析、检索与知识整理能力层 | Evolved |
| P3 Web 设计目录 | 历史档案 + Agent 链接维护实验 | Archive maintained |
| P4 家庭口述历史 | 近期旗舰 Pilot + 长期核心方向 | Pilot next |

每个项目在新 README 中既链接到线上 `https://conanxin.github.io/2015-Projects/seeds/<slug>/` 也链接到仓库根的原始 markdown（保留原文件名拼写 `Recordingl`）。

## 7. Descendant Projects

11 个后继仓库的分组列在根 README 的「后继项目」段，并配一段明确说明：

> 它们在思想、内容或工作流上有关联，但没有合并到本仓库。

每个项目用 `conanxin/<name>` 链接到对应 GitHub 仓库。

P1: `wonder-window-cn`、`medium-archive`、`hermes-knowledge-base`、`2015-Daily-Recording`、`2016-Daily-Recording`、`hermes-agent`（仅作 operator）
P2: `ebook-treasure-chest`、`ebook-content-lab`、`book-id-search`、`DocuMuse`、`courses-zh`
P3: `courses-zh`、`medium-archive`
P4: `DocuMuse`、`hermes-knowledge-base`

## 8. Repository Metadata

通过 `gh repo edit` 更新（验证后）：

| 字段 | 值 |
|---|---|
| Name | `2015-Projects`（未改） |
| Description | `2015 Projects Reborn — 个人知识与记忆实验室` |
| HomepageUrl | `https://conanxin.github.io/2015-Projects/` |
| Default branch | `master` |
| Topics | `astro`, `digital-history`, `oral-history`, `personal-archive`, `project-lineage`（共 5 个） |
| Visibility | `public`（未改） |
| Pages status | `built`，`build_type = workflow`（V0.1B 设置保持不变） |
| Issue / Wiki / Projects | 默认开启（未改） |

未做的事：未变更仓库名、未启用/关闭任何 GH 功能、未改 default branch。

## 9. Site Regression Check

不允许修改 `site/`，故重新执行：

| 检查 | 结果 |
|---|---|
| `npm ci` | PASS — `added 360 packages in 6s` |
| `npm run check` | PASS — 0 errors / 0 warnings / 0 hints（8 files） |
| `npm run build` | PASS — `8 page(s) built in 1.52s` |
| 生成页面 | index / about / lineage / timeline + 4 seeds |
| `git status site/` 内部 | 无修改（`site/` 整体在仓库层只 `site/` 子树里是干净的；`site/dist/` 被 `.gitignore` 排除） |

线上抽检（`https://conanxin.github.io/2015-Projects/...`）：

| 路径 | HTTP |
|---|---:|
| `/` | 200 |
| `/timeline/` | 200 |
| `/lineage/` | 200 |
| `/seeds/memory/` | 200 |

## 10. Original Document Integrity

四份 2015 项目文档（V0.1C 后仍要求 MATCH）：

| 文件 | Original SHA-256 | Current SHA-256 | 结果 |
|---|---|---|---|
| `1.Podcast-Plan.md` | `98d2580d48a1498e531265676fdc9e0649f260cd2d2d9ddbd238d39c7e7cd8b0` | `98d2580d48a1498e531265676fdc9e0649f260cd2d2d9ddbd238d39c7e7cd8b0` | **MATCH** |
| `2.E-Reader.md` | `1c6551563df132c8673a7d794b92b97abb87992f6d75005a29a0926dc5a3dc36` | `1c6551563df132c8673a7d794b92b97abb87992f6d75005a29a0926dc5a3dc36` | **MATCH** |
| `3.DESIGNING For The Web.md` | `6a562415efe31a16638fb51d89b0236c47675d2820b92770612dc1ac44f9928c` | `6a562415efe31a16638fb51d89b0236c47675d2820b92770612dc1ac44f9928c` | **MATCH** |
| `4.Recordingl history.md` | `7bf48c923edee4837b325b755e606d6b711458763587ea82cc02aac8eb4eee5b` | `7bf48c923edee4837b325b755e606d6b711458763587ea82cc02aac8eb4eee5b` | **MATCH** |

**4/4 MATCH。** V0.1C 没有改动这 4 份。

原始 README（V0.1C 后允许根 README 偏离，但 archive 必须 MATCH 原始）：

| 维度 | SHA-256 / 关系 |
|---|---|
| 原始 README（来自 `dc8e86e:README.md`） | `3c630b3a644660c8e1ac9e1a948c6cd33fa62dc33867b716e9e4a35d507efbba` |
| `archive/2015/README.original.md` 当前 | `3c630b3a644660c8e1ac9e1a948c6cd33fa62dc33867b716e9e4a35d507efbba` |
| 关系 | **BYTE-EQUAL** |
| 根 `README.md` 当前 SHA | 已是 V0.1C 现代化版本，不再要求 MATCH |

Manifest 路径：`archive/2015/manifest.sha256`（5 项完整列表）。

## 11. Repository Side Effects

| 维度 | 实际 | 预期 | 符合 |
|---|---|---|---|
| 是否修改 README.md | **是**（V0.1C 现代化入口替换） | 是 | ✓ |
| 是否修改四份 2015 项目文档 | 否 | 否 | ✓ |
| 是否修改 `site/` | 否（重新构建验证未触及源文件） | 否 | ✓ |
| 是否修改 workflow | 否 | 否 | ✓ |
| 是否创建 tag | 否 | 否 | ✓ |
| 是否创建 Issue | 否 | 否 | ✓ |
| 是否修改默认分支 | 否（仍 `master`） | 否 | ✓ |
| 是否修改 Pages | 否（仅保留已有设置） | 否 | ✓ |
| 是否创建 `gh-pages` 分支 | 否 | 否 | ✓ |
| 是否修改仓库可见性 | 否 | 否 | ✓ |
| 是否使用外部部署服务 | 否 | 否 | ✓ |
| 是否变更仓库名 | 否 | 否 | ✓ |
| 是否合并后继仓库代码 | 否 | 否 | ✓ |
| 是否修改仓库 `.github/workflows/pages.yml` 已有内容 | 否 | 否 | ✓ |

新增内容（两 commit 内）：

- `archive/2015/README.original.md`
- `archive/2015/README.md`
- `archive/2015/manifest.sha256`
- `README.md`（被改）
- `reports/v0_1c_readme_revival_report.md`（第二个 commit）

## 12. Known Limitations

按本任务约束，V0.1C 范围内**未做**：

- **README 只是仓库入口**，不是完整产品文档；完整产品见 `site/` 与 4 份研究报告。
- **没有自定义域名**；线上仍是 `conanxin.github.io/2015-Projects/`。
- **没有真实家庭成员资料** —— 仍未进入 V0.2。
- **没有访谈、转录或 OHMS 功能** —— 仍未进入 V0.2。
- **没有搜索后端、AI 聊天、CMS、用户账号、评论或社区**。
- **11 个后继仓库仍仅通过谱系链接连接**，没合并代码。
- **License 仍是未指定**；与 2015 原始仓库一致，本任务不擅自添加。

## 13. Next Stage

下一阶段：**V0.2 — 家庭口述历史单样本 Pilot**。

明确范围：

- **只使用可公开使用的材料**（如《乱时候，穷时候》公开版本或类似公开文档）
- **一位讲述者**：从公开材料中「代理」出一段采访文本作为 Pilot；不强求真实家庭成员参与
- **一次访谈**：单次完整的文本 + 时间码（OHMS 形态）
- **一个故事页面**：1 个静态页

验证：

1. **内容模型**——schema（`audio/`、`transcripts/`、`release.md`、`index.json`）可用；
2. **时间码**——词级或句级对齐在中文口语下可读；
3. **来源锚定**——段落点击后能跳回原文位置；
4. **阅读体验**——移动 + 桌面都正常。

**不做**：

- 不建立 Wiki、多人协作、账号、社区、评论；
- 不部署播客托管；
- 不进入 P1 之外的更新；
- 不修改 4 份 2015 项目文档；
- 不合并后继仓库代码；
- 不进入 V0.3 或更高阶段。

应继续守住的不变项：

1. 4 份 2015 项目文档 4/4 MATCH `dc8e86e`。
2. `archive/2015/README.original.md` 与 `dc8e86e:README.md` BYTE-EQUAL。
3. `master` 分支保持默认分支，未重命名 `main`。
4. 仓库名保持 `2015-Projects`。
5. 11 个后继仓库保持独立开发。
6. AI Agent 角色：整理 / 审计 / 辅助，**不替代讲述者本人**。
