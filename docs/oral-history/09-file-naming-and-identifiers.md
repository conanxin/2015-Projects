# 09 · 文件命名与编号

> 出处：内部约定；参考 [UTRGV #16] Forms; [Nunn Center #12] Deed of Gift 表单字段。
>
> 本文统一本项目的命名约束，配合
> `08-data-classification-and-storage.md` 和 `schemas/` 中的
> JSON Schema 使用。

## 9.1 编号体系

### 项目级

```
OH-YYYY-NNN
```

- `OH`：`Oral History`（固定前缀）
- `YYYY`：4 位年份（项目创建年份）
- `NNN`：3 位序号（从 001 开始，同年自增；不复用）

示例：`OH-2026-001`，`OH-2026-002`，`OH-2027-001`。

### 会话级

```
OH-YYYY-NNN-S##
```

- `S`：`Session`
- `##`：2 位会话序号（从 01 起）

示例：`OH-2026-001-S01`。

### 描述级（叙述者编号 / 编辑者编号 / 化名编号）

- 叙述者编号：在 `identity/` 目录中以 **化名** 形式存在，**不**用真实姓名。
- 编辑者编号：操作员 = `editor-001`（单人项目）。
- 化名在 `identity/real-name-map.md` 中以一对一映射形式存储（**仅**
  Level 0 可见），公开层使用化名。

## 9.2 文件名模板

通用格式：

```
<项目编号>[<_会话编号>]_<类型>[_v<版本>]_<日期>.<ext>
```

### 类型（type）

| 类型 | 含义 | 示例 |
|---|---|---|
| `raw-audio` | 原始音频原件（不修改） | `OH-2026-001-S01_raw-audio_[YYYY-MM-DD].wav` |
| `raw-video` | 原始视频原件 | `OH-2026-001-S01_raw-video_[YYYY-MM-DD].mp4` |
| `session-log` | 会话元数据 | `OH-2026-001-S01_session-log_[YYYY-MM-DD].md` |
| `consent` | 同意书 | `OH-2026-001_consent_v01_[YYYY-MM-DD].md` |
| `recording-permission` | 录制权限 | `OH-2026-001_recording-permission_v01.md` |
| `ai-processing-options` | AI 处理选项 | `OH-2026-001_ai-processing-options_v01.md` |
| `interview-boundaries` | 采访边界 | `OH-2026-001_interview-boundaries_v01.md` |
| `transcript-raw` | 原始转录 | `OH-2026-001-S01_transcript-raw.md` |
| `transcript-edited` | 编辑过的转录 | `OH-2026-001-S01_transcript-edited_v01.md` |
| `segments` | 时间码 + 短摘录 JSON | `OH-2026-001-S01_segments_v01.json` |
| `narrator-review-form` | 讲述者审核 | `OH-2026-001-S01_narrator-review-form_v01.md` |
| `publication-decision` | 发布决定 JSON | `OH-2026-001-S01_publication-decision_v01.json` |
| `publication-approval` | 发布批准 MD | `OH-2026-001-S01_publication-approval_v01.md` |
| `withdrawal` | 撤回记录 | `OH-2026-001-S01_withdrawal_<日期>.md` |
| `redaction-log` | 脱敏日志 | `OH-2026-001-S01_redaction-log_v01.md` |
| `public-release-checklist` | 公开发布清单 | `OH-2026-001-S01_public-release-checklist.md` |

### 版本（v##）

- 每次实质性修订或见证者重新签字都需要新版本。
- 从 `v01` 起；不写 `v0`、`v0.1`、`v01-draft`、`v01-final`、`v01-final-2`。
- `v01-final-2` 这种命名永远被禁止。

### 日期（<日期>）

- ISO 格式 `YYYY-MM-DD`，避免歧义。
- 不写作 `2026-7-1` 或 `08-01-2026`。

## 9.3 命名禁忌

- **绝不**把真实姓名 / 电话 / 邮件 / 身份证号写进文件名。
- **绝不**把化名与真实姓名写在同一文件名中。
- **绝不**用 `final` / `final-final` / `FINAL` / `final2` 之类的模糊术语。
- **绝不**用旧版覆盖新版；保留 v## 历史。
- **绝不**直接用 `~` / `$` / 空格；只使用 ASCII / 中文 + `-` / `_`。
- **绝不**把家庭成员的全名串联进单条会话名。
- **绝不**将撤回请求的内容写入 Git。

## 9.4 项目级与公共 IDs 的对应

| 用途 | 命名空间 |
|---|---|
| 公共网站页面（已批 Level 2） | `site/src/content/stories/<slug>.md`，slug 必须符合 `^[a-z0-9-]+$` |
| 网站时间码数据 | `site/src/data/stories/<slug>.segments.json`，slug 同上 |
| 私有工作目录 | `oral-history-private/OH-YYYY-NNN/...` 与 `oral-history-working/...` |
| 公共对应数字 ID | 与项目编号无关；可由 Astro 自动生成 |

## 9.5 与 schemas 的协同

- `schemas/interview-project.schema.json` 中 `projectId` 对应 `OH-YYYY-NNN`。
- `schemas/participant-consent.schema.json` 中 `consentId` 对应
  `OH-YYYY-NNN_consent_v<NN>_<日期>`。
- `schemas/publication-decision.schema.json` 中 `decisionVersion` 对应
  `v<NN>`。

## 9.6 示例：`OH-2026-001` 完整文件集合

```
oral-history-private/OH-2026-001/
  consent/
    OH-2026-001_consent_v01_[YYYY-MM-DD].md
    OH-2026-001_recording-permission_v01_[YYYY-MM-DD].md
    OH-2026-001_ai-processing-options_v01_[YYYY-MM-DD].md
    OH-2026-001_interview-boundaries_v01_[YYYY-MM-DD].md
  identity/
    OH-2026-001_real-name-map.md
    OH-2026-001_withdrawal-contact.md
  raw/
    OH-2026-001-S01_raw-audio_[YYYY-MM-DD].wav
    OH-2026-001-S01_session-log_[YYYY-MM-DD].md
  transcript/
    OH-2026-001-S01_transcript-raw.md
    OH-2026-001-S01_redaction-log_v01.md
  review/
    OH-2026-001-S01_narrator-review-form_v01.md
  decisions/
    OH-2026-001-S01_publication-decision_v01.json
    OH-2026-001-S01_publication-approval_v01.md

oral-history-working/OH-2026-001/
  edited-transcript/
    OH-2026-001-S01_transcript-edited_v01.md
  segments/
    OH-2026-001-S01_segments_v01.json
  fact-check/
    OH-2026-001-S01_fact-check_v01.md
  publication-draft/
    OH-2026-001-S01_publication-draft_v01.md
    OH-2026-001-S01_public-release-checklist.md

site/src/content/stories/<slug>.md                  ← only if approved
site/src/data/stories/<slug>.segments.json           ← only if approved
```
