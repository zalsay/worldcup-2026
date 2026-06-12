export const reportMeta = {
  generatedAt: "2026-06-12 01:27 UTC",
  dateLabel: "2026-06-12",
  timezone: "北京时间",
  group: "A / B / D 组"
};

export const standings = [
  { group: "A 组", team: "墨西哥", points: 3, goalDiff: 2, note: "2-0 赢下揭幕战，预测命中胜负方向。" },
  { group: "A 组", team: "韩国", points: 0, goalDiff: 0, note: "首战即将对阵捷克，转换速度是关键。" },
  { group: "A 组", team: "捷克", points: 0, goalDiff: 0, note: "首战即将对阵韩国，定位球和高球是主要武器。" },
  { group: "A 组", team: "南非", points: 0, goalDiff: -2, note: "揭幕战失利且吃到红牌，后续容错降低。" },
  { group: "B 组", team: "加拿大", points: 0, goalDiff: 0, note: "主场首战，Davies 缺阵会影响左路推进。" },
  { group: "B 组", team: "波黑", points: 0, goalDiff: 0, note: "客场低位反击和定位球会决定拿分机会。" },
  { group: "D 组", team: "美国", points: 0, goalDiff: 0, note: "主场首战，全员可选但压力较大。" },
  { group: "D 组", team: "巴拉圭", points: 0, goalDiff: 0, note: "身体对抗和反击会给美国制造麻烦。" }
];

