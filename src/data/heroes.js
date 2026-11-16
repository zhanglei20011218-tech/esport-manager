export const ROLES = ['TOP', 'JUG', 'MID', 'ADC', 'SUP'];

export const ROLE_CN = { TOP: '上单', JUG: '打野', MID: '中单', ADC: '下路', SUP: '辅助' };

export const CATEGORY_CN = {
  fighter: '战士',
  tank: '坦克',
  mage: '法师',
  marksman: '射手',
  assassin: '刺客',
  support: '辅助'
};

export const PHASE_CN = { early: '前期', mid: '中期', late: '后期', balanced: '均衡' };

// 经典克制对（BP 时克制方 +1%，可随版本扩充）
export const COUNTERS = {
  jayce: ['malphite'],
  quinn: ['malphite'],
  riven: ['malphite', 'jax'],
  nasus: ['teemo'],
  teemo: ['darius'],
  darius: ['quinn'],
  yasuo: ['malphite'],
  vayne: ['malphite'],
  leona: ['morgana', 'janna'],
  nautilus: ['morgana'],
  blitzcrank: ['morgana'],
  thresh: ['morgana'],
  katarina: ['orianna', 'lissandra'],
  zed: ['orianna'],
  jhin: ['morgana'],
  jinx: ['leona'],
  kaisa: ['leona']
};

// 经典联动对（BP 时联动 +1%）
export const SYNERGIES = [
  ['jinx', 'thresh'],
  ['ashe', 'braum'],
  ['vayne', 'lulu'],
  ['lucian', 'braum'],
  ['yasuo', 'gragas'],
  ['kalista', 'thresh'],
  ['orianna', 'graves'],
  ['kaisa', 'nautilus']
];

