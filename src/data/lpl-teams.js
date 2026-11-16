// LPL 16 支战队与 2025 赛季阵容。
// 选手数据以 2025 赛季公开名单为基准；如需跟随最新转会，直接改这里的 roster 即可。
// 数组格式：[ID, 位置, 基础能力, 年龄, 国籍, 招牌英雄（可选）]

export const LPL_TEAMS = [
  {
    id: 'blg',
    name: 'Bilibili Gaming',
    short: 'BLG',
    cn: '哔哩哔哩',
    region: 'LPL',
    color: '#00a1e0',
    coach: 'Maokai',
    style: 'macro',
    roster: [
      ['Bin', 'TOP', 91, 23, 'CN', ['aatrox', 'camille']],
      ['Wei', 'JUG', 86, 24, 'CN', ['jarvan', 'sejuani']],
      ['knight', 'MID', 92, 26, 'CN', ['syndra', 'ahri']],
      ['Elk', 'ADC', 88, 22, 'CN', ['kaisa', 'jinx']],
      ['ON', 'SUP', 86, 24, 'CN', ['rakan', 'nautilus']],
      ['Xun', 'JUG', 84, 23, 'CN', ['khazix', 'nidalee']]
    ]
  },
  {
    id: 'jdg',
    name: 'JD Gaming',
    short: 'JDG',
    cn: '京东',
    region: 'LPL',
    color: '#c8102e',
    coach: 'cvMax',
    style: 'aggressive',
    roster: [
      ['Ale', 'TOP', 84, 24, 'CN', ['jax', 'camille']],
      ['Xun', 'JUG', 88, 23, 'CN', ['khazix', 'viego']],
      ['Scout', 'MID', 88, 27, 'KR', ['leblanc', 'azir']],
      ['Peyz', 'ADC', 90, 20, 'KR', ['vayne', 'kaisa']],
      ['Missing', 'SUP', 85, 27, 'CN', ['thresh', 'braum']],
      ['Yagao', 'MID', 80, 28, 'CN', ['orianna', 'syndra']]
    ]
  },
  {
    id: 'tes',
    name: 'Top Esports',
    short: 'TES',
    cn: '滔搏',
    region: 'LPL',
    color: '#f26522',
    coach: 'Homme',
    style: 'teamfight',
    roster: [
      ['369', 'TOP', 86, 25, 'CN', ['renekton', 'ornn']],
      ['Kanavi', 'JUG', 90, 25, 'KR', ['leesin', 'nidalee']],
      ['Creme', 'MID', 84, 22, 'CN', ['azir', 'ahri']],
      ['JackeyLove', 'ADC', 88, 25, 'CN', ['draven', 'kaisa']],
      ['Crisp', 'SUP', 86, 27, 'CN', ['rakan', 'thresh']],
      ['Hang', 'SUP', 80, 25, 'CN', ['nami', 'janna']]
    ]
  },
  {
    id: 'wbg',
    name: 'Weibo Gaming',
    short: 'WBG',
    cn: '微博',
    region: 'LPL',
    color: '#e60012',
    coach: 'Daeny',
    style: 'macro',
    roster: [
      ['Breathe', 'TOP', 84, 25, 'CN', ['jax', 'aatrox']],
      ['Tian', 'JUG', 86, 25, 'CN', ['leesin', 'jarvan']],
      ['Xiaohu', 'MID', 86, 27, 'CN', ['ahri', 'syndra']],
      ['Light', 'ADC', 86, 24, 'CN', ['aphelios', 'jinx']],
      ['Erha', 'SUP', 80, 24, 'CN', ['nami', 'leona']],
      ['Crisp', 'SUP', 84, 27, 'CN', ['thresh', 'rakan']]
    ]
  },
  {
    id: 'ig',
    name: 'Invictus Gaming',
    short: 'IG',
    cn: 'Invictus',
    region: 'LPL',
    color: '#00539b',
    coach: 'KenZhu',
    style: 'aggressive',
    roster: [
      ['TheShy', 'TOP', 88, 26, 'KR', ['aatrox', 'jayce']],
      ['Jiejie', 'JUG', 84, 25, 'CN', ['jarvan', 'sejuani']],
      ['Rookie', 'MID', 89, 29, 'KR', ['leblanc', 'ahri']],
      ['GALA', 'ADC', 88, 24, 'CN', ['vayne', 'kaisa']],
      ['Meiko', 'SUP', 87, 27, 'CN', ['thresh', 'rakan']],
      ['Ahn', 'ADC', 78, 23, 'CN', ['ezreal', 'caitlyn']]
    ]
  },
  {
    id: 'al',
    name: 'Anyone\'s Legend',
    short: 'AL',
    cn: 'AL',
    region: 'LPL',
    color: '#00b3a4',
    coach: 'Tabe',
    style: 'macro',
    roster: [
      ['Flandre', 'TOP', 85, 27, 'CN', ['ornn', 'jax']],
      ['Tarzan', 'JUG', 89, 26, 'KR', ['leesin', 'nidalee']],
      ['Shanks', 'MID', 84, 24, 'CN', ['ahri', 'azir']],
      ['Hope', 'ADC', 85, 25, 'CN', ['jinx', 'aphelios']],
      ['Kael', 'SUP', 82, 23, 'KR', ['rakan', 'nautilus']],
      ['Croco', 'JUG', 76, 25, 'KR', ['viego', 'khazix']]
    ]
  },
  {
    id: 'lng',
    name: 'LNG Esports',
    short: 'LNG',
    cn: '李宁',
    region: 'LPL',
    color: '#0a3d62',
    coach: 'Poppy',
    style: 'macro',
    roster: [
      ['Zika', 'TOP', 80, 22, 'CN', ['renekton', 'camille']],
      ['Weiwei', 'JUG', 82, 25, 'CN', ['jarvan', 'sejuani']],
      ['Haichao', 'MID', 80, 23, 'CN', ['syndra', 'azir']],
      ['Photic', 'ADC', 82, 24, 'CN', ['ezreal', 'kaisa']],
      ['Zhuo', 'SUP', 78, 24, 'CN', ['thresh', 'nautilus']],
      ['LP', 'ADC', 76, 22, 'CN', ['caitlyn', 'ashe']]
    ]
  },
  {
    id: 'edg',
    name: 'EDward Gaming',
    short: 'EDG',
    cn: 'EDG',
    region: 'LPL',
    color: '#f5f5f5',
    coach: 'Moojin',
    style: 'teamfight',
    roster: [
      ['Zdz', 'TOP', 76, 24, 'CN', ['mundo', 'ornn']],
      ['Monki', 'JUG', 76, 22, 'CN', ['viego', 'jarvan']],
      ['Angel', 'MID', 78, 26, 'CN', ['orianna', 'syndra']],
      ['Leave', 'ADC', 78, 23, 'CN', ['kaisa', 'ezreal']],
      ['Wink', 'SUP', 74, 25, 'CN', ['leona', 'nautilus']],
      ['Fisher', 'MID', 74, 22, 'CN', ['ahri', 'leblanc']]
    ]
  },
  {
    id: 'rng',
    name: 'Royal Never Give Up',
    short: 'RNG',
    cn: '皇族',
    region: 'LPL',
    color: '#d4a017',
    coach: 'Wuxin',
    style: 'teamfight',
    roster: [
      ['Xiaoxu', 'TOP', 74, 22, 'CN', ['jax', 'renekton']],
      ['Milkyway', 'JUG', 75, 21, 'CN', ['khazix', 'viego']],
      ['Tangyuan', 'MID', 74, 22, 'CN', ['ahri', 'syndra']],
      ['Assum', 'ADC', 76, 23, 'CN', ['jinx', 'aphelios']],
      ['Lele', 'SUP', 72, 24, 'CN', ['thresh', 'leona']],
      ['Xiaobai', 'ADC', 72, 21, 'CN', ['ezreal', 'ashe']]
    ]
  },
  {
    id: 'fpx',
    name: 'FunPlus Phoenix',
    short: 'FPX',
    cn: '趣加',
    region: 'LPL',
    color: '#c0392b',
    coach: 'Punish',
    style: 'aggressive',
    roster: [
      ['sheer', 'TOP', 72, 21, 'CN', ['camille', 'jax']],
      ['sorrow', 'JUG', 73, 22, 'CN', ['leesin', 'viego']],
      ['Care', 'MID', 73, 23, 'CN', ['leblanc', 'ahri']],
      ['Lwx', 'ADC', 75, 27, 'CN', ['vayne', 'kaisa']],
      ['QiuQiu', 'SUP', 71, 26, 'CN', ['thresh', 'nami']],
      ['Bat', 'JUG', 70, 21, 'CN', ['sejuani', 'jarvan']]
    ]
  },
  {
    id: 'omg',
    name: 'Oh My God',
    short: 'OMG',
    cn: 'OMG',
    region: 'LPL',
    color: '#00a0e9',
    coach: 'Xiaopeng',
    style: 'aggressive',
    roster: [
      ['Hery', 'TOP', 73, 24, 'CN', ['renekton', 'jax']],
      ['Heng', 'JUG', 74, 23, 'CN', ['leesin', 'khazix']],
      ['Linfeng', 'MID', 73, 24, 'CN', ['syndra', 'leblanc']],
      ['Starry', 'ADC', 75, 22, 'CN', ['kaisa', 'ezreal']],
      ['Cold', 'SUP', 72, 25, 'CN', ['nautilus', 'leona']],
      ['Jerry', 'SUP', 70, 22, 'CN', ['braum', 'nami']]
    ]
  },
  {
    id: 'we',
    name: 'Team WE',
    short: 'WE',
    cn: 'WE',
    region: 'LPL',
    color: '#e2231a',
    coach: 'Zoom',
    style: 'teamfight',
    roster: [
      ['Wayward', 'TOP', 75, 24, 'CN', ['jax', 'ornn']],
      ['Yanxiang', 'JUG', 74, 22, 'CN', ['jarvan', 'sejuani']],
      ['Shiye', 'MID', 76, 23, 'CN', ['azir', 'syndra']],
      ['Taeyoon', 'ADC', 76, 22, 'KR', ['jinx', 'kaisa']],
      ['Vampire', 'SUP', 73, 23, 'CN', ['thresh', 'rakan']],
      ['Kenshi', 'TOP', 70, 21, 'CN', ['renekton', 'mundo']]
    ]
  },
  {
    id: 'lgd',
    name: 'LGD Gaming',
    short: 'LGD',
    cn: 'LGD',
    region: 'LPL',
    color: '#e4002b',
    coach: '1874',
    style: 'aggressive',
    roster: [
      ['Burdol', 'TOP', 70, 23, 'KR', ['jax', 'camille']],
      ['Meteor', 'JUG', 72, 24, 'CN', ['nidalee', 'khazix']],
      ['xqw', 'MID', 72, 22, 'CN', ['leblanc', 'ahri']],
      ['Shaoye', 'ADC', 73, 23, 'CN', ['ezreal', 'caitlyn']],
      ['Jinjiao', 'SUP', 70, 28, 'CN', ['leona', 'braum']],
      ['Yuuki', 'MID', 70, 22, 'CN', ['syndra', 'orianna']]
    ]
  },
  {
    id: 'nip',
    name: 'Ninjas in Pyjamas',
    short: 'NIP',
    cn: 'NIP',
    region: 'LPL',
    color: '#1a1a1a',
    coach: 'Chris',
    style: 'macro',
    roster: [
      ['Shanji', 'TOP', 78, 24, 'CN', ['ornn', 'jax']],
      ['Aki', 'JUG', 78, 24, 'CN', ['leesin', 'jarvan']],
      ['Doinb', 'MID', 80, 29, 'KR', ['ahri', 'syndra']],
      ['Leave', 'ADC', 79, 23, 'CN', ['kaisa', 'ezreal']],
      ['ppgod', 'SUP', 75, 25, 'CN', ['rakan', 'nautilus']],
      ['Photic', 'ADC', 80, 24, 'CN', ['jinx', 'vayne']]
    ]
  },
  {
    id: 'tt',
    name: 'Thunder Talk Gaming',
    short: 'TT',
    cn: 'TT',
    region: 'LPL',
    color: '#00c2ff',
    coach: 'Chenz',
    style: 'aggressive',
    roster: [
      ['Hoya', 'TOP', 72, 24, 'KR', ['renekton', 'jax']],
      ['Beichuan', 'JUG', 73, 22, 'CN', ['nidalee', 'leesin']],
      ['ucal', 'MID', 74, 25, 'KR', ['azir', 'syndra']],
      ['1xn', 'ADC', 74, 21, 'CN', ['kaisa', 'draven']],
      ['Feather', 'SUP', 71, 23, 'CN', ['rakan', 'thresh']],
      ['Xiaohuangren', 'JUG', 70, 21, 'CN', ['viego', 'khazix']]
    ]
  },
  {
    id: 'up',
    name: 'Ultra Prime',
    short: 'UP',
    cn: 'UP',
    region: 'LPL',
    color: '#7b2ff7',
    coach: 'Martin',
    style: 'teamfight',
    roster: [
      ['Aliez', 'TOP', 68, 22, 'CN', ['mundo', 'ornn']],
      ['H4cker', 'JUG', 69, 26, 'CN', ['jarvan', 'sejuani']],
      ['Saber', 'MID', 68, 23, 'CN', ['syndra', 'ahri']],
      ['Xiaoyueji', 'ADC', 70, 22, 'CN', ['jinx', 'ashe']],
      ['miaojing', 'SUP', 67, 24, 'CN', ['leona', 'braum']],
      ['Ning', 'JUG', 66, 27, 'CN', ['leesin', 'jarvan']]
    ]
  }
];
