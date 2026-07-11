# 02 · 讲述者权利

> 出处：[OHA #2] Informed Consent; [OHS #8] OHS Informed consent; [OHA #3] Restrictions; [UCSB DLS #18] Embargo / Controlled Access white paper。
>
> 阅读顺序建议：先读本文档，再读 `03-consent-and-permissions.md`，再读
> `templates/participant-information-sheet.md`。

## 2.1 权利清单（明确告知讲述者）

讲述者在与本项目合作的全过程中，享有以下权利。每条权利都对应一个
"操作员必须配合的事"，并在 `03-consent-and-permissions.md` 的勾选项
中具体落地。

### A. 信息权利

| # | 讲述者可以... | 操作员必须配合的事 |
|---|---|---|
| 1 | 了解项目目的 | 在录制前给出通俗解释，并用 `templates/participant-information-sheet.md` 让讲述者带走一份。 |
| 2 | 了解谁会看到资料 | 公开 Level 3 公开范围列表；私密 Level 0/1 只允许谁看。 |
| 3 | 拒绝录某些话题 | 勾选 `templates/interview-boundaries.md` 中"不谈"区。 |

### B. 媒体同意权利

| # | 讲述者可以... | 操作员必须配合的事 |
|---|---|---|
| 4 | 选择真实姓名、化名或匿名 | 化名和匿名均按 Level 2 处理；化名映射表放在 Level 0。 |
| 5 | 同意或拒绝录音 | `templates/consent-record.md` A 段勾选。 |
| 6 | 同意或拒绝视频 | `templates/consent-record.md` A 段勾选。 |
| 7 | 选择只笔记不录音 | `templates/consent-record.md` A 段勾选。 |
| 8 | 选择允许或禁止照片拍摄 | `templates/consent-record.md` A 段勾选。 |

### C. 处理同意权利

| # | 讲述者可以... | 操作员必须配合的事 |
|---|---|---|
| 9 | 选择人工 / 本地 / 云端 AI 处理 | `templates/consent-record.md` B 段勾选；云端与本地分项。 |
| 10 | 禁止声音克隆 / 模型训练 / 公开聊天机器人语料 | 这些是默认**禁止**项，未单独勾选默认禁用。 |
| 11 | 允许或禁止 AI 摘要 / 翻译 | `templates/consent-record.md` B 段勾选。 |

### D. 公开形式权利

| # | 讲述者可以... | 操作员必须配合的事 |
|---|---|---|
| 12 | 选择公开页面 / 仅家庭内部 / 仅项目研究 | `templates/consent-record.md` C 段勾选。 |
| 13 | 允许或禁止 RSS / 播客 / 社交媒体 | `templates/consent-record.md` C 段勾选。 |
| 14 | 选择允许音频 / 视频 / 完整转录 / 编辑转录 / 短摘录 / 中文翻译 | `templates/consent-record.md` D 段勾选；不预选最开放选项。 |
| 15 | 要求只开放给特定链接 | 通过 `noindex` + 受限分享机制实现。 |
| 16 | 允许或禁止搜索引擎索引 | 通过 `robots.txt` 与 `<meta name="robots">` 控制。 |

### E. 时间权利

| # | 讲述者可以... | 操作员必须配合的事 |
|---|---|---|
| 17 | 设置延迟公开日期 | `templates/consent-record.md` E 段勾选；embargo 模式。 |
| 18 | 让发布在自己身后才公开 | 由家属触发；可在 `templates/withdrawal-or-change-request.md` 中要求家属代办。 |
| 19 | 在任何阶段暂停、撤回、修改 | 详见 `04-withdrawal-and-change-requests.md`。 |

### F. 审核权利

| # | 讲述者可以... | 操作员必须配合的事 |
|---|---|---|
| 20 | 在发布前逐项审核 | `templates/narrator-review-form.md` 三层审核。 |
| 21 | 保留一段"待删"区域 | `templates/redaction-log.md` 中记录。 |
| 22 | 设置不被某家庭成员看到的范围 | 在 `templates/interview-boundaries.md` 中勾选。 |

## 2.2 权利之外的限制（一定要告诉讲述者）

为了让讲述者对"自己能控制什么"有真实预期，必须同时讲清这些限制：

1. **公共 Git 历史与第三方缓存可能难以完全撤回。** 即使将来从
   `stories/` 下架，外部镜像、`web.archive.org`、社交媒体抓取仍然存在。
2. **因此敏感材料在批准前绝不能进入公共仓库。** "以后再删除"不是
   合格的隐私策略。
3. **撤回请求的响应可能不是即时的。** 我们承诺不晚于收到请求后
   **14 天**完成公开页面下架与索引通告。
4. **互联网无国界。** 即使关闭搜索引擎收录，也无法阻止有人在公网
   浏览器中访问已发布的链接。这就是为什么私密材料一开始就不应进入
   公共仓库。

## 2.3 谁在不承担讲述者权利之外的责任

- 操作员不替讲述者决定哪些内容"对孩子更安全"。
- 操作员不替讲述者决定哪些亲属应该/不应该被提到。
- 操作员不替家属决定某段内容是否需要删除。
- 操作员不替律师决定哪些条款具有法律效力。

以上四类是**律师 + 讲述者本人**的决定，操作员只负责让这些决定被
准确记录和执行。
