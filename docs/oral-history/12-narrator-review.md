# 12 · 讲述者审核

> 出处：[OHA #1] Best Practices; [Nunn Center #12] Deed of Gift; [OHA #2] Informed Consent。
>
> 本文定义"三层审核"模型。它不是"必须签多次字"，而是"故事在公共
> 化前必须经过三种不同身份的判断"。详见 `templates/narrator-review-form.md`。

## 12.1 三层审核

```
Review A: 事实和身份     (operational — 事实正确性)
Review B: 公开边界       (privacy — 哪些能公开)
Review C: 最终页面       (presentation — 标题 / 摘要 / 标签)
```

### Review A — 事实和身份

审核内容：

- 姓名（化名、英文拼写、年份）
- 日期（年、月、日）
- 地点（具体到不需要重新识别个人的程度）
- 人物关系（化名对应关系）
- 职业（化名 / 行业级）
- 事件顺序

执行人：**操作者本人**对事实背景负责；
讲述者对**个人经历的事实**拥有核心发言权。

### Review B — 公开边界

审核内容：

- 哪些主题公开
- 哪些段落删除
- 哪些使用化名
- 音频是否公开
- 哪些照片公开
- 是否允许搜索引擎索引 / RSS / 社交媒体

执行人：**讲述者本人**对个人资料是否能公开拥有核心发言权。
**第三方**独立决定他们相关内容是否能公开。

### Review C — 最终页面

审核内容：

- 标题（中文 / 英文）
- 编辑摘要（中文）
- 短摘录（1–12 词中文翻译）
- 时间码校对
- 人物 / 地点 / 事件 / 主题标签
- 官方发布日期

执行人：**操作者**对页面排版/摘要负责；
**讲述者**对个人内容是否正确呈现拥有发言权。

## 12.2 三层之间的关系

- Review A 是技术性、整理性的，多在一次会话内完成。
- Review B 是边界性的，可能需要讲述者分多次决定（如家庭成员反应后
  修改决定）。
- Review C 接近发布时再做，是"发布前最后一次完整审阅"。

## 12.3 不需要讲述者认可的部分

- 操作者的注释（如方法论、参考文献）。
- 通用网站模板（`site/`），不属于具体故事的内容。

## 12.4 不允许操作者单方面决定的部分

- 讲述者本人之外的其他家庭成员能否被提到；
- 讲述者本人的健康 / 财务 / 政治 / 宗教具体内容是否进公开页面；
- 任何声音是否能被公开播放；
- 任何完整转录能否被搜索 / 索引 / 翻译 / 摘要。

## 12.5 审核记录的存放位置

| 审核层 | 记录文件 | 路径 |
|---|---|---|
| Review A | `OH-YYYY-NNN-S01_fact-check_v01.md` | `oral-history-working/.../fact-check/` |
| Review B | `templates/narrator-review-form.md` v01 | `oral-history-private/.../review/` |
| Review C | `templates/narrator-review-form.md` v02 | `oral-history-private/.../review/` |
| 共同签字 | `OH-YYYY-NNN-S01_publication-approval_v01.md` | `oral-history-private/.../decisions/` |

所有这些**不进公共 Git**。公开 Git 只看 **2 件事**：

1. 是否存在 `site/src/content/stories/<slug>.md` 与 `*.segments.json`；
2. 是否通过 `site/scripts/validate-story-data.mjs`。

## 12.6 审核与发布 gate 的对应

详见 `13-publication-gates.md`。本文档只描述"审核什么"，不描述
"几号门"。两个文档共同保证：

- 公开页面=被讲述者**逐项**签字（Review B）+ 被操作者**逐项**核实（Review A）+ 发布前完整**再走一次**（Review C）。
