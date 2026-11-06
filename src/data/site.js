/** 官网文案与演示数据（示例活用均与 BNMB 站内活用引擎输出一致） */

export const LINKS = {
  web: "https://kenaut.github.io/BNMB/",
  androidApk: "https://github.com/kenaut/BNMB-android/releases/download/2/BNMB_android-v0.2.apk",
  githubWeb: "https://github.com/kenaut/BNMB",
  githubAndroid: "https://github.com/kenaut/BNMB-android",
  githubSite: "https://github.com/kenaut/BNMB-web",
};

export const FORM_LABELS = [
  "辞书形",
  "ます形",
  "ない形",
  "て形",
  "た形",
  "可能形",
  "意向形",
  "命令形",
  "条件形",
  "受身形",
  "使役形",
  "使役受身形",
];

export const TYPE_LABELS = {
  godan: "五段",
  ichidan: "一段",
  suru: "サ变",
  kuru: "カ变",
};

/** 四个演示动词及其 12 种活用（汉字 / 读音） */
export const DEMO_VERBS = [
  {
    id: "kaku",
    kanji: "書く",
    kana: "かく",
    meaning: "写",
    type: "godan",
    forms: [
      ["書く", "かく"],
      ["書きます", "かきます"],
      ["書かない", "かかない"],
      ["書いて", "かいて"],
      ["書いた", "かいた"],
      ["書ける", "かける"],
      ["書こう", "かこう"],
      ["書け", "かけ"],
      ["書けば", "かけば"],
      ["書かれる", "かかれる"],
      ["書かせる", "かかせる"],
      ["書かせられる", "かかせられる"],
    ],
  },
  {
    id: "taberu",
    kanji: "食べる",
    kana: "たべる",
    meaning: "吃",
    type: "ichidan",
    forms: [
      ["食べる", "たべる"],
      ["食べます", "たべます"],
      ["食べない", "たべない"],
      ["食べて", "たべて"],
      ["食べた", "たべた"],
      ["食べられる", "たべられる"],
      ["食べよう", "たべよう"],
      ["食べろ", "たべろ"],
      ["食べれば", "たべれば"],
      ["食べられる", "たべられる"],
      ["食べさせる", "たべさせる"],
      ["食べさせられる", "たべさせられる"],
    ],
  },
  {
    id: "suru",
    kanji: "する",
    kana: "する",
    meaning: "做",
    type: "suru",
    forms: [
      ["する", "する"],
      ["します", "します"],
      ["しない", "しない"],
      ["して", "して"],
      ["した", "した"],
      ["できる", "できる"],
      ["しよう", "しよう"],
      ["しろ", "しろ"],
      ["すれば", "すれば"],
      ["される", "される"],
      ["させる", "させる"],
      ["させられる", "させられる"],
    ],
  },
  {
    id: "kuru",
    kanji: "来る",
    kana: "くる",
    meaning: "来",
    type: "kuru",
    forms: [
      ["来る", "くる"],
      ["来ます", "きます"],
      ["来ない", "こない"],
      ["来て", "きて"],
      ["来た", "きた"],
      ["来られる", "こられる"],
      ["来よう", "こよう"],
      ["来い", "こい"],
      ["来れば", "くれば"],
      ["来られる", "こられる"],
      ["来させる", "こさせる"],
      ["来させられる", "こさせられる"],
    ],
  },
];

export const FEATURES = [
  {
    icon: "layers",
    title: "十二种活用形",
    desc: "从辞书形到使役受身形，完整覆盖日语学习中的常用变形体系，反复练到形成语感。",
  },
  {
    icon: "swap",
    title: "正向 + 逆向出题",
    desc: "给出辞书形写目标活用形，也能从活用形还原辞书形，双向检验是否真的理解规则。",
  },
  {
    icon: "keyboard",
    title: "填空与四选一",
    desc: "填空支持汉字或假名作答，兼容日语输入法；选择题的干扰项优先取同一动词的其他形态。",
  },
  {
    icon: "unlock",
    title: "形态分批解锁",
    desc: "先练 ます・ない・て・た 四个基础形，掌握后再依次开放进阶与高阶形态，学习曲线更平滑。",
  },
  {
    icon: "book",
    title: "597 词 · 自动振假名",
    desc: "词库覆盖 JLPT N5–N1，五段、一段、サ变、カ变及行く／ある等不规则变化均可练习。",
  },
  {
    icon: "timer",
    title: "每回合 10 题",
    desc: "动词与形态随机组合不重复，HUD 实时显示题数、用时与正确数，一局刚好利用碎片时间。",
  },
  {
    icon: "chart",
    title: "弱项一目了然",
    desc: "分形态正确率、弱项动词 Top 5、最近成绩与火花连胜，帮你找到真正需要复习的地方。",
  },
  {
    icon: "shield",
    title: "数据只在本地",
    desc: "无需账号与后端，进度存于浏览器 localStorage，支持 JSON 导出／导入，存档异常会自动降级。",
  },
];

