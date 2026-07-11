# 04 · 撤回与修改

> 出处：[OHA #2] Informed Consent; [OHS #8] OHS Informed consent; [OHA #3] Restrictions; [UCSB DLS #18] Embargo / Controlled Access。
>
> 本文配套：`templates/withdrawal-or-change-request.md`、
> `templates/public-release-checklist.md`、`templates/redaction-log.md`。

## 4.1 三类可撤回内容

1. **公开页面**：从 `site/dist/stories/<slug>/index.html` 下架。
2. **音频 / 视频托管链接**：从对外发布页面撤下对应的链接或指针。
3. **搜索引擎可见性**：通过 `noindex`、robots、更新 sitemap 等方式
   让搜索引擎在 30 天内从结果中移除。

## 4.2 撤回请求处理流程

### 步骤 1 · 收到请求

- 接收方式：项目预设通讯方式（电邮 / 短信 / 电话 / 见面；只用
  讲述者本人**在事前约定**的渠道）。
- **绝不**因为身份证件信息而创建档案；如需确认请求人身份，使用
  双方事前约定的"暗语"或通话识别。

### 步骤 2 · 记录时间和请求人

- 写入 `oral-history-private/OH-YYYY-NNN/consent/withdrawal-log.md`。
- 字段：收到时刻、请求人识别标记（口令 / 通讯代号）、请求方式。

### 步骤 3 · 暂停新发布

- 任何与该项目相关的"待发"草稿立即冻结。
- 即将公开的页面推迟到撤回处理完成。

### 步骤 4 · 确认请求范围

操作员与请求人共同确认：

- 需要下架的内容（公开页面 / 音频 / 摘录 / 全部）；
- 需要保留的内容（家庭内部 / 仅项目研究 / 仅化名骨架）；
- 处理完成时间窗口。

### 步骤 5 · 处理可控系统

按以下顺序操作：

1. 在 `site/src/content/stories/` 删除故事 markdown；
2. 在 `site/src/data/stories/` 删除 segments JSON；
3. 重新 `npm run build` 重新生成静态页面；
4. 等 Pages workflow success；
5. 在 sitemap 中移除已撤页面；
6. 在 robots / on-page `noindex` 中加额外 hint；
7. **不在公开 Git 历史中**留下撤回请求原文件。

### 步骤 6 · 保存最小操作日志

最小日志字段：

```
OH-YYYY-NNN
withdrawal_received_at: 2026-XX-XX
narrator_id_check: 暗语核对 PASS / FAIL
scope: 仅下架 / 同时删除 segments / 同时撤销化名映射
action_taken_at: 2026-XX-XX (T+0..T+14)
notes: ...
unresolved_external_copies: web.archive.org 已抓取 / social-media 已转推
```

这个日志**只保存于 `oral-history-private/`**，不进公开仓库。

### 步骤 7 · 回复处理结果

- 通过事前约定渠道回复处理人。
- 内容模板包含：完成时间、被下架的具体路径、保留范围的描述、
  未控制的外部副本（如有）已知列表。

### 步骤 8 · 记录外部副本（不试图删除）

- 我们承认：自己无法控制第三方缓存。
- 已知会被缓存的位置：搜索引擎快照、`web.archive.org`、社交媒体、
  RSS 订阅器、第三方稿件转引。
- 这些副本不在我们的可控撤回范围内，但需要在公开页面（如适用）
  中注明"该段已由讲述者要求下架，原始链接请见 X"。

## 4.3 修改而非撤回

讲述者可能希望修改特定段而非完全下架。此时由 `templates/withdrawal-or-change-request.md`
记录请求，操作员按 `templates/redaction-log.md` 提交一份修改方案。

常见修改类型：

- 替换某段，让其更精确；
- 删除某段几句话；
- 加入讲述者补充；
- 调整化名或地点描述；
- 让某段改为"摘要 + 引号引用"而不是"完整转录"。

修改在公开页面前的步骤至少包括：

- 重新走一次 `13-publication-gates.md` 的 Gate 3（讲述者审核）；
- `templates/narrator-review-form.md` 重新签字确认修改版。

## 4.4 撤回请求模板的隐私规则

- **不要求身份证件号码**；
- **不收集真实地址**；
- **不采集人脸 / 指纹 / 笔迹生物识别**；
- **不使用"快速验证"短信验证码以外的额外验证**；
- 即使为安全起见，也只用事前约定的暗语。

## 4.5 不进入公共 Git 的清单

任何撤回、修改请求、附属讨论、撤回日志——都**不能**进入
`public repository`（即本仓库）。理由见 § 4.6。

## 4.6 为什么"撤回"不是最后一步

撤回不是隐私策略；隐私策略必须从**资料分类**那一层就避免敏感
内容流入公开仓库。这就是 `08-data-classification-and-storage.md`
存在的原因，也是 `15-ai-processing-policy.md`默认禁用声音克隆
和模型训练的原因。

## 4.7 反向追溯在 fixture-only 项目上的适用性

V0.4A 的 `fixtures/synthetic-oh-2026-900/` 在没有真实公开页面的
情况下完成了一次"on-paper approved-public → withdrawn"反向追溯
（见 `withdrawal-request.md` § Request 1 + `gate-traceability-table.md`
第 10 行）。这证明了反向追溯结构本身是**在 markdown / schema 里**
落地的，不依赖于"必须存在过一篇 Astro 页面"才能记录。

对 V0.4A 之后所有真实项目，这意味着：

- **不存在**的真实发布，不需要经过"先撤销 commit → 然后再撤回"
  的两阶段动作；只要把 `publication-decision` 的 `decision` 字段
  从 `approved-public` 改写为 `withdrawn` 并 append 一条
  `gate-traceability-table.md` 行就足够了。
- 真实的已公开页面，回退步骤仍然要按 § 4.2 步骤 5 全量执行；但
  **记录侧**（`withdrawal-request.md` + 表格）即使在 vite
  `site/dist/` 已被推送到 Pages 之前也能正确反映。
