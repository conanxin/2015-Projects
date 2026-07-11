<!--
模板用途：公开发布前机械清单
私密程度：Level 1
数据层：oral-history-working/.../publication-draft/
提醒：本文件不进公共 Git，但用于产生公开版本
-->

# 公开发布清单 v## · OH-[YYYY]-NNN

> **状态**：项目内操作模板。**正式签字前**请咨询律师。
> 这是 `13-publication-gates.md` 的 Gate 4 + Gate 5 的**机械填空**。
> 任意一项不通过 → 不发布。

| 字段 | 值 |
|---|---|
| 决定日期 | `[YYYY-MM-DD]` |
| 项目编号 | `OH-[YYYY]-NNN` |
| 决定版本 | `v##` |
| 操作员 | `[姓名]` |

---

## A. 内容层（Gate 4）

### A.1 必要文件就绪

- [ ] `site/src/content/stories/<slug>.md` 已生成；
- [ ] `site/src/data/stories/<slug>.segments.json` 已生成；
- [ ] `site/scripts/validate-story-data.mjs` PASS；
- [ ] `site/scripts/` 中无 0 errors / 0 warnings。

### A.2 内容层面净化

- [ ] **没有**身份证件号码；
- [ ] **没有**手机号、邮箱、QQ、WeChat、地址（精确到门牌）；
- [ ] **没有**真实姓名（除非已批）；
- [ ] **没有**未成年儿童的真实姓名 / 学校；
- [ ] **没有**尚未公开的死讯 / 收养；
- [ ] **没有**犯罪细节；
- [ ] **没有**未脱敏的第三方姓名 / 第三方负面评价；
- [ ] **没有**"删除姓名但留下其它可识别组合"（按 `11` 章复审）；
- [ ] **没有**超过同意书范围的内容；
- [ ] **没有** AI 自动生成并冒充原话的内容；
- [ ] **没有** `[经讲述者要求删除]` 标记；
- [ ] **没有**完整原始转录；
- [ ] **没有** 任何 `/home/`、`C:\`、`localhost` 等本地路径；
- [ ] **没有** 私有媒体文件（`.mp3` / `.wav` / `.mp4` 引用都不进 public）；
- [ ] **没有** 任何 `bearer`、`api[_-]?key=` 等 token-like pattern；
- [ ] **没有** 任何 `npm run check` 的告警。

### A.3 引用层

- [ ] 来源 URL 是 https；
- [ ] 媒体 URL（如果有）指向官方档案域名；
- [ ] 公开页面**明确**说明"本仓库不拥有 / 托管该录音 / 视频 / 文档"；
- [ ] 公开页面有可点击的官方源链接；
- [ ] 公开页面明确指出"这是节录，完整内容请见官方源"。

## B. 部署层（Gate 5）

- [ ] Pages workflow 已成功 build；
- [ ] Pages workflow 已成功 deploy；
- [ ] 桌面视图（1440×900） puppeteer 截图存档于
      `oral-history-private/.../decisions/`；
- [ ] 移动视图（390×844） puppeteer 截图存档于同一目录；
- [ ] 桌面 mobile 双向都不出现横向溢出；
- [ ] audio 控件不溢出；
- [ ] 章节按钮点击 → currentTime 误差 ≤ 0.75s；
- [ ] 中文搜索"番茄"类关键词可命中；
- [ ] 英文搜索（如 peddlers / tomato）可命中；
- [ ] 不存在词 → 0 results + empty 提示；
- [ ] 清空按钮恢复；
- [ ] Esc 清空；
- [ ] active chapter 有 `aria-current="true"`；
- [ ] 0 console errors；
- [ ] 0 page errors；
- [ ] 0 true request failures（`.mp3` 的 206 / ABORTED 视为正常）。

## C. 检索索引层

- [ ] 页面已被收录（提交 sitemap）；
- [ ] `noindex` / 索引选择与同意书 C 段一致；
- [ ] 如果同意书 C 段不索引，sitemap 中不包含该 slug。

## D. 维护层

- [ ] 撤回联系方式仍可联系（电邮测试 / 电话测试）；
- [ ] 14 天响应承诺在文档中已书面发布；
- [ ] `templates/publication-approval.md` v## 已签字；
- [ ] `templates/narrator-review-form.md` v## 已逐项勾选；
- [ ] `templates/consent-record.md` v## 已签字；
- [ ] `templates/interview-session-log.md` 已完整归档；
- [ ] Pages workflow run ID 已记录。

## E. 发布日志

```
发布版本: v## 
推送 commit: [commit hash]
Pages workflow run: [run id]
结论: success
线上故事 URL: https://conanxin.github.io/2015-Projects/stories/<slug>/
首页 pilot banner URL: https://conanxin.github.io/2015-Projects/#pilot
公开日期: [YYYY-MM-DD]
操作员签字: ____
```

## F. 任何一项 ✗ 都不通过

- [ ] 全部通过 → 可以合并 → 可以部署；
- [ ] 任意一项 ✗ → 退回 Gate 0 / Gate 2 / Gate 3 / Gate 4；
- [ ] 不得"后面再修"。

---

— v## — 项目内操作模板 — 真实填写时操作员签字 + 讲述者复核。
