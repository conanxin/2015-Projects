# 08 · 资料分类与存储

> 出处：[UCSB DLS #18] Embargo / Controlled Access; [Heritage #20] Heritage Fund; [OHA #3] Restrictions; [UTRGV #16] Forms。
>
> 本文定义本项目的"四层资料"分类，以及哪些层允许出现在哪里。

## 8.1 四层分类总览

```
Level 0   原始私密资料   raw private
Level 1   受限工作资料   working / restricted
Level 2   已批准发布素材 approved release
Level 3   已公开发布结果 publicly published
```

**下表列出每层含什么、谁能访问、能否进公共仓库：**

| Layer | 名称 | 资料内容示例 | 谁可访问 | 路径 | 公共 Git? |
|---|---|---|---|---|---|
| 0 | raw private | 原始音频 / 视频；真实身份 / 联系方式；同意书原件；完整原话转录；未删减照片；身份对应表 | 操作者本人；家庭私下可见的副本 | `oral-history-private/` | ❌ |
| 1 | restricted working | 工作转录；校订记录；时间码草稿；敏感内容标记；讲述者审核意见；未批准页面草稿 | 操作者；私下审阅者（如有） | `oral-history-working/` | ❌ |
| 2 | approved release | 化名；已批准的短摘录；已批准的音频片段或官方媒体链接；已批准的摘要；已批准的人物 / 地点 / 事件字段 | 操作者；讲述者；公共待发布 | `site/src/content/stories/` + `site/src/data/stories/` | ✅（但**仅**当 schema 通过 validator） |
| 3 | publicly published | 静态网页；公开元数据；已批准短摘录；公开来源链接；版本化发布记录 | 任何访问者 | `site/dist/`（由 GitHub Pages 托管） | ✅ |

## 8.2 路径建议（**不在**本仓库内创建）

```
oral-history-private/
└── OH-YYYY-NNN/
    ├── consent/
    │   ├── OH-YYYY-NNN_consent_v01_<日期>.md
    │   ├── OH-YYYY-NNN_recording-permission_v01.md
    │   ├── OH-YYYY-NNN_ai-processing-options_v01.md
    │   └── OH-YYYY-NNN_interview-boundaries_v01.md
    ├── identity/
    │   ├── OH-YYYY-NNN_real-name-map.md （化名映射 / 真实身份）
    │   └── OH-YYYY-NNN_withdrawal-contact.md
    ├── raw/
    │   ├── OH-YYYY-NNN-S01_raw-audio_<日期>.wav
    │   ├── OH-YYYY-NNN-S01_raw-video_<日期>.mp4
    │   ├── OH-YYYY-NNN-S01_session-log_<日期>.md
    │   └── OH-YYYY-NNN-S01_working-copy.wav
    ├── transcript/
    │   ├── OH-YYYY-NNN-S01_transcript-raw.md
    │   └── OH-YYYY-NNN-S01_redaction-log.md
    ├── review/
    │   └── OH-YYYY-NNN-S01_narrator-review-form_v01.md
    └── decisions/
        ├── OH-YYYY-NNN-S01_publication-decision_v01.json
        └── OH-YYYY-NNN-S01_publication-approval_v01.md

oral-history-working/
└── OH-YYYY-NNN/
    ├── edited-transcript/
    ├── segments/
    ├── fact-check/
    └── publication-draft/

public repository/
└── 已批准 Level 2 内容（短摘录 / 化名 / 时间码 / 标签 / 官方链接 / Level 2 范围摘要）
    └── site/src/content/stories/<slug>.md
        site/src/data/stories/<slug>.segments.json
```

## 8.3 严格的"流动" 顺序

**Level 0 → Level 1**：操作者本人；**必然**经过人工转录 / 校订；
**绝不**在 AI 工具未经同意书 B 段确认时输入到云端 AI。

**Level 1 → Level 2**：讲述者本人审核（Review A/B/C 三层）；
**绝不**由操作者单方面"认为已同意"。

**Level 2 → Level 3**：发布前再次经过 validator 与人工 gate；
**绝不**绕过 Gate 4。

**Level 3 → Level 2**：被讲述者要求撤回时按
`04-withdrawal-and-change-requests.md` 处理。

## 8.4 公共仓库的禁入清单

下面这些**永远**不进 `public repository`：

- 原始 wav / mp3 / mp4 / m4a 文件本身；
- 真实姓名、化名映射表、家庭地址、电话、邮件、身份证号等；
- 同意书原件（包括 v01 / v02 / v03 各版本）；
- 完整原文转录；
- 撤回 / 修改请求的内容；
- "未脱敏"敏感段落；
- 任何包含敏感第三方信息的草稿。

## 8.5 .gitignore 的"窄范围"规则

V0.3 在根 `.gitignore` 中加入：

```
# Private oral-history working materials
oral-history-private/
oral-history-working/
consent-records/
identity-maps/
```

**不**加入以下过宽规则：

```
*.mp3       # 原因：未来可能存在经过批准的公开媒体资产
*.wav
*.mp4
*.m4a
```

理由：被批准的公开媒体资产（如未来 NPS / 其它档案授权转载的片段）
可能需要被纳入 Story 页面；过宽规则会污染 Level 2 / Level 3 的
工作流。秘密层使用目录级而非文件后缀级 ignore，更可控。

## 8.6 与 V0.2B 公共样本的关系

- NPS Isadore 公开样本不属于四层系统；它来自公共档案，无 Level 0
  私有层。
- 把它放在 `site/src/content/stories/` 中可视作 Level 2 借位 Level 3
  的展示。
- 它的 schema 与未来真实家庭故事的 schema 完全相同，验证器对真实
  家庭故事做得更严格。
