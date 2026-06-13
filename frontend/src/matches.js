export const reportMeta = {
  generatedAt: "2026-06-13 03:21 UTC",
  dateLabel: "2026-06-13",
  timezone: "北京时间",
  group: "A / B / C / D 组"
};

export const standings = [
  { group: "A 组", team: "墨西哥", points: 3, goalDiff: 2, note: "2-0 赢下揭幕战，预测命中胜负方向。" },
  { group: "A 组", team: "韩国", points: 3, goalDiff: 1, note: "2-1 逆转捷克，速度优势和替补冲击打出效果。" },
  { group: "A 组", team: "捷克", points: 0, goalDiff: -1, note: "首战先进后失守，定位球威胁仍有价值。" },
  { group: "A 组", team: "南非", points: 0, goalDiff: -2, note: "揭幕战失利且吃到红牌，后续容错降低。" },
  { group: "B 组", team: "加拿大", points: 1, goalDiff: 0, note: "1-1 战平波黑，Larin 替补进球拿到队史世界杯首分。" },
  { group: "B 组", team: "波黑", points: 1, goalDiff: 0, note: "客场先入球后被追平，低位防守拿到一分。" },
  { group: "B 组", team: "瑞士", points: 0, goalDiff: 0, note: "今日对阵卡塔尔，整体经验和中场控制占优。" },
  { group: "B 组", team: "卡塔尔", points: 0, goalDiff: 0, note: "今日对阵瑞士，需要靠纪律性和转换守住前段。" },
  { group: "C 组", team: "巴西", points: 0, goalDiff: 0, note: "今日对阵摩洛哥，个人能力占优但不能轻视反击。" },
  { group: "C 组", team: "摩洛哥", points: 0, goalDiff: 0, note: "今日对阵巴西，边路速度和防守韧性是拿分基础。" },
  { group: "C 组", team: "苏格兰", points: 0, goalDiff: 0, note: "今日对阵海地，身体对抗和定位球优势明显。" },
  { group: "C 组", team: "海地", points: 0, goalDiff: 0, note: "今日对阵苏格兰，反击效率决定能否制造冷门。" },
  { group: "D 组", team: "美国", points: 3, goalDiff: 3, note: "4-1 大胜巴拉圭，Balogun 梅开二度。" },
  { group: "D 组", team: "澳大利亚", points: 0, goalDiff: 0, note: "今日对阵土耳其，高空球和定位球是主要抓手。" },
  { group: "D 组", team: "土耳其", points: 0, goalDiff: 0, note: "今日对阵澳大利亚，中前场创造力占优。" },
  { group: "D 组", team: "巴拉圭", points: 0, goalDiff: -3, note: "1-4 不敌美国，防线被持续冲击。" }
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
      status: "已结束",
      score: "韩国 2-1 捷克",
      updatedAt: "2026-06-13 03:21 UTC"
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
      status: "已结束",
      score: "加拿大 1-1 波黑",
      updatedAt: "2026-06-13 03:21 UTC"
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
      status: "已结束",
      score: "美国 4-1 巴拉圭",
      updatedAt: "2026-06-13 03:21 UTC"
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
  },
  {
    id: "qatar-switzerland",
    href: "matches/qatar-switzerland.html",
    title: "卡塔尔 vs 瑞士",
    group: "B 组",
    date: "2026-06-13",
    time: "次日 03:00",
    venue: "Levi's Stadium",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "瑞士小胜",
      scoreLean: "0-1 / 1-2",
      recordedAt: "2026-06-13 03:21 UTC"
    },
    headline: "瑞士整体成熟度更高，卡塔尔要把比赛拖进低比分。",
    teams: [
      {
        name: "卡塔尔",
        label: "纪律防守",
        summary: "卡塔尔需要压缩中路空间，用 Akram Afif 的推进和 Almoez Ali 的禁区嗅觉寻找反击机会。",
        strengths: ["防守纪律", "前场连线", "反击第一脚"],
        risks: ["高压下出球", "边路回追", "身体对抗"]
      },
      {
        name: "瑞士",
        label: "稳定控场",
        summary: "瑞士的中场经验、后防稳定性和定位球质量更好，适合用耐心控球逐步压低卡塔尔防线。",
        strengths: ["中场控制", "防线经验", "定位球"],
        risks: ["进攻效率", "阵地战节奏偏慢", "被反击打身后"]
      }
    ],
    coachView: "瑞士只要不急于扩大节奏，胜面更大。卡塔尔若能守住前 30 分钟，比赛会向 0-0 或 1-1 的方向靠近。",
    keyPlayers: [
      { name: "Akram Afif", team: "卡塔尔", role: "攻击手", note: "反击推进和最后一传核心。" },
      { name: "Almoez Ali", team: "卡塔尔", role: "前锋", note: "需要把有限机会转化为射门。" },
      { name: "Granit Xhaka", team: "瑞士", role: "中场", note: "控制节奏和转移方向的核心。" },
      { name: "Manuel Akanji", team: "瑞士", role: "中卫", note: "防线推进和限制反击的关键。" }
    ]
  },
  {
    id: "brazil-morocco",
    href: "matches/brazil-morocco.html",
    title: "巴西 vs 摩洛哥",
    group: "C 组",
    date: "2026-06-13",
    time: "次日 06:00",
    venue: "MetLife Stadium",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "巴西小胜",
      scoreLean: "2-1 / 1-0",
      recordedAt: "2026-06-13 03:21 UTC"
    },
    headline: "巴西个人能力占优，但摩洛哥的边路和防守结构足够制造麻烦。",
    teams: [
      {
        name: "巴西",
        label: "强点爆破",
        summary: "巴西的边路单点和前场自由度更高，只要能把摩洛哥防线拉开，就能持续制造禁区压力。",
        strengths: ["边路一对一", "禁区终结", "阵容深度", "反抢质量"],
        risks: ["转换防守", "过度依赖个人", "开局慢热"]
      },
      {
        name: "摩洛哥",
        label: "韧性反击",
        summary: "摩洛哥防守组织成熟，边路推进和快速反击质量高。若能先守住中路，会让巴西踢得很别扭。",
        strengths: ["防守韧性", "边路速度", "反击推进", "大赛心态"],
        risks: ["控球时间不足", "被连续压制", "禁区二点球"]
      }
    ],
    coachView: "这场不是简单的强弱局。巴西优势明显，但摩洛哥有能力把比赛压成低比分，关键在巴西能否早早打破第一层防守。",
    keyPlayers: [
      { name: "Vinicius Junior", team: "巴西", role: "边锋", note: "左路爆破会决定巴西进攻上限。" },
      { name: "Rodrygo", team: "巴西", role: "前锋", note: "中路游动和第二点射门很关键。" },
      { name: "Achraf Hakimi", team: "摩洛哥", role: "边卫", note: "攻守转换中最重要的推进点。" },
      { name: "Hakim Ziyech", team: "摩洛哥", role: "攻击手", note: "定位球和斜传能改变比赛方向。" }
    ]
  },
  {
    id: "haiti-scotland",
    href: "matches/haiti-scotland.html",
    title: "海地 vs 苏格兰",
    group: "C 组",
    date: "2026-06-13",
    time: "次日 09:00",
    venue: "Gillette Stadium",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "苏格兰小胜",
      scoreLean: "0-1 / 1-2",
      recordedAt: "2026-06-13 03:21 UTC"
    },
    headline: "苏格兰的身体强度和定位球更稳定，海地要靠速度寻找空间。",
    teams: [
      {
        name: "海地",
        label: "速度反击",
        summary: "海地会更依赖前场速度和纵向冲刺。若能抢到第一球，比赛会变得非常开放。",
        strengths: ["反击速度", "前场冲刺", "身体弹性"],
        risks: ["阵地防守", "定位球保护", "比赛经验"]
      },
      {
        name: "苏格兰",
        label: "强度压制",
        summary: "苏格兰中后场对抗和定位球优势明显，适合用高强度逼抢限制海地出球。",
        strengths: ["身体对抗", "定位球", "中场覆盖", "边路传中"],
        risks: ["身后空间", "进攻效率", "被速度冲击"]
      }
    ],
    coachView: "苏格兰纸面更稳，但必须避免后场被海地速度直接冲击。比赛倾向低比分，定位球可能决定胜负。",
    keyPlayers: [
      { name: "Duckens Nazon", team: "海地", role: "前锋", note: "反击终结和前场支点。" },
      { name: "Frantzdy Pierrot", team: "海地", role: "前锋", note: "冲刺和二点球威胁。" },
      { name: "Scott McTominay", team: "苏格兰", role: "中场", note: "后插上和定位球进攻点。" },
      { name: "Andy Robertson", team: "苏格兰", role: "边卫", note: "左路推进和传中质量核心。" }
    ]
  },
  {
    id: "australia-turkiye",
    href: "matches/australia-turkiye.html",
    title: "澳大利亚 vs 土耳其",
    group: "D 组",
    date: "2026-06-13",
    time: "次日 12:00",
    venue: "BC Place",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "平局或土耳其小胜",
      scoreLean: "1-1 / 1-2",
      recordedAt: "2026-06-13 03:21 UTC"
    },
    headline: "澳大利亚强在对抗和定位球，土耳其强在中前场创造力。",
    teams: [
      {
        name: "澳大利亚",
        label: "高空优势",
        summary: "澳大利亚会用身体对抗、长传和定位球拉高比赛强度，争取把土耳其拖进硬碰硬节奏。",
        strengths: ["高空球", "定位球", "防守纪律", "比赛强度"],
        risks: ["中场创造力", "被技术型球员摆脱", "落后后的攻坚"]
      },
      {
        name: "土耳其",
        label: "技术推进",
        summary: "土耳其的中前场脚下能力更好，若能控制二点球并减少无谓犯规，进攻上限更高。",
        strengths: ["中场传控", "前场创造力", "远射", "反击速度"],
        risks: ["定位球防守", "身体对抗", "情绪波动"]
      }
    ],
    coachView: "土耳其更有赢球手段，但澳大利亚很适合把比赛打成消耗战。若土耳其先入球，比赛会明显倾向 1-2。",
    keyPlayers: [
      { name: "Mathew Ryan", team: "澳大利亚", role: "门将", note: "需要稳定处理土耳其远射和传中。" },
      { name: "Harry Souttar", team: "澳大利亚", role: "中卫", note: "定位球攻防的核心高度。" },
      { name: "Hakan Calhanoglu", team: "土耳其", role: "中场", note: "节奏控制和远射威胁。" },
      { name: "Arda Guler", team: "土耳其", role: "攻击手", note: "前场创造力和关键传球来源。" }
    ]
  }
];

export function findMatch(matchId) {
  return matches.find((match) => match.id === matchId);
}
