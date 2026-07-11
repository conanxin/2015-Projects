# 07 · 录制会话流程

> 出处：[OHA #1] Best Practices; [LOC VHP #10] LOC Field Kit; [Nunn Center #12] Nunn Center sample form。
>
> 本文是设备/AI 在录制时的"操作 SOP"。配合
> `05-interview-preparation.md`、`templates/interview-session-log.md`、
> `templates/recording-permission.md`。

## 7.1 录制前

| # | 必做 | 工具 |
|---|---|---|
| 1 | 测试录音设备存储空间 ≥ 8 小时预计时长 | 设备直读 |
| 2 | 测试备用录音设备，并放于讲述者视线之外但能响应 | 备用录音机 |
| 3 | 关闭手机通知、关闭背景音乐、关闭智能助手 | 手表 / Do Not Disturb |
| 4 | 关闭**任何联网 AI 助手**（防止录音被远程保存） | 系统设置 |
| 5 | 重读同意书的"采访本身"模块（A 段） | `templates/consent-record.md` |
| 6 | 重读同意书的"身份和公开形式"模块（C 段） | 同上 |
| 7 | 把本次会话要写进 `templates/interview-session-log.md` 的字段先写到纸上 | 纸 / Markdown |

## 7.2 录制中

| # | 必做 |
|---|---|
| 8 | 启动录音后**口头**念出：日期、时间、地点、采访编号、双方姓名（可化名） |
| 9 | 在 `templates/interview-session-log.md` 中**写入**上述元数据 |
| 10 | 确认录音音量峰值在 -12 dB 至 -6 dB，避免削波 |
| 11 | 不打断；不催促；不插嘴 |
| 12 | 不强迫精确回忆；对不确定时间打标"日期约为 X" |
| 13 | 对第三方敏感信息**当场**用 `templates/interview-session-log.md` 标记 `[经讲述者要求删除]` |
| 14 | 记录需要会后核实的内容（如 `OH-YYYY-NNN-S01` 会后核实清单） |
| 15 | 录音意外中断：立即**恢复**而非停止；事后在 log 中注明 |

## 7.3 录制结束

| # | 必做 |
|---|---|
| 16 | 立刻询问"我们今天的会话里，有没有哪一段您不希望公开？" |
| 17 | 把答案录入 `templates/interview-session-log.md` |
| 18 | 关闭设备的同时 **立即** 把录音文件复制到本地（断网） |
| 19 | **不修改原始媒体文件**；写一份 `OH-YYYY-NNN-S01_session-log_<日期>.md` 并归档 |
| 20 | 当场复述下次访谈时间和方式 |
| 21 | 双方签字确认本次 session 结束（纸 / Markdown） |

## 7.4 录制之后 30 分钟：归档与衍生

| # | 必做 |
|---|---|
| 22 | 把 session-log 写完，并归档至 `oral-history-private/OH-YYYY-NNN/identity/` |
| 23 | 制作工作副本 `OH-YYYY-NNN-S01_working-copy.wav`；**不动原始** |
| 24 | 工作副本保存到 `oral-history-private/OH-YYYY-NNN/raw/` |
| 25 | **不**上传原始录音到任何云端，除非同意书 B 段已明确同意 |
| 26 | **不**通过公开链接分享录音 |

## 7.5 一些"绝不"

- **绝不**为了"资料完整性"补录假话语；
- **绝不**在录音中夹带 AI 改写的脚本；
- **绝不**让 AI 代替讲述者说出"突然想起的另一件事"；
- **绝不**在讲述者明确说"我不想讲"后继续追问；
- **绝不**为追求"完整故事"去诱导敏感细节；
- **绝不**在录制过程中打开社交媒体；
- **绝不**把录音文件以邮件附件形式发给不相关方。

## 7.6 与 06 的协同

- 本文是 **07**（动作）；**06**（问题指南）是叙述轨迹。
- 录制中不背问题清单；清单是脑后的。
- 提问与记录**只记关键标签**；过多笔记打断叙述。
- 操作员的注意力优先级：**设备 > 讲述者 > 笔记**。

## 7.7 与 templates 的协同

- `templates/interview-session-log.md`：本次会话的主元数据。
- `templates/recording-permission.md`：本次会话的 A 段勾选确认。
- `templates/ai-processing-options.md`：本次会话的 B 段勾选确认。
- `templates/interview-boundaries.md`：本次会话的 C/E 段勾选确认。
- `templates/redaction-log.md`：本次会话的"待脱敏"清单。