export const WORDS = [
  { kanji: "書く", kana: "かく", meaning: "写", type: "godan", level: "N5" },
  { kanji: "食べる", kana: "たべる", meaning: "吃", type: "ichidan", level: "N5" },
  { kanji: "する", kana: "する", meaning: "做", type: "suru", level: "N5" },
  { kanji: "来る", kana: "くる", meaning: "来", type: "kuru", level: "N5" },
  { kanji: "泳ぐ", kana: "およぐ", meaning: "游泳", type: "godan", level: "N5" },
  { kanji: "読む", kana: "よむ", meaning: "读", type: "godan", level: "N5" },
  { kanji: "壊す", kana: "こわす", meaning: "弄坏", type: "godan", level: "N4" },
  { kanji: "甘える", kana: "あまえる", meaning: "撒娇", type: "ichidan", level: "N3" },
  { kanji: "歩む", kana: "あゆむ", meaning: "行走", type: "godan", level: "N2" },
  { kanji: "朽ちる", kana: "くちる", meaning: "腐朽", type: "ichidan", level: "N1" },
];

export const UNLOCK_BATCHES = [
  {
    stage: "第一阶段 · 基础",
    forms: ["ます形", "ない形", "て形", "た形"],
    condition: "初始开放，无需解锁",
    tone: "open",
  },
  {
    stage: "第二阶段 · 进阶",
    forms: ["可能形", "意向形", "命令形", "条件形"],
    condition: "第一阶段全部形态掌握后解锁",
    tone: "locked",
  },
  {
    stage: "第三阶段 · 高阶",
    forms: ["受身形", "使役形", "使役受身形"],
    condition: "第二阶段全部形态掌握后解锁",
    tone: "locked",
  },
];

export const FAQS = [
  {
    q: "需要注册账号或联网吗？",
    a: "不需要。网页版打开即可练习，Android 版把全部资源打包进安装包，完全离线运行，甚至没有申请联网权限。所有学习进度只保存在设备本地，不会上传到任何服务器。",
  },
  {
    q: "学习数据存在哪里？换设备怎么办？",
    a: "进度保存在浏览器的 localStorage 中（键名 bnmb-progress），包含回合成绩、分形态统计与连续学习天数。网页版可以导出 JSON 备份并导入到另一台设备；Android 版支持通过系统文件选择器导入，但导出受 WebView 限制，建议先在网页版完成备份。存档损坏或版本不兼容时会自动降级为默认数据，不会白屏。",
  },
  {
    q: "为什么要分批解锁活用形？",
    a: "单个形态累计答对 5 次即视为掌握。当前批次的形态全部掌握后，下一批才会自动解锁。这样能避免一开始就被受身、使役等复杂变形淹没，适合循序渐进地建立语感。",
  },
  {
    q: "Android 版覆盖安装会丢失进度吗？",
    a: "不会。所有版本使用相同的 applicationId（com.kenaut.bnmb）与签名证书，新版 APK 会递增 versionCode，可以直接覆盖安装，本地学习进度保留。",
  },
  {
    q: "词库可以自己扩充吗？",
    a: "可以。动词统一放在 src/data/verbs.json，一行一个动词，按 id、kanji、kana、meaning、type、level 填写。新增后运行 npm test，数据完整性测试会自动校验 id 唯一、类型与词尾自洽，以及 12 种形态能否正确活用。",
  },
  {
    q: "和普通的背单词应用有什么不同？",
    a: "BNMB 不负责背词义，而是专注「动词变形」这一件容易卡壳的事：12 种形态、双向出题、同动词干扰项、分形态正确率统计。配合内置的三分类教程与活用速查表，练的是规则，而不是答案。",
  },
];
