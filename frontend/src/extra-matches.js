const team = (name, label, summary, strengths, risks) => ({ name, label, summary, strengths, risks });
const player = (name, team, role, note) => ({ name, team, role, note });

export const extraMatches = [
  {
    id: "uruguay-cape-verde",
    href: "matches/uruguay-cape-verde.html",
    title: "乌拉圭 vs 佛得角",
    group: "H 组",
    date: "2026-06-21",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "乌拉圭小胜", scoreLean: "1-0 / 2-1", recordedAt: "2026-06-24" },
    headline: "乌拉圭强度和禁区效率更高，佛得角需要继续用低位密度压缩空间。",
    teams: [
      team("乌拉圭", "强度压制", "乌拉圭需要把身体强度和前场逼抢转化为持续禁区压力，避免陷入低节奏消耗。", ["身体对抗", "前场压迫", "定位球", "禁区终结"], ["久攻不下", "转换身后", "进攻耐心"]),
      team("佛得角", "低位韧性", "佛得角会优先保持防线密度，用快速反击和定位球寻找少量高价值机会。", ["防线密度", "门前韧性", "反击速度"], ["控球不足", "禁区受压", "体能消耗"])
    ],
    coachView: "乌拉圭胜面更高，但比赛可能被佛得角拖成低比分。关键在乌拉圭能否早段破局。",
    keyPlayers: [
      player("Federico Valverde", "乌拉圭", "中场", "远射、推进和二点球控制是节奏核心。"),
      player("Darwin Nunez", "乌拉圭", "前锋", "冲刺和禁区终结决定上限。"),
      player("Ronald Araujo", "乌拉圭", "后卫", "处理反击和定位球防守很关键。"),
      player("Bebe", "佛得角", "前锋", "反击第一脚和远射是主要爆点。")
    ]
  },
  {
    id: "spain-saudi-arabia",
    href: "matches/spain-saudi-arabia.html",
    title: "西班牙 vs 沙特",
    group: "H 组",
    date: "2026-06-21",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "西班牙取胜", scoreLean: "2-0 / 3-1", recordedAt: "2026-06-24" },
    headline: "西班牙控球和肋部渗透优势明显，沙特要靠反击与纪律性延缓比赛。",
    teams: [
      team("西班牙", "传控压迫", "西班牙需要提高控球转化率，用边中结合和高位反抢持续压住沙特。", ["控球", "肋部配合", "高位压迫", "阵容深度"], ["破密集效率", "防反身后", "节奏单一"]),
      team("沙特", "快速转换", "沙特会用紧凑阵型和反击速度寻找空间，首要任务是守住前 30 分钟。", ["反击速度", "团队纪律", "边路冲刺"], ["控球时间不足", "禁区压力", "体能消耗"])
    ],
    coachView: "西班牙只要把控球优势转化为禁区触球，胜面很大。沙特若先丢球，比赛会迅速向两球差靠近。",
    keyPlayers: [
      player("Pedri", "西班牙", "中场", "节奏变化和最后一传核心。"),
      player("Lamine Yamal", "西班牙", "边锋", "边路一对一能打开低位防线。"),
      player("Alvaro Morata", "西班牙", "前锋", "禁区终结和牵制关键。"),
      player("Salem Al-Dawsari", "沙特", "边锋", "反击推进和个人突破最具威胁。")
    ]
  },
  {
    id: "belgium-iran",
    href: "matches/belgium-iran.html",
    title: "比利时 vs 伊朗",
    group: "G 组",
    date: "2026-06-21",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "比利时小胜或平局", scoreLean: "2-1 / 1-1", recordedAt: "2026-06-24" },
    headline: "比利时个人能力更强，但伊朗双前锋和定位球会持续制造风险。",
    teams: [
      team("比利时", "技术优势", "比利时需要依靠中前场技术和边路推进拉开伊朗防线。", ["前场技术", "边路推进", "远射", "定位球"], ["转换防守", "防线速度", "领先后松动"]),
      team("伊朗", "支点反击", "伊朗会利用 Taremi 和 Azmoun 的牵制打直接反击，并争取定位球机会。", ["前场支点", "身体对抗", "定位球", "反击直接"], ["控球不足", "边路受压", "防线横移"])
    ],
    coachView: "比利时胜面略高，但这不是稳胆。若伊朗把比赛拖进高对抗和二点球，比利时会很难拉开比分。",
    keyPlayers: [
      player("Kevin De Bruyne", "比利时", "中场", "最后一传和节奏变化核心。"),
      player("Romelu Lukaku", "比利时", "前锋", "禁区支点和终结关键。"),
      player("Mehdi Taremi", "伊朗", "前锋", "背身、造犯规和终结威胁。"),
      player("Sardar Azmoun", "伊朗", "前锋", "冲刺和二点球攻击点。")
    ]
  },
  {
    id: "new-zealand-egypt",
    href: "matches/new-zealand-egypt.html",
    title: "新西兰 vs 埃及",
    group: "G 组",
    date: "2026-06-21",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "埃及不败，偏埃及小胜", scoreLean: "1-2 / 1-1", recordedAt: "2026-06-24" },
    headline: "新西兰高点和二点球有威胁，埃及反击质量和 Salah 单点更有决定性。",
    teams: [
      team("新西兰", "高点冲击", "新西兰会通过长传、定位球和二点球把比赛推向高空对抗。", ["高空球", "二点球", "身体对抗"], ["控球质量", "身后空间", "防个人突破"]),
      team("埃及", "反击单点", "埃及需要保持低位纪律，并让 Salah 在转换中获得足够空间。", ["反击速度", "边路单点", "低位纪律", "定位球"], ["控球时间", "被高球冲击", "中路保护"])
    ],
    coachView: "埃及上限更高，但新西兰很适合把比赛拖成身体对抗。若埃及先入球，比赛会明显倾向反击节奏。",
    keyPlayers: [
      player("Chris Wood", "新西兰", "前锋", "高空球和禁区终结核心。"),
      player("Sarpreet Singh", "新西兰", "中场", "定位球和推进需要提供质量。"),
      player("Mohamed Salah", "埃及", "边锋", "反击和终结是最大胜负手。"),
      player("Mohamed Elneny", "埃及", "中场", "中路保护和出球节奏关键。")
    ]
  },
  {
    id: "norway-senegal",
    href: "matches/norway-senegal.html",
    title: "挪威 vs 塞内加尔",
    group: "I 组",
    date: "2026-06-22",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "平局或挪威小胜", scoreLean: "1-1 / 2-1", recordedAt: "2026-06-24" },
    headline: "挪威锋线效率很高，塞内加尔身体强度和反击同样能制造拉锯。",
    teams: [
      team("挪威", "锋线爆点", "挪威需要用 Haaland 的禁区威胁和 Odegaard 的传球不断压迫塞内加尔防线。", ["禁区终结", "直塞身后", "定位球", "冲刺威胁"], ["中场被冲击", "边路保护", "防线速度"]),
      team("塞内加尔", "强度反击", "塞内加尔会依靠身体、速度和边路冲击把比赛拉向高对抗。", ["身体对抗", "边路速度", "反击推进", "定位球"], ["阵地战创造", "终结效率", "防直塞"])
    ],
    coachView: "这场接近五五开。挪威终结点更强，塞内加尔能用强度打断节奏，平局概率不低。",
    keyPlayers: [
      player("Erling Haaland", "挪威", "前锋", "禁区终结决定挪威上限。"),
      player("Martin Odegaard", "挪威", "中场", "最后一传和节奏控制核心。"),
      player("Sadio Mane", "塞内加尔", "前锋", "反击推进和个人突破关键。"),
      player("Kalidou Koulibaly", "塞内加尔", "中卫", "限制 Haaland 是核心任务。")
    ]
  },
  {
    id: "france-iraq",
    href: "matches/france-iraq.html",
    title: "法国 vs 伊拉克",
    group: "I 组",
    date: "2026-06-22",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "法国取胜", scoreLean: "2-0 / 3-1", recordedAt: "2026-06-24" },
    headline: "法国速度、阵容深度和禁区效率优势明显，伊拉克需要先守住中路。",
    teams: [
      team("法国", "速度压制", "法国可以通过边路速度和前场自由换位持续制造一对一优势。", ["边路速度", "阵容深度", "禁区终结", "反抢"], ["转换身后", "轮换默契", "久攻不下"]),
      team("伊拉克", "低位反击", "伊拉克需要保持中路紧凑，用反击第一脚和定位球争取机会。", ["团队纪律", "定位球", "反击冲刺"], ["防线承压", "控球不足", "边路被爆破"])
    ],
    coachView: "法国胜面很大，关键是避免开局松动。伊拉克若早段失球，比赛会快速进入两球以上差距。",
    keyPlayers: [
      player("Kylian Mbappe", "法国", "前锋", "速度和终结是最直接破局点。"),
      player("Antoine Griezmann", "法国", "攻击手", "串联和定位球价值明显。"),
      player("Aurelien Tchouameni", "法国", "中场", "控制二点球和保护反击。"),
      player("Aymen Hussein", "伊拉克", "前锋", "支点和定位球进攻核心。")
    ]
  },
  {
    id: "argentina-austria",
    href: "matches/argentina-austria.html",
    title: "阿根廷 vs 奥地利",
    group: "J 组",
    date: "2026-06-22",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "阿根廷小胜", scoreLean: "2-1 / 1-0", recordedAt: "2026-06-24" },
    headline: "阿根廷控制力和前场细节更好，奥地利压迫强度会让比赛保持悬念。",
    teams: [
      team("阿根廷", "冠军控制", "阿根廷需要用中场控球和前场小范围配合拆解奥地利压迫。", ["中场控制", "小空间配合", "定位球", "比赛管理"], ["被高压逼抢", "防线身后", "节奏偏慢"]),
      team("奥地利", "高压冲击", "奥地利整体压迫和中场覆盖很强，适合制造阿根廷后场失误。", ["压迫强度", "中场覆盖", "远射", "定位球"], ["防线速度", "被反压身后", "终结效率"])
    ],
    coachView: "阿根廷质量更高，但奥地利会把比赛变得很难受。若阿根廷能越过第一道压迫，胜面会明显扩大。",
    keyPlayers: [
      player("Lionel Messi", "阿根廷", "攻击手", "最后一传和定位球仍能改变比赛。"),
      player("Julian Alvarez", "阿根廷", "前锋", "前场压迫和终结关键。"),
      player("Marcel Sabitzer", "奥地利", "中场", "远射和前插是主要威胁。"),
      player("Konrad Laimer", "奥地利", "中场", "压迫覆盖和二点球核心。")
    ]
  },
  {
    id: "jordan-algeria",
    href: "matches/jordan-algeria.html",
    title: "约旦 vs 阿尔及利亚",
    group: "J 组",
    date: "2026-06-22",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "阿尔及利亚不败，偏阿尔及利亚小胜", scoreLean: "0-1 / 1-1", recordedAt: "2026-06-24" },
    headline: "两队都需要抢分，阿尔及利亚经验和个人能力略占优，约旦反击有冲击力。",
    teams: [
      team("约旦", "反击纪律", "约旦需要保持紧凑阵型，用边路速度和快速直传寻找身后。", ["团队纪律", "反击速度", "前场单点"], ["控球压力", "身体对抗", "定位球防守"]),
      team("阿尔及利亚", "经验修正", "阿尔及利亚需要提升出球稳定性，用边路和前场个人能力打开局面。", ["大赛经验", "边路技术", "定位球", "身体对抗"], ["后场失误", "节奏急躁", "防反身后"])
    ],
    coachView: "阿尔及利亚纸面更稳，但约旦能把比赛拖成一球胜负。先入球一方会获得很大心理优势。",
    keyPlayers: [
      player("Musa Al-Taamari", "约旦", "边锋", "反击推进和一对一突破核心。"),
      player("Yazan Al-Naimat", "约旦", "前锋", "有限机会的终结点。"),
      player("Riyad Mahrez", "阿尔及利亚", "边锋", "边路创造和定位球关键。"),
      player("Ismael Bennacer", "阿尔及利亚", "中场", "攻守转换和出球稳定器。")
    ]
  },
  {
    id: "england-ghana",
    href: "matches/england-ghana.html",
    title: "英格兰 vs 加纳",
    group: "L 组",
    date: "2026-06-23",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "英格兰不败，偏英格兰小胜", scoreLean: "2-1 / 1-1", recordedAt: "2026-06-24" },
    headline: "英格兰阵容厚度更强，加纳速度和身体冲击会让比赛保持开放。",
    teams: [
      team("英格兰", "阵容厚度", "英格兰可以通过前场多点进攻和定位球持续制造压力。", ["前场深度", "定位球", "边路爆点", "中场前插"], ["防反身后", "大赛压力", "中场控制波动"]),
      team("加纳", "前场冲击", "加纳会依靠 Kudus、Williams 的推进和身体对抗打快速转换。", ["速度冲击", "身体对抗", "二点球", "反击"], ["防线持续受压", "控球耐心", "定位球防守"])
    ],
    coachView: "英格兰胜面更高，但加纳有能力制造转换威胁。英格兰需要避免把比赛踢成对冲。",
    keyPlayers: [
      player("Harry Kane", "英格兰", "前锋", "支点和终结能力核心。"),
      player("Jude Bellingham", "英格兰", "中场", "前插和禁区二点球关键。"),
      player("Mohammed Kudus", "加纳", "攻击手", "持球推进和最后一脚最具威胁。"),
      player("Thomas Partey", "加纳", "中场", "二点球控制和中路保护关键。")
    ]
  },
  {
    id: "panama-croatia",
    href: "matches/panama-croatia.html",
    title: "巴拿马 vs 克罗地亚",
    group: "L 组",
    date: "2026-06-23",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "克罗地亚小胜", scoreLean: "0-1 / 1-2", recordedAt: "2026-06-24" },
    headline: "克罗地亚中场经验和比赛管理更好，巴拿马需要把比赛压成低比分。",
    teams: [
      team("巴拿马", "纪律防守", "巴拿马会优先保持阵型紧凑，用定位球和身体对抗寻找机会。", ["防守纪律", "身体对抗", "定位球"], ["控球不足", "边路受压", "终结效率"]),
      team("克罗地亚", "经验控场", "克罗地亚需要用中场节奏管理控制消耗，并减少后场防反风险。", ["中场经验", "控球耐心", "定位球", "比赛管理"], ["防线速度", "体能后段", "攻坚效率"])
    ],
    coachView: "克罗地亚优势在节奏和经验，但不会轻松。巴拿马若守住前段，比赛可能只差一球。",
    keyPlayers: [
      player("Luka Modric", "克罗地亚", "中场", "控制节奏和转移方向核心。"),
      player("Mateo Kovacic", "克罗地亚", "中场", "摆脱压迫和推进关键。"),
      player("Josko Gvardiol", "克罗地亚", "后卫", "推进和防反保护重要。"),
      player("Edgar Barcenas", "巴拿马", "边锋", "反击推进和定位球处理核心。")
    ]
  },
  {
    id: "portugal-uzbekistan",
    href: "matches/portugal-uzbekistan.html",
    title: "葡萄牙 vs 乌兹别克斯坦",
    group: "K 组",
    date: "2026-06-23",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "葡萄牙取胜", scoreLean: "2-0 / 3-1", recordedAt: "2026-06-24" },
    headline: "葡萄牙控场和前场创造力优势明显，乌兹别克斯坦需要先保护中路。",
    teams: [
      team("葡萄牙", "技术控场", "葡萄牙需要把控球优势转化为禁区触球，避免继续出现久攻不下。", ["中场创造", "边路推进", "阵容深度", "定位球"], ["转换防守", "终结效率", "节奏松动"]),
      team("乌兹别克斯坦", "纪律反击", "乌兹别克斯坦要依靠 Shomurodov 的支点和整体纪律抵抗持续压迫。", ["团队纪律", "支点反击", "中路保护"], ["边路防守", "大赛经验", "控球不足"])
    ],
    coachView: "葡萄牙胜面很大，关键是早段进球。乌兹别克斯坦若能拖住比分，会把比赛压向低比分。",
    keyPlayers: [
      player("Cristiano Ronaldo", "葡萄牙", "前锋", "禁区终结和牵制仍有价值。"),
      player("Bruno Fernandes", "葡萄牙", "中场", "最后一传和前插射门核心。"),
      player("Bernardo Silva", "葡萄牙", "中场", "小空间控球和节奏变化关键。"),
      player("Eldor Shomurodov", "乌兹别克斯坦", "前锋", "前场支点和反击终结核心。")
    ]
  },
  {
    id: "colombia-dr-congo",
    href: "matches/colombia-dr-congo.html",
    title: "哥伦比亚 vs 刚果民主共和国",
    group: "K 组",
    date: "2026-06-23",
    time: "待核对",
    venue: "待核对",
    actual: { status: "待更新", score: "待更新", updatedAt: "" },
    prediction: { tendency: "哥伦比亚小胜", scoreLean: "2-1 / 1-0", recordedAt: "2026-06-24" },
    headline: "哥伦比亚边路质量更高，刚果民主共和国身体和反击会制造波动。",
    teams: [
      team("哥伦比亚", "边路爆点", "哥伦比亚需要通过 Luis Diaz 的边路单点和中前场技术持续拉扯防线。", ["边路一对一", "中前场技术", "反抢质量", "定位球"], ["防反身后", "情绪犯规", "终结效率"]),
      team("刚果民主共和国", "身体反击", "刚果民主共和国会利用身体对抗和快速转换，把比赛拖成高强度对抗。", ["身体对抗", "反击速度", "禁区冲击"], ["控球质量", "防线距离", "被连续压迫"])
    ],
    coachView: "哥伦比亚胜面略高，但刚果民主共和国有能力把比赛打乱。定位球和二点球会影响走势。",
    keyPlayers: [
      player("Luis Diaz", "哥伦比亚", "边锋", "左路爆破是最稳定破局方式。"),
      player("James Rodriguez", "哥伦比亚", "中场", "定位球和最后一传关键。"),
      player("Yoane Wissa", "刚果民主共和国", "前锋", "反击冲刺和禁区终结威胁。"),
      player("Chancel Mbemba", "刚果民主共和国", "后卫", "防线组织和定位球争顶核心。")
    ]
  },
  {
    id: "scotland-brazil",
    href: "matches/scotland-brazil.html",
    title: "苏格兰 vs 巴西",
    group: "C 组",
    date: "2026-06-24",
    time: "次日 06:00",
    venue: "Miami Stadium",
    actual: { status: "未开始", score: "待更新", updatedAt: "" },
    prediction: { tendency: "巴西不败，偏巴西小胜", scoreLean: "1-2 / 0-2", recordedAt: "2026-06-24" },
    headline: "苏格兰必须争分，巴西边路爆点和反抢质量仍是更高上限。",
    teams: [
      team("苏格兰", "强度抢分", "苏格兰需要把比赛拉进高对抗和定位球节奏，用 McTominay 后插上制造威胁。", ["身体对抗", "定位球", "左路传中", "中场冲击"], ["防线身后", "控球细腻度", "被边路单点针对"]),
      team("巴西", "边路压制", "巴西要用宽度和一对一拉开防线，并通过反抢限制苏格兰长传反击。", ["边路单点", "前场技术", "反抢质量", "阵容深度"], ["久攻不下", "定位球防守", "转换身后"])
    ],
    coachView: "巴西不败方向更稳，但苏格兰的定位球会让比赛存在波动。若巴西先入球，比赛会向 0-2 或 1-2 靠近。",
    keyPlayers: [
      player("Scott McTominay", "苏格兰", "中场", "后插上和定位球进攻是主要得分点。"),
      player("Andy Robertson", "苏格兰", "边卫", "左路推进和传中质量关键。"),
      player("Vinicius Junior", "巴西", "边锋", "左路爆破是巴西主要破局方式。"),
      player("Rodrygo", "巴西", "前锋", "中路游动和第二点射门会拉扯防线。")
    ]
  },
  {
    id: "morocco-haiti",
    href: "matches/morocco-haiti.html",
    title: "摩洛哥 vs 海地",
    group: "C 组",
    date: "2026-06-24",
    time: "次日 06:00",
    venue: "Atlanta Stadium",
    actual: { status: "未开始", score: "待更新", updatedAt: "" },
    prediction: { tendency: "摩洛哥取胜", scoreLean: "2-0 / 2-1", recordedAt: "2026-06-24" },
    headline: "摩洛哥防守结构和转换质量更稳，海地需要用速度制造最后机会。",
    teams: [
      team("摩洛哥", "边路推进", "摩洛哥两轮表现稳定，Hakimi 的推进和中后场纪律能持续压住比赛风险。", ["边路速度", "防守结构", "快速反击", "大赛经验"], ["定位球防守", "禁区高点", "进攻耐心"]),
      team("海地", "速度求生", "海地需要依靠前场速度和纵向冲刺争取偷袭，防守端必须避免早段失球。", ["前场速度", "纵向冲刺", "身体弹性"], ["防守密度", "控球压力", "禁区连续受压"])
    ],
    coachView: "摩洛哥胜面明显更高。海地若不能守住前段，比赛会快速进入摩洛哥控节奏模式。",
    keyPlayers: [
      player("Achraf Hakimi", "摩洛哥", "边卫", "右路推进和攻守转换核心。"),
      player("Hakim Ziyech", "摩洛哥", "攻击手", "斜传和定位球能改变低比分比赛。"),
      player("Youssef En-Nesyri", "摩洛哥", "前锋", "禁区终结和高点威胁。"),
      player("Duckens Nazon", "海地", "前锋", "反击终结和背身支点是海地主要希望。")
    ]
  },
  {
    id: "switzerland-canada",
    href: "matches/switzerland-canada.html",
    title: "瑞士 vs 加拿大",
    group: "B 组",
    date: "2026-06-24",
    time: "待核对",
    venue: "待核对",
    actual: { status: "未开始", score: "待更新", updatedAt: "" },
    prediction: { tendency: "平局或加拿大不败", scoreLean: "1-1 / 1-2", recordedAt: "2026-06-24" },
    headline: "这是小组头名战，加拿大净胜球和速度更有优势，瑞士稳定性很强。",
    teams: [
      team("瑞士", "稳定控场", "瑞士中场经验和防线稳定性较好，适合把比赛压进耐心控球和定位球节奏。", ["中场控制", "防线经验", "定位球", "比赛管理"], ["进攻效率", "边路速度", "被反击打身后"]),
      team("加拿大", "速度冲击", "加拿大前场速度和转换效率很高，净胜球优势让他们可以更从容地选择节奏。", ["前场速度", "边路推进", "反击效率", "身体覆盖"], ["防线距离", "控球耐心", "定位球防守"])
    ],
    coachView: "加拿大不败略稳，但瑞士很难被打穿。比赛倾向 1-1，若加拿大先入球会转向 1-2。",
    keyPlayers: [
      player("Granit Xhaka", "瑞士", "中场", "控制节奏和转移方向核心。"),
      player("Manuel Akanji", "瑞士", "中卫", "防线推进和限制反击关键。"),
      player("Alphonso Davies", "加拿大", "边路", "速度推进和一对一是主要爆点。"),
      player("Jonathan David", "加拿大", "前锋", "禁区终结和反击落点核心。")
    ]
  },
  {
    id: "bosnia-herzegovina-qatar",
    href: "matches/bosnia-herzegovina-qatar.html",
    title: "波黑 vs 卡塔尔",
    group: "B 组",
    date: "2026-06-24",
    time: "待核对",
    venue: "待核对",
    actual: { status: "未开始", score: "待更新", updatedAt: "" },
    prediction: { tendency: "波黑不败，偏波黑小胜", scoreLean: "1-0 / 1-1", recordedAt: "2026-06-24" },
    headline: "两队都需要抢分，波黑直接打法和身体优势略占上风。",
    teams: [
      team("波黑", "直接冲击", "波黑需要利用中路支点、定位球和二点球，把比赛推向身体对抗。", ["身体对抗", "定位球", "中路支点", "远射"], ["防线后段", "边路回追", "控球稳定性"]),
      team("卡塔尔", "低位求分", "卡塔尔需要保持低位纪律，通过 Afif 的反击推进寻找有限机会。", ["反击推进", "定位球", "低位纪律"], ["防线承压", "净胜球压力", "控球不足"])
    ],
    coachView: "波黑略稳，但卡塔尔如果守住前 30 分钟，比赛会越来越接近 1-1。",
    keyPlayers: [
      player("Edin Dzeko", "波黑", "前锋", "支点和禁区终结仍有决定性。"),
      player("Miralem Pjanic", "波黑", "中场", "定位球和调度关键。"),
      player("Akram Afif", "卡塔尔", "攻击手", "反击推进和最后一传核心。"),
      player("Almoez Ali", "卡塔尔", "前锋", "有限机会的终结点。")
    ]
  },
  {
    id: "czechia-mexico",
    href: "matches/czechia-mexico.html",
    title: "捷克 vs 墨西哥",
    group: "A 组",
    date: "2026-06-24",
    time: "待核对",
    venue: "Mexico City Stadium",
    actual: { status: "未开始", score: "待更新", updatedAt: "" },
    prediction: { tendency: "墨西哥不败，偏平局", scoreLean: "1-1 / 0-1", recordedAt: "2026-06-24" },
    headline: "墨西哥已掌握主动，捷克必须抢分，比赛会围绕定位球和节奏管理展开。",
    teams: [
      team("捷克", "高点抢分", "捷克需要利用身体、定位球和禁区高点争取领先，否则会被墨西哥控节奏消耗。", ["高空球", "定位球", "身体对抗", "禁区终结"], ["防线速度", "控球细腻度", "被主场压制"]),
      team("墨西哥", "主场控节奏", "墨西哥主场环境和控场经验更成熟，可以用边路推进稳定消耗捷克。", ["主场声量", "控场经验", "边路推进", "比赛管理"], ["轮换默契", "定位球防守", "领先后松动"])
    ],
    coachView: "墨西哥不败更稳，但捷克必须争胜会提高比赛波动。若墨西哥轮换较多，平局概率上升。",
    keyPlayers: [
      player("Tomas Soucek", "捷克", "中场", "高点和后插上是关键威胁。"),
      player("Patrik Schick", "捷克", "前锋", "禁区终结和支点核心。"),
      player("Hirving Lozano", "墨西哥", "边锋", "边路速度和反击推进关键。"),
      player("Raul Jimenez", "墨西哥", "前锋", "支点和终结能力重要。")
    ]
  },
  {
    id: "south-africa-south-korea",
    href: "matches/south-africa-south-korea.html",
    title: "南非 vs 韩国",
    group: "A 组",
    date: "2026-06-24",
    time: "待核对",
    venue: "Monterrey Stadium",
    actual: { status: "未开始", score: "待更新", updatedAt: "" },
    prediction: { tendency: "韩国不败，偏韩国小胜", scoreLean: "1-2 / 1-1", recordedAt: "2026-06-24" },
    headline: "韩国转换速度和关键球员质量更高，南非必须主动争胜会留下空间。",
    teams: [
      team("南非", "主动求胜", "南非需要提高前场效率，同时避免在主动压上后被韩国打身后。", ["身体对抗", "反击速度", "定位球冲击"], ["防线身后", "阵地战创造", "终结效率"]),
      team("韩国", "速度反击", "韩国适合利用 Son、Hwang 的速度和 Kim Min-jae 的后场稳定性控制风险。", ["转换速度", "边路冲刺", "欧洲经验", "后场对抗"], ["防高球", "体能后段", "阵地战耐心"])
    ],
    coachView: "韩国不败更稳。南非必须争胜会让比赛开放，反而给韩国转换空间。",
    keyPlayers: [
      player("Percy Tau", "南非", "攻击手", "推进和最后一脚需要制造威胁。"),
      player("Lyle Foster", "南非", "前锋", "支点和禁区终结关键。"),
      player("Son Heung-min", "韩国", "前锋", "反击终结和无球冲刺是最大武器。"),
      player("Kim Min-jae", "韩国", "中卫", "防线稳定和处理高球关键。")
    ]
  }
];