export const matches = [
  {
    id: "mexico-south-africa",
    href: "matches/mexico-south-africa.html",
    title: "墨西哥 vs 南非",
    group: "A 组",
    date: "2026-06-12",
    time: "03:00",
    venue: "Mexico City Stadium",
    actual: {
      status: "已结束",
      score: "墨西哥 2-0 南非",
      updatedAt: "2026-06-12 01:27 UTC"
    },
    prediction: {
      tendency: "墨西哥小胜",
      scoreLean: "2-0 / 2-1",
      recordedAt: "2026-06-11 10:58 UTC"
    },
    headline: "东道主揭幕战，节奏管理比控球率更重要。",
    teams: [
      {
        name: "墨西哥",
        label: "主场优势",
        summary: "主场环境、控场能力和大赛经验更成熟。中前场个人能力更强，适合通过边路压迫打开局面。",
        strengths: ["主场声量", "控场经验", "边路推进", "中锋资源"],
        risks: ["揭幕战心理压力", "久攻不下后的急躁", "防反身后空间"]
      },
      {
        name: "南非",
        label: "反击机会",
        summary: "身体对抗、快速反击和定位球会制造风险。若前段时间不失球，比赛压力会转向东道主。",
        strengths: ["身体对抗", "转换速度", "定位球冲击"],
        risks: ["客场环境", "阵地战创造力", "适应节奏"]
      }
    ],
    coachView: "墨西哥需要避免揭幕战急躁。若能先入球，比赛可能进入 2-0 或 2-1；若久攻不下，平局概率会明显上升。",
    keyPlayers: [
      { name: "Raul Jimenez", team: "墨西哥", role: "中锋", note: "禁区支点和终结点。" },
      { name: "Santiago Gimenez", team: "墨西哥", role: "前锋", note: "提供纵深和轮换火力。" },
      { name: "Edson Alvarez", team: "墨西哥", role: "中场", note: "中路保护和攻守平衡核心。" }
    ]
  },
  {
    id: "south-korea-czechia",
    href: "matches/south-korea-czechia.html",
    title: "韩国 vs 捷克",
    group: "A 组",
    date: "2026-06-12",
    time: "10:00",
    venue: "Guadalajara Stadium",
    actual: {
      status: "即将开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "平局或韩国小胜",
      scoreLean: "1-1 / 2-1",
      recordedAt: "2026-06-11 10:58 UTC"
    },
    headline: "速度与空间对抗高球和定位球。",
    teams: [
      {
        name: "韩国",
        label: "速度优势",
        summary: "Son Heung-min、Kim Min-jae、Hwang Hee-chan 带来速度、转换和欧洲比赛经验。",
        strengths: ["前场速度", "反击质量", "中卫个人能力", "大赛经验"],
        risks: ["防线横移", "中场控制", "定位球防守"]
      },
      {
        name: "捷克",
        label: "身体优势",
        summary: "Soucek、Schick 代表了捷克最直接的威胁：高球、二点球、定位球和禁区终结。",
        strengths: ["空中球", "二点球", "定位球", "禁区终结"],
        risks: ["回追速度", "边路身后", "面对快速转换的防守距离"]
      }
    ],
    coachView: "这场更接近五五开。韩国要把比赛拉到速度和空间里，捷克则会努力把比赛变成高对抗与定位球节奏。",
    keyPlayers: [
      { name: "Son Heung-min", team: "韩国", role: "前锋", note: "转换进攻中的第一威胁。" },
      { name: "Kim Min-jae", team: "韩国", role: "中卫", note: "限制高球和禁区冲击的关键。" },
      { name: "Tomas Soucek", team: "捷克", role: "中场", note: "二点球和后插上威胁。" },
      { name: "Patrik Schick", team: "捷克", role: "前锋", note: "捷克禁区终结核心。" }
    ]
  },
  {
    id: "canada-bosnia-herzegovina",
    href: "matches/canada-bosnia-herzegovina.html",
    title: "加拿大 vs 波黑",
    group: "B 组",
    date: "2026-06-12",
    time: "次日 03:00",
    venue: "Toronto Stadium",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "平局或加拿大小胜",
      scoreLean: "1-1 / 2-1",
      recordedAt: "2026-06-12 01:27 UTC"
    },
    headline: "加拿大主场优势明显，但 Davies 缺阵会压低边路上限。",
    teams: [
      {
        name: "加拿大",
        label: "主场冲击",
        summary: "加拿大坐镇多伦多，Jonathan David 的终结和中前场冲刺是主要优势；但 Alphonso Davies 缺阵会削弱左路推进和回追。",
        strengths: ["主场环境", "前场速度", "Jonathan David 终结", "转换冲击"],
        risks: ["Davies 缺阵", "大赛首分压力", "定位球防守"]
      },
      {
        name: "波黑",
        label: "稳守反击",
        summary: "波黑会更重视防守结构，利用身体对抗、二点球和定位球寻找机会。比赛若进入低节奏，加拿大会更难打穿。",
        strengths: ["身体对抗", "低位防守", "定位球", "比赛经验"],
        risks: ["客场环境", "边路回追", "被持续压迫后的出球质量"]
      }
    ],
    coachView: "加拿大不能只靠情绪和主场压迫，需要保护好丢球后的第一反抢。波黑若把比赛拖成低比分，平局概率会很高。",
    keyPlayers: [
      { name: "Jonathan David", team: "加拿大", role: "前锋", note: "加拿大最稳定的终结点。" },
      { name: "Stephen Eustaquio", team: "加拿大", role: "中场", note: "决定加拿大能否稳定控住二点球。" },
      { name: "Edin Dzeko", team: "波黑", role: "前锋", note: "禁区经验和支点能力仍是波黑重要威胁。" },
      { name: "Ermedin Demirovic", team: "波黑", role: "前锋", note: "反击中的移动和冲刺会考验加拿大中卫。" }
    ]
  },
  {
    id: "usa-paraguay",
    href: "matches/usa-paraguay.html",
    title: "美国 vs 巴拉圭",
    group: "D 组",
    date: "2026-06-12",
    time: "次日 09:00",
    venue: "Los Angeles Stadium",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "美国小胜或平局",
      scoreLean: "2-1 / 1-1",
      recordedAt: "2026-06-12 01:27 UTC"
    },
    headline: "美国阵容深度和主场气势占优，但巴拉圭的对抗会让比赛很硬。",
    teams: [
      {
        name: "美国",
        label: "主场压迫",
        summary: "美国拥有主场、阵容深度和更高的控球主动权。Pulisic、Adams 与中前场冲刺能力会决定能否把压力转化为进球。",
        strengths: ["主场优势", "阵容深度", "边路推进", "高位压迫"],
        risks: ["揭幕压力", "防反身后", "面对高强度对抗的稳定性"]
      },
      {
        name: "巴拉圭",
        label: "强硬反击",
        summary: "巴拉圭不会给美国舒服的控球节奏，身体对抗、拦截后的直塞和边路反击是主要拿分路径。",
        strengths: ["身体对抗", "反击速度", "防守韧性", "定位球"],
        risks: ["客场压力", "控球时间不足", "被美国边路持续压制"]
      }
    ],
    coachView: "美国要避免被主场情绪带快节奏，第一目标是控制攻守转换后的空间。巴拉圭如果先进球，比赛会立刻变得非常难打。",
    keyPlayers: [
      { name: "Christian Pulisic", team: "美国", role: "边锋", note: "美国进攻最直接的单点爆破来源。" },
      { name: "Tyler Adams", team: "美国", role: "中场", note: "保护中路和限制反击的关键。" },
      { name: "Folarin Balogun", team: "美国", role: "前锋", note: "需要把主场压力转化为禁区终结。" },
      { name: "Miguel Almiron", team: "巴拉圭", role: "攻击手", note: "反击推进和前场第一脚处理很关键。" }
    ]
  }
];

export function findMatch(matchId) {
  return matches.find((match) => match.id === matchId);
}
