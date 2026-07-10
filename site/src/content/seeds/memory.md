---
id: "memory"
slug: "memory"
titleZh: "家庭口述历史"
titleEn: "Family Oral History"
originalDate: "2015-01-03"
originalDocument: "4.Recordingl history.md"
originalIntent: "把每个人家里的故事，变成'一个中国人家庭的近代史' wiki。第一本书的触发是读《乱时候，穷时候》——一个不识字的老人在六十多岁开始识字，七十多岁写下的童年记。"
coreProblem: "采访、转写、对齐时间码、归档和家人共同维护；2015 时的中文语音识别、词级时间码对齐（OHMS 形态）、多人协作 Wiki 都还没就绪。"
status: "pilot-next"
currentInterpretation: "近期旗舰 Pilot，第一阶段只做'一位讲述者、一次访谈、一个故事页面'。长期核心产品。OHMS 提供时间码锚定的理论参考，Omeka S 提供内容数据模型参考。"
currentRole: "近期旗舰 Pilot；长期核心产品。"
completedParts: []
descendantProjects:
  - repo: "conanxin/DocuMuse"
    role: "本地 PDF 阅读 + AI 解析，含 interview 文档类型识别（间接抓手）"
    linkTo: "https://github.com/conanxin/DocuMuse"
  - repo: "conanxin/hermes-knowledge-base"
    role: "已支持 'interview' 内容类型，可作为访谈转写的归档底座"
    linkTo: "https://github.com/conanxin/hermes-knowledge-base"
  - repo: "conanxin/ai-radio-mvp"
    role: "广播复兴侧的音频/播客管线，部分可在家庭口述历史中复用"
unresolvedQuestions:
  - "v0.2 选谁的讲述者、谈哪段故事，必须由用户本人决定，不是 Agent 决定的"
  - "OHMS 形态的时间码对齐在中文口语场景下的可读性"
  - "家庭采访录音的发布同意流程（consent / release）"
  - "Wiki 状态：真正的多人 Wiki 不是 v0.2 的目标，本阶段仍是单人家族档案"
nextExperiment: "v0.2 家庭口述历史单样本 Pilot：在 DocuMuse 中打开一份基于公开 PDF（如《乱时候，穷时候》扫描/OCR 后的版本）的副本，验证（1）interview 类型识别（2）段落级 source 锚定（3）导出 Markdown / JSON。本步骤只用公开材料，不引入真实家庭成员。"
lastReviewed: "2026-07-11"
---

2015 的原文明确说'自己做的并非完全是口述历史'。它刻意绕开了学术口径。下一阶段如果要给这个方向取个名，更合适是'家在'或'家庭记忆'，而不是'口述历史 Wiki'。

P4 是当前四个种子中唯一没有旗舰后继的一个。OHMS 的网站说：'OHMS provides users word-level search capability and a time-correlated transcript or indexed interview connecting the textual search term to the corresponding moment in the recorded interview online.' —— 这正是 2015 想做而做不成的那一层。Omeka S 给出'一个家庭 = 一个 Item Set'的内容模型。
