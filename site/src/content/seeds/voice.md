---
id: "voice"
slug: "voice"
titleZh: "广播复兴"
titleEn: "Personal Radio Revival"
originalDate: "2015-01-03"
originalDocument: "1.Podcast-Plan.md"
originalIntent: "读一段文字，听一首音乐，问候一下大家 —— 做成一档像《整点看世界》那样的个人广播台。"
coreProblem: "2015 年的中国，个人化的、有温度的、不依赖专业主持的声音内容稀缺；想做'小而完整的广播台'而不仅是播客。"
status: "evolved"
currentInterpretation: "2026 不再追求每整点一档连续直播，而是每周一次、可被订阅、可带 transcript 与 chapters 的中文 newsletter + 音频版。先把节奏做成'周五一封'。"
currentRole: "编辑与音频传播层；承载《万物小窗》音频、口述历史声音片段与 RSS；不是当前核心应用。"
descendantProjects:
  - repo: "conanxin/wonder-window-cn"
    role: "每周一期中文 newsletter（Vite + React），已发 RSS；是 P1 当前 shell"
    linkTo: "https://github.com/conanxin/wonder-window-cn"
  - repo: "conanxin/ai-radio-mvp"
    role: "Hermes 工作区里的语音 / 广播试验台"
  - repo: "conanxin/medium-archive"
    role: "自身写作归档（Astro），为 P1 提供'一周中的文字版'"
    linkTo: "https://github.com/conanxin/medium-archive"
  - repo: "conanxin/hermes-knowledge-base"
    role: "音频 / 视频转写、文本化与归档（含 bilingual metadata）"
    linkTo: "https://github.com/conanxin/hermes-knowledge-base"
completedParts:
  - "wonder-window-cn 已发 3 期并提供 RSS（基于 Vite + React，全静态）"
  - "Podcasting 2.0 namespace 的核心标签（transcript / chapters / value）已在外部生态稳定"
  - "ai-radio-mvp 中有端到端的语音生成管道"
unresolvedQuestions:
  - "Podcasting 2.0 何时被 Apple Podcasts 全面覆盖到中国市场"
  - "RSS + transcript 的中文长段落拼接排版能否保持可读"
  - "每周一封的节奏是否能在 2015-2016 的失败日更习惯之后真正持续"
nextExperiment: "把 wonder-window-cn 的 RSS 升级为 Podcasting 2.0 namespace（增加 podcast:transcript、podcast:chapters），并打通与 medium-archive 的文字版同步。"
lastReviewed: "2026-07-11"
---

2015 年写下这份计划时，作者正受三件事启发：童年听广播、Hainan TV 的整点看世界节目、以及当时手机上'荔枝FM'这一应用。这意味着 P1 最初并不是'做播客'，而是'做一档能跨越时段的个人广播台'。

2015-2016 两次公开日记实验（2015-Daily-Recording、2016-Daily-Recording）都尝试过每日更新，最终被 2016.1.1 的 README 自陈'计划是美好的，但现实是残酷的'。这条失败轨迹对 2026 计划是直接的警示：节奏必须被降维，从'每天'降到'每周'。
