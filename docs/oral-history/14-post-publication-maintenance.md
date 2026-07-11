# 14 · 发布后维护

> 出处：[UCSB DLS #18] Embargo / Controlled Access; [Heritage #20] Good Practice; [OHA #3] Restrictions。
>
> 本文是发布后**持续**的过程，而不是一次性任务。配合
> `04-withdrawal-and-change-requests.md`、`15-ai-processing-policy.md`。

## 14.1 维护期的定义

- "发布后"自 Gate 5 完成那一刻起算。
- 持续到：故事页面被讲述者**正式撤回**且验证脚本确认无外部副本能
  控制的位置（合理的"无法完全控制")的列表已生成。

## 14.2 维护期 8 件必做

1. **每 90 天一次**：与讲述者通话或通信，确认页面无变化。
2. **每 90 天一次**：检查 `scripts/validate-oral-history-governance.mjs`
   的输出是否符合预期；如果发现泄漏，**立即**处理。
3. **每 180 天一次**：审查 `package-lock.json` / npm 依赖是否有异
   常变化；防止依赖链注入。
4. **每 180 天一次**：检查 Pages workflow 的运行是否正常；如有失败，
   重新审计变更。
5. **每次** GitHub 联系 / Issue 评论（即使无关）：在 7 天内确认是否
   涉及隐私信息（**应不**有，但人无法保证 100%）。
6. **每次**第三方服务（GitHub Pages, Cloudflare, RSS 阅读器）改变：
   立即重审页面安全。
7. **任何**撤回请求：按 `04-withdrawal-and-change-requests.md` 处理。
8. **任何**家庭成员过世 / 关系变化：尊重原同意书，更新公开页面，
   但**不**删除原始同意书。

## 14.3 不在维护期做的事

- 不修改原始录音或原始转录；
- 不删除历史 commit（即使包含错误，因为 `git revert` 不能从 pull mirror
  中抹除）；
- 不添加新章节而不经过 Gate 3 与 Gate 4。

## 14.4 与 13-publication-gates 的关系

- 任何修改 → 重新走 Gate 3、Gate 4、Gate 5。
- 修改项更小（如修订一处错别字）时，可以走"小修改"路径：
  修改 → 操作者重新上传内容 → 操作者 + 讲述者双方同意 → **不**重新走
  Gate 5（因为没有新发布决策）。但必须有 `publication-approval_v##` 的
  增量。

## 14.5 紧急下架（Unexpected Leak）

如果意外发现：

- 家庭住址出现在公开页面的截图；
- 第三方未授权姓名出现在公开页面；
- 真实电话 / 邮箱被自动 crawler 抓取；

那么：

1. **立即**联系 Pages 维护方暂停部署；
2. 在 24 小时内**删除** public story 文件；
3. 重新走 Gate 3 / Gate 4 / Gate 5；
4. 在 `oral-history-private/.../decisions/incident-log.md` 中**记录**事件；
5. **不**试图隐藏；公开承认问题（如果讲述者允许）。

## 14.6 维护期的"完成"信号

下列条件**全部**满足时，本项目可视为"已退役"：

- 讲述者**书面**表示该故事结束；
- 所有页面已被告知的审阅窗口结束；
- 公开页面**不**再是新读者期待的内容；
- 维护成本（验证脚本、Pages workflow、第三方 API 检查）已不再合理。

退役不是删除——把所有 Story markdown 文件标记为 `archived` 在
`schemas/interview-project.schema.json` 中，但**不**删除任何公开
内容（除了讲述者**明确**要求删除的部分）。