export const HEROES = [
  // ---------- 上单 ----------
  { id: 'aatrox', name: '剑魔', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'camille', name: '青钢影', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'ornn', name: '奥恩', role: 'TOP', category: 'tank', phase: 'late' },
  { id: 'mundo', name: '蒙多', role: 'TOP', category: 'tank', phase: 'late' },
  { id: 'jayce', name: '杰斯', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'kennen', name: '凯南', role: 'TOP', category: 'mage', phase: 'mid' },
  { id: 'renekton', name: '鳄鱼', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'jax', name: '武器大师', role: 'TOP', category: 'fighter', phase: 'late' },

  // ---------- 打野 ----------
  { id: 'leesin', name: '盲僧', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'graves', name: '男枪', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'kindred', name: '千珏', role: 'JUG', category: 'marksman', phase: 'late' },
  { id: 'jarvan', name: '皇子', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'sejuani', name: '猪妹', role: 'JUG', category: 'tank', phase: 'late' },
  { id: 'nidalee', name: '豹女', role: 'JUG', category: 'assassin', phase: 'early' },
  { id: 'khazix', name: '螳螂', role: 'JUG', category: 'assassin', phase: 'mid' },
  { id: 'viego', name: '破败王', role: 'JUG', category: 'assassin', phase: 'late' },

  // ---------- 中单 ----------
  { id: 'ahri', name: '阿狸', role: 'MID', category: 'mage', phase: 'mid' },
  { id: 'zed', name: '劫', role: 'MID', category: 'assassin', phase: 'mid' },
  { id: 'syndra', name: '辛德拉', role: 'MID', category: 'mage', phase: 'mid' },
  { id: 'orianna', name: '发条', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'akali', name: '阿卡丽', role: 'MID', category: 'assassin', phase: 'mid' },
  { id: 'azir', name: '沙皇', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'leblanc', name: '妖姬', role: 'MID', category: 'assassin', phase: 'early' },
  { id: 'yone', name: '永恩', role: 'MID', category: 'fighter', phase: 'late' },

  // ---------- 下路 ----------
  { id: 'vayne', name: '薇恩', role: 'ADC', category: 'marksman', phase: 'late' },
  { id: 'jinx', name: '金克丝', role: 'ADC', category: 'marksman', phase: 'late' },
  { id: 'kaisa', name: '卡莎', role: 'ADC', category: 'marksman', phase: 'mid' },
  { id: 'ezreal', name: '伊泽瑞尔', role: 'ADC', category: 'marksman', phase: 'mid' },
  { id: 'draven', name: '德莱文', role: 'ADC', category: 'marksman', phase: 'early' },
  { id: 'caitlyn', name: '女警', role: 'ADC', category: 'marksman', phase: 'early' },
  { id: 'aphelios', name: '厄斐琉斯', role: 'ADC', category: 'marksman', phase: 'late' },
  { id: 'ashe', name: '艾希', role: 'ADC', category: 'marksman', phase: 'mid' },

  // ---------- 辅助 ----------
  { id: 'thresh', name: '锤石', role: 'SUP', category: 'support', phase: 'mid' },
  { id: 'rakan', name: '洛', role: 'SUP', category: 'support', phase: 'mid' },
  { id: 'nami', name: '娜美', role: 'SUP', category: 'support', phase: 'mid' },
  { id: 'leona', name: '蕾欧娜', role: 'SUP', category: 'tank', phase: 'early' },
  { id: 'nautilus', name: '泰坦', role: 'SUP', category: 'tank', phase: 'mid' },
  { id: 'braum', name: '布隆', role: 'SUP', category: 'tank', phase: 'late' },
  { id: 'janna', name: '风女', role: 'SUP', category: 'support', phase: 'late' },
  { id: 'pyke', name: '派克', role: 'SUP', category: 'assassin', phase: 'early' },
  // ---------- 上单（自动补齐 44 名）----------
  { id: 'ambessa', name: '铁血狼母', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'aurora', name: '双界灵兔', role: 'TOP', category: 'mage', phase: 'late' },
  { id: 'chogath', name: '虚空恐惧', role: 'TOP', category: 'tank', phase: 'late' },
  { id: 'darius', name: '诺克萨斯之手', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'drmundo', name: '祖安狂人', role: 'TOP', category: 'tank', phase: 'late' },
  { id: 'fiora', name: '无双剑姬', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'gangplank', name: '海洋之灾', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'garen', name: '德玛西亚之力', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'gnar', name: '迷失之牙', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'gragas', name: '酒桶', role: 'TOP', category: 'fighter', phase: 'late' },
  { id: 'gwen', name: '灵罗娃娃', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'illaoi', name: '海兽祭司', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'irelia', name: '刀锋舞者', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'jarvaniv', name: '德玛西亚皇子', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'kayle', name: '正义天使', role: 'TOP', category: 'marksman', phase: 'early' },
  { id: 'kled', name: '暴怒骑士', role: 'TOP', category: 'fighter', phase: 'late' },
  { id: 'ksante', name: '纳祖芒荣耀', role: 'TOP', category: 'tank', phase: 'early' },
  { id: 'malphite', name: '熔岩巨兽', role: 'TOP', category: 'tank', phase: 'mid' },
  { id: 'maokai', name: '扭曲树精', role: 'TOP', category: 'tank', phase: 'late' },
  { id: 'monkeyking', name: '齐天大圣', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'mordekaiser', name: '铁铠冥魂', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'nasus', name: '沙漠死神', role: 'TOP', category: 'fighter', phase: 'late' },
  { id: 'olaf', name: '狂战士', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'pantheon', name: '不屈之枪', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'poppy', name: '圣锤之毅', role: 'TOP', category: 'tank', phase: 'mid' },
  { id: 'quinn', name: '德玛西亚之翼', role: 'TOP', category: 'marksman', phase: 'early' },
  { id: 'rengar', name: '傲之追猎者', role: 'TOP', category: 'assassin', phase: 'mid' },
  { id: 'riven', name: '放逐之刃', role: 'TOP', category: 'fighter', phase: 'late' },
  { id: 'rumble', name: '机械公敌', role: 'TOP', category: 'fighter', phase: 'late' },
  { id: 'sett', name: '腕豪', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'shen', name: '暮光之眼', role: 'TOP', category: 'tank', phase: 'mid' },
  { id: 'shyvana', name: '龙血武姬', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'singed', name: '炼金术士', role: 'TOP', category: 'tank', phase: 'early' },
  { id: 'sion', name: '亡灵战神', role: 'TOP', category: 'tank', phase: 'early' },
  { id: 'tahmkench', name: '河流之王', role: 'TOP', category: 'tank', phase: 'mid' },
  { id: 'teemo', name: '迅捷斥候', role: 'TOP', category: 'marksman', phase: 'mid' },
  { id: 'trundle', name: '巨魔之王', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'tryndamere', name: '蛮族之王', role: 'TOP', category: 'fighter', phase: 'late' },
  { id: 'urgot', name: '无畏战车', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'vladimir', name: '猩红收割者', role: 'TOP', category: 'mage', phase: 'mid' },
  { id: 'yasuo', name: '疾风剑豪', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'yorick', name: '牧魂人', role: 'TOP', category: 'fighter', phase: 'mid' },
  { id: 'zaahen', name: '不落魔锋', role: 'TOP', category: 'fighter', phase: 'early' },
  { id: 'zac', name: '生化魔人', role: 'TOP', category: 'tank', phase: 'early' },

  // ---------- 打野（自动补齐 26 名）----------
  { id: 'amumu', name: '殇之木乃伊', role: 'JUG', category: 'tank', phase: 'early' },
  { id: 'belveth', name: '虚空女皇', role: 'JUG', category: 'fighter', phase: 'mid' },
  { id: 'briar', name: '狂厄蔷薇', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'diana', name: '皎月女神', role: 'JUG', category: 'fighter', phase: 'late' },
  { id: 'ekko', name: '时间刺客', role: 'JUG', category: 'assassin', phase: 'early' },
  { id: 'evelynn', name: '痛苦之拥', role: 'JUG', category: 'assassin', phase: 'early' },
  { id: 'fiddlesticks', name: '远古恐惧', role: 'JUG', category: 'mage', phase: 'late' },
  { id: 'hecarim', name: '战争之影', role: 'JUG', category: 'fighter', phase: 'late' },
  { id: 'ivern', name: '翠神', role: 'JUG', category: 'support', phase: 'late' },
  { id: 'karthus', name: '死亡颂唱者', role: 'JUG', category: 'mage', phase: 'early' },
  { id: 'kayn', name: '影流之镰', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'lillia', name: '含羞蓓蕾', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'masteryi', name: '无极剑圣', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'nocturne', name: '永恒梦魇', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'nunu', name: '雪原双子', role: 'JUG', category: 'tank', phase: 'mid' },
  { id: 'rammus', name: '披甲龙龟', role: 'JUG', category: 'tank', phase: 'early' },
  { id: 'reksai', name: '虚空遁地兽', role: 'JUG', category: 'fighter', phase: 'mid' },
  { id: 'shaco', name: '恶魔小丑', role: 'JUG', category: 'assassin', phase: 'mid' },
  { id: 'skarner', name: '上古领主', role: 'JUG', category: 'tank', phase: 'late' },
  { id: 'sylas', name: '解脱者', role: 'JUG', category: 'mage', phase: 'mid' },
  { id: 'talon', name: '刀锋之影', role: 'JUG', category: 'assassin', phase: 'late' },
  { id: 'udyr', name: '兽灵行者', role: 'JUG', category: 'fighter', phase: 'late' },
  { id: 'vi', name: '皮城执法官', role: 'JUG', category: 'fighter', phase: 'mid' },
  { id: 'volibear', name: '不灭狂雷', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'warwick', name: '祖安怒兽', role: 'JUG', category: 'fighter', phase: 'early' },
  { id: 'xinzhao', name: '德邦总管', role: 'JUG', category: 'fighter', phase: 'mid' },

  // ---------- 中单（自动补齐 32 名）----------
  { id: 'akshan', name: '影哨', role: 'MID', category: 'marksman', phase: 'mid' },
  { id: 'anivia', name: '冰晶凤凰', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'annie', name: '黑暗之女', role: 'MID', category: 'mage', phase: 'mid' },
  { id: 'aurelionsol', name: '铸星龙王', role: 'MID', category: 'mage', phase: 'mid' },
  { id: 'cassiopeia', name: '魔蛇之拥', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'corki', name: '英勇投弹手', role: 'MID', category: 'marksman', phase: 'late' },
  { id: 'elise', name: '蜘蛛女皇', role: 'MID', category: 'assassin', phase: 'late' },
  { id: 'fizz', name: '潮汐海灵', role: 'MID', category: 'assassin', phase: 'mid' },
  { id: 'galio', name: '正义巨像', role: 'MID', category: 'tank', phase: 'late' },
  { id: 'heimerdinger', name: '大发明家', role: 'MID', category: 'mage', phase: 'mid' },
  { id: 'hwei', name: '异画师', role: 'MID', category: 'mage', phase: 'early' },
  { id: 'kassadin', name: '虚空行者', role: 'MID', category: 'assassin', phase: 'late' },
  { id: 'katarina', name: '不祥之刃', role: 'MID', category: 'assassin', phase: 'late' },
  { id: 'lissandra', name: '冰霜女巫', role: 'MID', category: 'mage', phase: 'early' },
  { id: 'locke', name: '灰烬驱魔人', role: 'MID', category: 'assassin', phase: 'mid' },
  { id: 'lux', name: '光辉女郎', role: 'MID', category: 'mage', phase: 'early' },
  { id: 'malzahar', name: '虚空先知', role: 'MID', category: 'mage', phase: 'early' },
  { id: 'mel', name: '流光镜影', role: 'MID', category: 'mage', phase: 'early' },
  { id: 'naafiri', name: '百裂冥犬', role: 'MID', category: 'assassin', phase: 'late' },
  { id: 'neeko', name: '万花通灵', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'qiyana', name: '元素女皇', role: 'MID', category: 'assassin', phase: 'early' },
  { id: 'ryze', name: '符文法师', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'smolder', name: '炽炎雏龙', role: 'MID', category: 'marksman', phase: 'late' },
  { id: 'swain', name: '诺克萨斯统领', role: 'MID', category: 'mage', phase: 'early' },
  { id: 'taliyah', name: '岩雀', role: 'MID', category: 'mage', phase: 'early' },
  { id: 'twistedfate', name: '卡牌大师', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'veigar', name: '邪恶小法师', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'vex', name: '愁云使者', role: 'MID', category: 'mage', phase: 'early' },
  { id: 'viktor', name: '奥术先驱', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'xerath', name: '远古巫灵', role: 'MID', category: 'mage', phase: 'early' },
  { id: 'ziggs', name: '爆破鬼才', role: 'MID', category: 'mage', phase: 'late' },
  { id: 'zoe', name: '暮光星灵', role: 'MID', category: 'mage', phase: 'mid' },

  // ---------- 下路（自动补齐 15 名）----------
  { id: 'jhin', name: '戏命师', role: 'ADC', category: 'marksman', phase: 'late' },
  { id: 'kalista', name: '复仇之矛', role: 'ADC', category: 'marksman', phase: 'mid' },
  { id: 'kogmaw', name: '深渊巨口', role: 'ADC', category: 'marksman', phase: 'early' },
  { id: 'lucian', name: '圣枪游侠', role: 'ADC', category: 'marksman', phase: 'mid' },
  { id: 'missfortune', name: '赏金猎人', role: 'ADC', category: 'marksman', phase: 'early' },
  { id: 'nilah', name: '不羁之悦', role: 'ADC', category: 'fighter', phase: 'late' },
  { id: 'samira', name: '沙漠玫瑰', role: 'ADC', category: 'marksman', phase: 'early' },
  { id: 'senna', name: '涤魂圣枪', role: 'ADC', category: 'support', phase: 'late' },
  { id: 'sivir', name: '战争女神', role: 'ADC', category: 'marksman', phase: 'late' },
  { id: 'tristana', name: '麦林炮手', role: 'ADC', category: 'marksman', phase: 'mid' },
  { id: 'twitch', name: '瘟疫之源', role: 'ADC', category: 'marksman', phase: 'late' },
  { id: 'varus', name: '惩戒之箭', role: 'ADC', category: 'marksman', phase: 'early' },
  { id: 'xayah', name: '逆羽', role: 'ADC', category: 'marksman', phase: 'late' },
  { id: 'yunara', name: '不破之誓', role: 'ADC', category: 'marksman', phase: 'late' },
  { id: 'zeri', name: '祖安花火', role: 'ADC', category: 'marksman', phase: 'mid' },

  // ---------- 辅助（自动补齐 18 名）----------
  { id: 'alistar', name: '牛头酋长', role: 'SUP', category: 'tank', phase: 'mid' },
  { id: 'bard', name: '星界游神', role: 'SUP', category: 'support', phase: 'mid' },
  { id: 'blitzcrank', name: '蒸汽机器人', role: 'SUP', category: 'tank', phase: 'early' },
  { id: 'brand', name: '复仇焰魂', role: 'SUP', category: 'mage', phase: 'early' },
  { id: 'karma', name: '天启者', role: 'SUP', category: 'mage', phase: 'late' },
  { id: 'lulu', name: '仙灵女巫', role: 'SUP', category: 'support', phase: 'early' },
  { id: 'milio', name: '明烛', role: 'SUP', category: 'support', phase: 'mid' },
  { id: 'morgana', name: '堕落天使', role: 'SUP', category: 'support', phase: 'mid' },
  { id: 'rell', name: '镕铁少女', role: 'SUP', category: 'tank', phase: 'late' },
  { id: 'renata', name: '炼金男爵', role: 'SUP', category: 'support', phase: 'late' },
  { id: 'seraphine', name: '星籁歌姬', role: 'SUP', category: 'support', phase: 'mid' },
  { id: 'sona', name: '琴瑟仙女', role: 'SUP', category: 'support', phase: 'mid' },
  { id: 'soraka', name: '众星之子', role: 'SUP', category: 'support', phase: 'late' },
  { id: 'taric', name: '瓦洛兰之盾', role: 'SUP', category: 'support', phase: 'early' },
  { id: 'velkoz', name: '虚空之眼', role: 'SUP', category: 'mage', phase: 'early' },
  { id: 'yuumi', name: '魔法猫咪', role: 'SUP', category: 'support', phase: 'late' },
  { id: 'zilean', name: '时光守护者', role: 'SUP', category: 'support', phase: 'early' },
  { id: 'zyra', name: '荆棘之兴', role: 'SUP', category: 'mage', phase: 'mid' },

];

export const HERO_BY_ID = Object.fromEntries(
  HEROES.map((h) => [h.id, { ...h, img: `./assets/heroes/${h.id}.jpg` }])
);

export const HEROES_BY_ROLE = Object.fromEntries(
  ROLES.map((role) => [role, HEROES.filter((h) => h.role === role)])
);

const SYNERGY_SET = new Set(SYNERGIES.map(([a, b]) => [a, b].sort().join('|')));

export function hasSynergy(a, b) {
  return SYNERGY_SET.has([a, b].sort().join('|'));
}

export function counters(a, b) {
  return (COUNTERS[a] || []).includes(b);
}

export const CATEGORY_LIST = ['fighter', 'tank', 'assassin', 'mage', 'marksman', 'support'];