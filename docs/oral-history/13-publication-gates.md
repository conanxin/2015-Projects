# 13 · 发布门禁

> 出处：[LOC VHP #10] LOC Field Kit; [OHS #7] Legal and Ethical; [Penn State #11] Best Practices; [UCSB DLS #18] Embargo / Controlled Access。
>
> 本文定义六个机械门槛，每个都"不通过 = 停"。配合
> `templates/public-release-checklist.md`、`schemas/publication-decision.schema.json`。

## 13.1 六个 gate（顺序、不可跳跃）

```
Gate 0  planned          项目说明完成；同意选项完成；敏感主题边界确认；AI 处理选项确认。
Gate 1  recorded         原始文件已登记；会话日志完成；未进入公共仓库；限制段落已标记。
Gate 2  working          转录人工复听；时间码验证；人名地点核实；敏感内容标记；无公开发布。
Gate 3  narrator-review  身份字段确认；摘录确认；音频公开范围确认；页面摘要确认；发布方式确认。
Gate 4  public-candidate 仅 Level 2 数据；无联系方式；无未经批准第三方信息；无原始 consent；无完整私密转录；无本地路径；无私有媒体；public schema 验证通过。
Gate 5  published        发布决定有版本；页面已人工浏览；移动端验证；撤回联系方式可用；发布日志完成。
```

## 13.2 Gate 检查表（不可选项）

### Gate 0 — planned

- [ ] `templates/interview-project.schema.json` 状态 = `planned`；
- [ ] 同意书 v01 五大模块已**填写并签字**（即使部分默认"不同意"）；
- [ ] `templates/interview-boundaries.md` 已**至少有一项填写**；
- [ ] AI 处理选项已勾选，默认禁止项未勾选（如勾选，需二次确认）；
- [ ] 联系方式（电邮 / 电话 / 见面地点）已确立。

### Gate 1 — recorded

- [ ] `templates/interview-session-log.md` 已完成；
- [ ] 原始媒体文件已存放在 `oral-history-private/.../raw/`；
- [ ] 工作副本已生成，原始未被修改；
- [ ] `templates/redaction-log.md` 至少有一项（即使是"无"）；
- [ ] 公共 Git 中**没有**原始 / 私密 / Level 0 资料。

### Gate 2 — working

- [ ] `templates/transcript-raw.md` 与 `transcript-edited_v##.md` 分开；
- [ ] 转录员和编辑员**不同人**完成（单人项目注明切换日期）；
- [ ] 所有 `[听不清]` 标记已确认一次；
- [ ] 所有 `[人名待核实]` 已被核实或替换为化名；
- [ ] 所有 `[日期约为 X]` 已经在 `fact-check_v##.md` 中研究；
- [ ] 时间码使用 ffmpeg / ffprobe + 人工抽样 ≥ 3 个章节验证；
- [ ] 短摘录总词数 ≤ 70（不重建完整 transcript）；
- [ ] schema `interview-session.schema.json` 验证通过。

### Gate 3 — narrator-review

- [ ] `templates/narrator-review-form.md` v01 / v02 完成，且每个决定都有
  讲述者**逐项**勾选；
- [ ] 化名与身份的映射在 `oral-history-private/.../identity/real-name-map.md`
  中；
- [ ] 公共页面**不展示**真实姓名、地址、联系方式；
- [ ] 发布形式（公开网页 / 仅家庭 / 仅项目研究 / 化名 / RSS）已选；
- [ ] 第三方独立同意（必要时）已收齐；
- [ ] `templates/publication-approval.md` **明确**只批准当前 v##，不是
  未来所有版本。

### Gate 4 — public-candidate

- [ ] 仅 Level 2 数据进入 `site/src/content/stories/`；
- [ ] 无联系方式、无身份证号、邮箱、电话、家庭精确地址；
- [ ] 无未经批准的第三方信息；
- [ ] 无原始 consent 文件；
- [ ] 无完整私密转录；
- [ ] 无本地路径（`/home/`、`C:\` 等）；
- [ ] 无私有媒体（`oral-history-private/` 内容）；
- [ ] `npm run validate:stories` PASS；
- [ ] `npm run check` PASS（0/0/0）。

### Gate 5 — published

- [ ] `templates/public-release-checklist.md` 完成；
- [ ] 桌面与移动端人工验证（puppeteer 截图存档于 `oral-history-private/`
  而非公共 Git）；
- [ ] 撤回联系方式可用（电邮测试 / 电话测试）；
- [ ] 发布决定版本号写入 `schemas/publication-decision.schema.json`；
- [ ] Pages workflow success；
- [ ] 线上 10 路由 HTTP 200（不引入页面回归）。

## 13.3 任何 Gate 未通过 = 停

| Gate | 失败后行动 |
|---|---|
| Gate 0 | 重新与讲述者对齐；不录制 |
| Gate 1 | 重新访谈或修改会话日志 |
| Gate 2 | 退回转录员 / 编辑员 |
| Gate 3 | 退回讲述者审核 |
| Gate 4 | 退回操作者；不能"后面再修" |
| Gate 5 | 撤回发布；撤销 Pages workflow |

**绝不**"后面再修"或"草稿先发"。

## 13.4 与 schemas 的协同

`schemas/publication-decision.schema.json` 必须包含字段：

- `approvedAt`
- `approvedByNarrator`
- `editorVerified`
- `decisionVersion`

只有四个字段都被填齐且 V0.4+ 验证脚本认为通过时，才视为发布决定
**有效**。

## 13.5 与 14 的关系

- Gate 5 完成 → 14 开始维护工作（持续监控）。
- 14 中出现的修改请求 → 重新走 Gate 3 → 重新走 Gate 5。
