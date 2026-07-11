# docs/oral-history/

> **家庭口述历史治理工作包 / Family Oral History Governance Kit**
> 准备日期：[YYYY-MM-DD]
> 对应工程阶段：V0.3（治理）/ V0.4（不涉他人的 dry run）/ V0.5+（真实家庭访谈）
>
> **本文档不是法律意见。** 每份模板都标记为「项目操作模板」，需要由律师
> 按讲述者实际所在司法管辖区审核后，才能成为具有法律效力的文件。
>
> 详细出处与资料卡见
> [`research/v0_3_family_oral_history_governance_sources.md`](../../research/v0_3_family_oral_history_governance_sources.md)。

## 工作包的边界

**这份工作包做什么：**
- 定义「在 2015 Projects Reborn / 个人知识与记忆实验室」框架下录制一段
  真实家庭采访前必须确认的所有事项；
- 把这些事项分成「伦理与最佳实践」「运营与技术资料管理」两层；
- 提供可勾选的模板和 JSON Schema；
- 在公共仓库中只保存治理文本与模板示例；
- 通过 `.gitignore` 与 validator 双层门禁，确保公共 Git 永远不进入
  私密原始资料。

**这份工作包不做什么：**
- 不录制任何真实家庭音频；
- 不生成任何真实家庭成员的姓名、地址、电话、证件；
- 不提供司法管辖区专属的法律合同；
- 不建立 OHMS / Omeka / Wiki / 数据库系统；
- 不对任何具体受访者预先假定同意选项。

## 谁该读哪份文档

| 角色 | 应读 |
|---|---|
| 想要做家庭采访的 operator（项目操作者） | 01 / 03 / 05 / 06 / 07 / 08 / 09 / 10 / 11 / 13 / 15 |
| 想要了解自己权益的讲述者 | 02 / 04 / 12 |
| 受访者的家庭成员（间接相关） | 02 / 03 / 08 |
| 负责发布页面的 editor | 12 / 13 |
| 想要理解技术结构的运维 | 08 / 09 / 10 / 11 / 13 / `schemas/` |
| 律师（如要审阅） | 03 / 04 / 13 / `templates/` 中所有 consent / publication / withdrawal 文件 |

## 目录结构

```
docs/oral-history/
├── README.md                                 ← 你在这里
├── 01-project-principles.md
├── 02-participant-rights.md
├── 03-consent-and-permissions.md
├── 04-withdrawal-and-change-requests.md
├── 05-interview-preparation.md
├── 06-interview-question-guide.md
├── 07-recording-session-protocol.md
├── 08-data-classification-and-storage.md
├── 09-file-naming-and-identifiers.md
├── 10-transcription-and-timecodes.md
├── 11-sensitive-content-and-redaction.md
├── 12-narrator-review.md
├── 13-publication-gates.md
├── 14-post-publication-maintenance.md
├── 15-ai-processing-policy.md
├── templates/
│   ├── participant-information-sheet.md
│   ├── consent-record.md
│   ├── recording-permission.md
│   ├── ai-processing-options.md
│   ├── interview-boundaries.md
│   ├── interview-session-log.md
│   ├── narrator-review-form.md
│   ├── publication-approval.md
│   ├── withdrawal-or-change-request.md
│   ├── redaction-log.md
│   └── public-release-checklist.md
└── schemas/
    ├── interview-project.schema.json
    ├── participant-consent.schema.json
    ├── interview-session.schema.json
    ├── publication-decision.schema.json
    └── withdrawal-request.schema.json
```

## 四层资料边界（一图概览）

```
                 ┌────────────────────────────────────────────┐
   Level 0       │ 原始私密资料 (raw private)                 │
   raw private   │ 录音 / 视频 / 同意书原件 / 真实身份 / 完整 │   ← 仅 oral-history-private/
                 │ 转录 / 联系方式 / 身份对应表              │
                 └────────────────┬───────────────────────────┘
                                  │ 人工 gate
                                  ▼
                 ┌────────────────────────────────────────────┐
   Level 1       │ 受限工作资料 (working / restricted)         │
   working       │ 工作转录 / 校订记录 / 时间码草稿 / 敏感标  │   ← 仅 oral-history-working/
                 │ 记 / 讲述者审核意见 / 未批准页面草稿       │
                 └────────────────┬───────────────────────────┘
                                  │ 讲述者人工审核 (Review A/B/C)
                                  ▼
                 ┌────────────────────────────────────────────┐
   Level 2       │ 已批准发布素材 (approved release)          │
   approved      │ 化名 / 已批短摘录 / 已批音频片段 / 已批   │   ← 准备进入 stories collection
                 │ 摘要 / 已批标签                            │
                 └────────────────┬───────────────────────────┘
                                  │ validator + 人工 gate
                                  ▼
                 ┌────────────────────────────────────────────┐
   Level 3       │ 已公开发布 (publicly published)            │
   public        │ 静态网页 / RSS / 已批准短摘录 / 公开来源   │   ← GitHub Pages
                 │ 链接 / 版本化发布记录                      │
                 └────────────────────────────────────────────┘
```

任意一层向下必须经过对应的人工 gate。Level 0 / 1 的资料
**永远不**进入 `public repository`（即本仓库 `conanxin/2015-Projects`）。

## 配合使用的脚本与基线

- `scripts/validate-oral-history-governance.mjs` — 检查本工作包的完整性
  （文件存在、模板隐私提示、Schema 形状、无真实个人资料泄漏）。
- 根 `.gitignore` — 在工作包之后加入三个最小私密目录规则：
  `oral-history-private/`、`oral-history-working/`、`consent-records/`、
  `identity-maps/`。
- `site/scripts/validate-story-data.mjs` — 当一个 Level 2 collection 进入
  `site/src/content/stories/` 时，会再次检查公共内容是否符合本治理规范
  的最简要求（媒体域、NPS / 授权来源、短摘录总词数）。

## 版本与变更

- 本工作包 V0.3.0，[YYYY-MM-DD]；起草人：项目 operator（单人）。
- 下一次更新条件：真实家庭访谈第一次进行之前，或叙述者权益范围发生
  实质变化（如跨语言、跨性别、跨残障）时。
- **不要**在没有讲解者本人参与的情况下修改本工作包。
