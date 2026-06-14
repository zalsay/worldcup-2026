export const reportMeta = {
  generatedAt: "2026-06-14 03:09 UTC",
  dateLabel: "2026-06-14",
  timezone: "北京时间",
  group: "A / B / C / D / E / F 组"
};

export const standings = [
  { group: "A 组", team: "墨西哥", points: 3, goalDiff: 2, note: "2-0 赢下揭幕战，预测命中胜负方向。" },
  { group: "A 组", team: "韩国", points: 3, goalDiff: 1, note: "2-1 逆转捷克，速度优势和替补冲击打出效果。" },
  { group: "A 组", team: "捷克", points: 0, goalDiff: -1, note: "首战先进后失守，定位球威胁仍有价值。" },
  { group: "A 组", team: "南非", points: 0, goalDiff: -2, note: "揭幕战失利且吃到红牌，后续容错降低。" },
  { group: "B 组", team: "加拿大", points: 1, goalDiff: 0, note: "1-1 战平波黑，Larin 替补进球拿到队史世界杯首分。" },
  { group: "B 组", team: "波黑", points: 1, goalDiff: 0, note: "客场先入球后被追平，低位防守拿到一分。" },
  { group: "B 组", team: "瑞士", points: 1, goalDiff: 0, note: "1-1 战平卡塔尔，领先后补时阶段被扳平。" },
  { group: "B 组", team: "卡塔尔", points: 1, goalDiff: 0, note: "补时阶段制造乌龙，1-1 逼平瑞士拿到关键一分。" },
  { group: "C 组", team: "苏格兰", points: 3, goalDiff: 1, note: "1-0 击败海地，McGinn 进球兑现定位球和对抗优势。" },
  { group: "C 组", team: "巴西", points: 1, goalDiff: 0, note: "1-1 战平摩洛哥，强点爆破有效但未能拿满三分。" },
  { group: "C 组", team: "摩洛哥", points: 1, goalDiff: 0, note: "1-1 逼平巴西，防守韧性和反击质量得到验证。" },
  { group: "C 组", team: "海地", points: 0, goalDiff: -1, note: "0-1 不敌苏格兰，反击有威胁但终结效率不足。" },
  { group: "D 组", team: "美国", points: 3, goalDiff: 3, note: "4-1 大胜巴拉圭，Balogun 梅开二度。" },
  { group: "D 组", team: "澳大利亚", points: 0, goalDiff: 0, note: "今日对阵土耳其，高空球和定位球是主要抓手。" },
  { group: "D 组", team: "土耳其", points: 0, goalDiff: 0, note: "今日对阵澳大利亚，中前场创造力占优。" },
  { group: "D 组", team: "巴拉圭", points: 0, goalDiff: -3, note: "1-4 不敌美国，防线被持续冲击。" },
  { group: "E 组", team: "德国", points: 0, goalDiff: 0, note: "北京时间 6 月 15 日对阵库拉索，控球和前场压迫优势明显。" },
  { group: "E 组", team: "库拉索", points: 0, goalDiff: 0, note: "世界杯首秀对阵德国，防线密度和反击效率是拿分基础。" },
  { group: "E 组", team: "科特迪瓦", points: 0, goalDiff: 0, note: "北京时间 6 月 15 日对阵厄瓜多尔，身体对抗和边路推进是关键。" },
  { group: "E 组", team: "厄瓜多尔", points: 0, goalDiff: 0, note: "高强度压迫和中前场机动性有望压缩科特迪瓦出球空间。" },
  { group: "F 组", team: "荷兰", points: 0, goalDiff: 0, note: "北京时间 6 月 15 日对阵日本，阵容厚度和中后场组织占优。" },
  { group: "F 组", team: "日本", points: 0, goalDiff: 0, note: "面对荷兰需要用高节奏传跑和边路轮转换取空间。" },
  { group: "F 组", team: "瑞典", points: 0, goalDiff: 0, note: "北京时间 6 月 15 日对阵突尼斯，双前锋质量和定位球威胁突出。" },
  { group: "F 组", team: "突尼斯", points: 0, goalDiff: 0, note: "防守纪律强，但进攻端需要提高转换后的第一脚质量。" }
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
      status: "已结束",
      score: "卡塔尔 1-1 瑞士",
      updatedAt: "2026-06-14 03:09 UTC"
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
      status: "已结束",
      score: "巴西 1-1 摩洛哥",
      updatedAt: "2026-06-14 03:09 UTC"
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
      status: "已结束",
      score: "海地 0-1 苏格兰",
      updatedAt: "2026-06-14 03:09 UTC"
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
  },
  {
    id: "germany-curacao",
    href: "matches/germany-curacao.html",
    title: "德国 vs 库拉索",
    group: "E 组",
    date: "2026-06-14",
    time: "次日 01:00",
    venue: "Houston Stadium",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "德国大胜",
      scoreLean: "3-0 / 4-0",
      recordedAt: "2026-06-14 03:09 UTC"
    },
    headline: "德国需要用揭幕强度压住比赛，库拉索首要目标是守住前 30 分钟。",
    teams: [
      {
        name: "德国",
        label: "压迫控场",
        summary: "德国的中前场技术、阵容深度和前压能力明显占优，适合通过高位压迫持续制造二次进攻。",
        strengths: ["中场控制", "前场压迫", "阵容深度", "禁区人数"],
        risks: ["首战急躁", "防线身后空间", "破密集效率"]
      },
      {
        name: "库拉索",
        label: "低位反击",
        summary: "库拉索会更依赖紧凑低位和反击第一脚。若能把比分拖住，德国的心理压力会逐步上升。",
        strengths: ["防线密度", "反击速度", "首秀斗志"],
        risks: ["控球时间不足", "禁区持续受压", "体能消耗"]
      }
    ],
    coachView: "德国胜面很大，关键是尽早把控球优势转成进球。库拉索若前段失球，比赛可能迅速滑向三球以上差距。",
    keyPlayers: [
      { name: "Jamal Musiala", team: "德国", role: "攻击手", note: "肋部突破和小空间摆脱会决定德国上限。" },
      { name: "Florian Wirtz", team: "德国", role: "中场", note: "负责最后一传和节奏变化。" },
      { name: "Joshua Kimmich", team: "德国", role: "中场", note: "控制二点球和攻守转换。" },
      { name: "Leandro Bacuna", team: "库拉索", role: "中场", note: "反击出球和定位球质量关键。" }
    ]
  },
  {
    id: "netherlands-japan",
    href: "matches/netherlands-japan.html",
    title: "荷兰 vs 日本",
    group: "F 组",
    date: "2026-06-14",
    time: "次日 04:00",
    venue: "Dallas Stadium",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "荷兰小胜或平局",
      scoreLean: "2-1 / 1-1",
      recordedAt: "2026-06-14 03:09 UTC"
    },
    headline: "荷兰身体和纵深更强，日本会用节奏和传跑压缩差距。",
    teams: [
      {
        name: "荷兰",
        label: "纵深冲击",
        summary: "荷兰中后场出球和前场纵深更有优势，若能把日本压到低位，禁区冲击会持续放大。",
        strengths: ["中卫出球", "边路宽度", "身体对抗", "前场冲刺"],
        risks: ["中场被快速穿透", "阵地战耐心", "边翼卫身后"]
      },
      {
        name: "日本",
        label: "快速传跑",
        summary: "日本整体纪律、传跑速度和边路换位很成熟，适合用连续短传打乱荷兰防线站位。",
        strengths: ["团队配合", "高节奏转换", "边路轮转", "前场压迫"],
        risks: ["高空球防守", "身体对抗", "禁区保护"]
      }
    ],
    coachView: "这场不是单向强弱局。荷兰更有硬实力，但日本能把比赛拖进高节奏细节战，平局概率不低。",
    keyPlayers: [
      { name: "Virgil van Dijk", team: "荷兰", role: "中卫", note: "防线压上后的身后保护核心。" },
      { name: "Frenkie de Jong", team: "荷兰", role: "中场", note: "推进和摆脱日本压迫的关键。" },
      { name: "Takefusa Kubo", team: "日本", role: "攻击手", note: "右路内切和最后一传最具威胁。" },
      { name: "Kaoru Mitoma", team: "日本", role: "边锋", note: "一对一突破能改变比赛节奏。" }
    ]
  },
  {
    id: "cote-divoire-ecuador",
    href: "matches/cote-divoire-ecuador.html",
    title: "科特迪瓦 vs 厄瓜多尔",
    group: "E 组",
    date: "2026-06-14",
    time: "次日 07:00",
    venue: "Philadelphia Stadium",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "平局或厄瓜多尔小胜",
      scoreLean: "1-1 / 1-2",
      recordedAt: "2026-06-14 03:09 UTC"
    },
    headline: "两队都能打高强度，比赛胜负更可能取决于中场二点球。",
    teams: [
      {
        name: "科特迪瓦",
        label: "身体冲击",
        summary: "科特迪瓦身体对抗、边路推进和前场冲刺有威胁，适合把比赛拉到开放空间。",
        strengths: ["身体对抗", "边路速度", "反击冲刺", "定位球"],
        risks: ["中场保护", "防线距离", "被持续压迫后的出球"]
      },
      {
        name: "厄瓜多尔",
        label: "压迫机动",
        summary: "厄瓜多尔整体跑动和中场机动性更好，能通过高强度压迫限制科特迪瓦的第一脚推进。",
        strengths: ["中场覆盖", "高位压迫", "转换速度", "防线弹性"],
        risks: ["进攻效率", "定位球防守", "对抗消耗"]
      }
    ],
    coachView: "厄瓜多尔整体性略好，但科特迪瓦有足够的单点冲击。若前 60 分钟仍是平局，定位球和替补速度会决定走向。",
    keyPlayers: [
      { name: "Franck Kessie", team: "科特迪瓦", role: "中场", note: "对抗、推进和点球点附近后插上关键。" },
      { name: "Simon Adingra", team: "科特迪瓦", role: "边锋", note: "边路一对一和反击推进核心。" },
      { name: "Moises Caicedo", team: "厄瓜多尔", role: "中场", note: "覆盖范围和反抢会影响比赛重心。" },
      { name: "Pervis Estupinan", team: "厄瓜多尔", role: "边卫", note: "左路推进和传中质量重要。" }
    ]
  },
  {
    id: "sweden-tunisia",
    href: "matches/sweden-tunisia.html",
    title: "瑞典 vs 突尼斯",
    group: "F 组",
    date: "2026-06-14",
    time: "次日 10:00",
    venue: "Monterrey Stadium",
    actual: {
      status: "未开始",
      score: "待更新",
      updatedAt: ""
    },
    prediction: {
      tendency: "瑞典小胜",
      scoreLean: "1-0 / 2-1",
      recordedAt: "2026-06-14 03:09 UTC"
    },
    headline: "瑞典锋线质量更高，突尼斯会努力把比赛压成低比分。",
    teams: [
      {
        name: "瑞典",
        label: "锋线优势",
        summary: "瑞典拥有更强的前场终结和空中威胁，适合通过边路传中和二点球持续压迫突尼斯。",
        strengths: ["锋线终结", "空中球", "定位球", "身体对抗"],
        risks: ["中场创造力", "防反身后", "久攻不下后的急躁"]
      },
      {
        name: "突尼斯",
        label: "纪律防守",
        summary: "突尼斯防守组织和比赛纪律出色，若能减少禁区前犯规，有机会把瑞典拖入消耗战。",
        strengths: ["防守密度", "纪律性", "反击第一脚", "门前韧性"],
        risks: ["进攻火力", "高空球防守", "被持续压制"]
      }
    ],
    coachView: "瑞典需要耐心，不应过早进入简单传中循环。突尼斯如果守住上半场，比赛会变成一球胜负。",
    keyPlayers: [
      { name: "Alexander Isak", team: "瑞典", role: "前锋", note: "禁区内外的终结和牵制是主要优势。" },
      { name: "Viktor Gyokeres", team: "瑞典", role: "前锋", note: "冲击力和背身能力能消耗突尼斯中卫。" },
      { name: "Ellyes Skhiri", team: "突尼斯", role: "中场", note: "中场保护和二点球控制关键。" },
      { name: "Hannibal Mejbri", team: "突尼斯", role: "中场", note: "推进和前场压迫需要提供变化。" }
    ]
  }
];

export function findMatch(matchId) {
  return matches.find((match) => match.id === matchId);
}
