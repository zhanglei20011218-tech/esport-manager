// LCK / LEC / LCS / LCP 的其余战队（2025 赛季名单）。
// 玩家只能选择 LPL 战队，但这些战队和选手会出现在联赛、国际赛与转会市场里。

export const EXTRA_TEAMS = [
  // ---------------- LCK ----------------
  {
    id: 'bro',
    name: 'OKSavingsBank BRION',
    short: 'BRO',
    cn: 'BRO',
    region: 'LCK',
    color: '#0f5132',
    coach: 'Dandy',
    style: 'teamfight',
    roster: [
      ['Morgan', 'TOP', 74, 26, 'KR', ['renekton', 'jax']],
      ['Raptor', 'JUG', 73, 23, 'KR', ['jarvan', 'sejuani']],
      ['Clozer', 'MID', 76, 23, 'KR', ['ahri', 'syndra']],
      ['Hype', 'ADC', 75, 22, 'KR', ['kaisa', 'jinx']],
      ['Pollu', 'SUP', 72, 24, 'KR', ['nautilus', 'rakan']],
      ['Karis', 'MID', 70, 25, 'KR', ['azir', 'orianna']]
    ]
  },
  {
    id: 'drx',
    name: 'DRX',
    short: 'DRX',
    cn: 'DRX',
    region: 'LCK',
    color: '#0057b8',
    coach: 'Ssong',
    style: 'macro',
    roster: [
      ['Rich', 'TOP', 72, 27, 'KR', ['jax', 'camille']],
      ['Sponge', 'JUG', 73, 23, 'KR', ['viego', 'khazix']],
      ['Ucal', 'MID', 76, 25, 'KR', ['azir', 'syndra']],
      ['Teddy', 'ADC', 76, 27, 'KR', ['aphelios', 'jinx']],
      ['Pleata', 'SUP', 70, 24, 'KR', ['thresh', 'braum']],
      ['Juhan', 'JUG', 70, 25, 'KR', ['leesin', 'jarvan']]
    ]
  },
  {
    id: 'fox',
    name: 'BNK FearX',
    short: 'FOX',
    cn: 'FOX',
    region: 'LCK',
    color: '#ff6b00',
    coach: 'Ryu',
    style: 'aggressive',
    roster: [
      ['Clear', 'TOP', 74, 23, 'KR', ['renekton', 'jax']],
      ['Dice', 'JUG', 74, 24, 'KR', ['nidalee', 'khazix']],
      ['VicLa', 'MID', 77, 24, 'KR', ['ahri', 'leblanc']],
      ['Diable', 'ADC', 76, 22, 'KR', ['kaisa', 'ezreal']],
      ['Execute', 'SUP', 73, 23, 'KR', ['rakan', 'nautilus']],
      ['Squid', 'MID', 70, 21, 'KR', ['syndra', 'azir']]
    ]
  },
  {
    id: 'ns',
    name: 'Nongshim RedForce',
    short: 'NS',
    cn: 'NS',
    region: 'LCK',
    color: '#e4002b',
    coach: 'Noblesse',
    style: 'teamfight',
    roster: [
      ['Kingen', 'TOP', 75, 26, 'KR', ['ornn', 'jax']],
      ['GIDEON', 'JUG', 74, 23, 'KR', ['jarvan', 'sejuani']],
      ['Fisher', 'MID', 74, 24, 'KR', ['syndra', 'ahri']],
      ['Jiwoo', 'ADC', 77, 22, 'KR', ['jinx', 'aphelios']],
      ['Lehends', 'SUP', 78, 27, 'KR', ['thresh', 'rakan']],
      ['Calix', 'MID', 70, 21, 'KR', ['azir', 'leblanc']]
    ]
  },
  {
    id: 'kdf',
    name: 'Kwangdong Freecs',
    short: 'KDF',
    cn: 'KDF',
    region: 'LCK',
    color: '#f5c451',
    coach: 'CvMax',
    style: 'aggressive',
    roster: [
      ['DuDu', 'TOP', 73, 26, 'KR', ['jax', 'camille']],
      ['YoungJae', 'JUG', 72, 27, 'KR', ['sejuani', 'jarvan']],
      ['BuLLDoG', 'MID', 76, 24, 'KR', ['azir', 'syndra']],
      ['Taeyoon', 'ADC', 74, 22, 'KR', ['kaisa', 'jinx']],
      ['Andil', 'SUP', 72, 24, 'KR', ['nautilus', 'leona']],
      ['Moham', 'SUP', 70, 22, 'KR', ['rakan', 'nami']]
    ]
  },

  // ---------------- LEC ----------------
  {
    id: 'kc',
    name: 'Karmine Corp',
    short: 'KC',
    cn: 'KC',
    region: 'LEC',
    color: '#0055ff',
    coach: 'Reapered',
    style: 'aggressive',
    roster: [
      ['Canna', 'TOP', 78, 25, 'KR', ['jax', 'renekton']],
      ['Yike', 'JUG', 79, 23, 'EU', ['leesin', 'nidalee']],
      ['Vladi', 'MID', 76, 22, 'EU', ['ahri', 'syndra']],
      ['Caliste', 'ADC', 80, 20, 'EU', ['kaisa', 'ezreal']],
      ['Targamas', 'SUP', 75, 25, 'EU', ['rakan', 'nautilus']],
      ['Saken', 'MID', 72, 26, 'EU', ['orianna', 'azir']]
    ]
  },
  {
    id: 'bds',
    name: 'Team BDS',
    short: 'BDS',
    cn: 'BDS',
    region: 'LEC',
    color: '#1e3a8a',
    coach: 'Striker',
    style: 'teamfight',
    roster: [
      ['Adam', 'TOP', 77, 25, 'EU', ['jax', 'renekton']],
      ['Sheo', 'JUG', 74, 24, 'EU', ['jarvan', 'sejuani']],
      ['nuc', 'MID', 75, 23, 'EU', ['syndra', 'azir']],
      ['Ice', 'ADC', 76, 24, 'EU', ['aphelios', 'jinx']],
      ['Labrov', 'SUP', 73, 25, 'EU', ['thresh', 'braum']],
      ['Agresivoo', 'TOP', 71, 24, 'EU', ['ornn', 'mundo']]
    ]
  },
  {
    id: 'sk',
    name: 'SK Gaming',
    short: 'SK',
    cn: 'SK',
    region: 'LEC',
    color: '#00a650',
    coach: 'Swyzz',
    style: 'macro',
    roster: [
      ['Irrelevant', 'TOP', 72, 24, 'EU', ['ornn', 'jax']],
      ['Skeanz', 'JUG', 72, 24, 'EU', ['sejuani', 'jarvan']],
      ['Larssen', 'MID', 77, 26, 'EU', ['azir', 'syndra']],
      ['Rahel', 'ADC', 74, 23, 'EU', ['kaisa', 'jinx']],
      ['Loopy', 'SUP', 71, 24, 'EU', ['rakan', 'nami']],
      ['Doss', 'SUP', 70, 25, 'EU', ['nautilus', 'leona']]
    ]
  },
  {
    id: 'th',
    name: 'Team Heretics',
    short: 'TH',
    cn: 'TH',
    region: 'LEC',
    color: '#111827',
    coach: 'Peter Dun',
    style: 'aggressive',
    roster: [
      ['Wunder', 'TOP', 75, 26, 'EU', ['jax', 'renekton']],
      ['Jankos', 'JUG', 76, 29, 'EU', ['leesin', 'sejuani']],
      ['Perkz', 'MID', 77, 27, 'EU', ['ahri', 'leblanc']],
      ['Flakked', 'ADC', 75, 24, 'EU', ['kaisa', 'ezreal']],
      ['Kaiser', 'SUP', 74, 26, 'EU', ['thresh', 'rakan']],
      ['Tracyn', 'TOP', 70, 22, 'EU', ['camille', 'ornn']]
    ]
  },
  {
    id: 'vit',
    name: 'Team Vitality',
    short: 'VIT',
    cn: 'VIT',
    region: 'LEC',
    color: '#facc15',
    coach: 'Carter',
    style: 'teamfight',
    roster: [
      ['Naak Nako', 'TOP', 73, 23, 'EU', ['jax', 'aatrox']],
      ['Lyncas', 'JUG', 74, 23, 'EU', ['nidalee', 'viego']],
      ['Czajek', 'MID', 75, 23, 'EU', ['azir', 'syndra']],
      ['Carzzy', 'ADC', 76, 25, 'EU', ['aphelios', 'jinx']],
      ['Hylissang', 'SUP', 75, 29, 'EU', ['thresh', 'rakan']],
      ['Daglas', 'MID', 70, 22, 'EU', ['ahri', 'orianna']]
    ]
  },
  {
    id: 'rge',
    name: 'Rogue',
    short: 'RGE',
    cn: 'RGE',
    region: 'LEC',
    color: '#0b3d2e',
    coach: 'Fredy122',
    style: 'macro',
    roster: [
      ['Finn', 'TOP', 72, 25, 'EU', ['ornn', 'jax']],
      ['Malrang', 'JUG', 73, 26, 'EU', ['sejuani', 'jarvan']],
      ['LIDER', 'MID', 76, 24, 'EU', ['leblanc', 'ahri']],
      ['Comp', 'ADC', 74, 25, 'EU', ['kaisa', 'ezreal']],
      ['Trymbi', 'SUP', 73, 24, 'EU', ['rakan', 'nami']],
      ['Zoelys', 'SUP', 69, 22, 'EU', ['thresh', 'leona']]
    ]
  },
  {
    id: 'gx',
    name: 'GiantX',
    short: 'GX',
    cn: 'GX',
    region: 'LEC',
    color: '#7c3aed',
    coach: 'Kaas',
    style: 'aggressive',
    roster: [
      ['Lot', 'TOP', 72, 23, 'EU', ['renekton', 'jax']],
      ['ISMA', 'JUG', 73, 24, 'EU', ['khazix', 'leesin']],
      ['Jackies', 'MID', 75, 22, 'EU', ['ahri', 'syndra']],
      ['Patrik', 'ADC', 75, 25, 'EU', ['jinx', 'kaisa']],
      ['IgNar', 'SUP', 72, 27, 'EU', ['thresh', 'nautilus']],
      ['Odoamne', 'TOP', 70, 28, 'EU', ['ornn', 'mundo']]
    ]
  },

  // ---------------- LCS ----------------
  {
    id: 'c9',
    name: 'Cloud9',
    short: 'C9',
    cn: 'C9',
    region: 'LCS',
    color: '#00aeef',
    coach: 'Repeared',
    style: 'macro',
    roster: [
      ['Thanatos', 'TOP', 73, 23, 'KR', ['jax', 'renekton']],
      ['Blaber', 'JUG', 76, 27, 'NA', ['leesin', 'jarvan']],
      ['Loki', 'MID', 74, 24, 'EU', ['azir', 'syndra']],
      ['Zven', 'ADC', 75, 28, 'EU', ['aphelios', 'jinx']],
      ['Vulcan', 'SUP', 75, 26, 'NA', ['thresh', 'rakan']],
      ['Fudge', 'TOP', 72, 25, 'NA', ['ornn', 'jax']]
    ]
  },
  {
    id: 'dig',
    name: 'Dignitas',
    short: 'DIG',
    cn: 'DIG',
    region: 'LCS',
    color: '#f5c451',
    coach: 'Inero',
    style: 'teamfight',
    roster: [
      ['Srtty', 'TOP', 69, 23, 'NA', ['jax', 'mundo']],
      ['eXyu', 'JUG', 70, 22, 'NA', ['viego', 'jarvan']],
      ['Abbedagge', 'MID', 73, 26, 'EU', ['syndra', 'orianna']],
      ['Tomo', 'ADC', 72, 22, 'NA', ['kaisa', 'ezreal']],
      ['Isles', 'SUP', 69, 22, 'NA', ['nautilus', 'leona']],
      ['Damonte', 'MID', 69, 25, 'NA', ['ahri', 'leblanc']]
    ]
  },
  {
    id: 'imt',
    name: 'Immortals',
    short: 'IMT',
    cn: 'IMT',
    region: 'LCS',
    color: '#00a651',
    coach: 'Chovy',
    style: 'aggressive',
    roster: [
      ['Castle', 'TOP', 68, 23, 'NA', ['renekton', 'jax']],
      ['Armao', 'JUG', 69, 26, 'NA', ['sejuani', 'jarvan']],
      ['Mask', 'MID', 70, 24, 'NA', ['ahri', 'syndra']],
      ['Tactical', 'ADC', 72, 24, 'NA', ['jinx', 'kaisa']],
      ['Olleh', 'SUP', 70, 29, 'KR', ['thresh', 'braum']],
      ['Destiny', 'SUP', 68, 25, 'NA', ['rakan', 'nami']]
    ]
  },
  {
    id: 'sr',
    name: 'Shopify Rebellion',
    short: 'SR',
    cn: 'SR',
    region: 'LCS',
    color: '#5ac53a',
    coach: 'Raz',
    style: 'teamfight',
    roster: [
      ['FakeGod', 'TOP', 70, 26, 'NA', ['ornn', 'jax']],
      ['Contractz', 'JUG', 72, 27, 'NA', ['nidalee', 'leesin']],
      ['Palafox', 'MID', 72, 25, 'NA', ['azir', 'syndra']],
      ['Bvoy', 'ADC', 71, 24, 'NA', ['kaisa', 'ezreal']],
      ['Zeyzal', 'SUP', 70, 26, 'NA', ['thresh', 'nautilus']],
      ['Bugi', 'MID', 68, 22, 'NA', ['ahri', 'leblanc']]
    ]
  },
  {
    id: 'lyon',
    name: 'Lyon',
    short: 'LYON',
    cn: 'LYON',
    region: 'LCS',
    color: '#dc2626',
    coach: 'Art',
    style: 'macro',
    roster: [
      ['Robo', 'TOP', 68, 25, 'NA', ['jax', 'ornn']],
      ['Dardoch', 'JUG', 68, 27, 'NA', ['leesin', 'sejuani']],
      ['Insanity', 'MID', 70, 24, 'NA', ['syndra', 'ahri']],
      ['Arrow', 'ADC', 70, 24, 'NA', ['kaisa', 'jinx']],
      ['Huhi', 'SUP', 69, 29, 'KR', ['thresh', 'rakan']],
      ['Sniper', 'TOP', 67, 21, 'NA', ['renekton', 'mundo']]
    ]
  },

  // ---------------- LCP ----------------
  {
    id: 'shg',
    name: 'SoftBank HAWKS gaming',
    short: 'SHG',
    cn: 'SHG',
    region: 'LCP',
    color: '#f5c451',
    coach: 'Corgi',
    style: 'macro',
    roster: [
      ['Evi', 'TOP', 72, 29, 'JP', ['jax', 'renekton']],
      ['Forest', 'JUG', 73, 24, 'JP', ['sejuani', 'jarvan']],
      ['DasheR', 'MID', 72, 23, 'JP', ['azir', 'syndra']],
      ['Marble', 'ADC', 73, 22, 'JP', ['kaisa', 'jinx']],
      ['Vsta', 'SUP', 71, 25, 'JP', ['rakan', 'thresh']],
      ['Yutori', 'MID', 68, 21, 'JP', ['ahri', 'orianna']]
    ]
  },
  {
    id: 'dfm',
    name: 'DetonatioN FocusMe',
    short: 'DFM',
    cn: 'DFM',
    region: 'LCP',
    color: '#e60012',
    coach: 'Kazu',
    style: 'aggressive',
    roster: [
      ['RayFarky', 'TOP', 70, 25, 'JP', ['renekton', 'jax']],
      ['Steal', 'JUG', 72, 27, 'JP', ['leesin', 'viego']],
      ['Aria', 'MID', 73, 25, 'JP', ['leblanc', 'ahri']],
      ['Yutapon', 'ADC', 72, 27, 'JP', ['kaisa', 'ezreal']],
      ['Harp', 'SUP', 70, 24, 'JP', ['nautilus', 'leona']],
      ['Ceros', 'MID', 67, 29, 'JP', ['orianna', 'syndra']]
    ]
  },
  {
    id: 'mvke',
    name: 'MGN Vikings',
    short: 'MVKE',
    cn: 'MVKE',
    region: 'LCP',
    color: '#f97316',
    coach: 'Violet',
    style: 'teamfight',
    roster: [
      ['Kati', 'TOP', 70, 24, 'VN', ['jax', 'renekton']],
      ['DNK', 'JUG', 71, 23, 'VN', ['jarvan', 'sejuani']],
      ['Celebrity', 'MID', 71, 22, 'VN', ['azir', 'syndra']],
      ['Shogun', 'ADC', 72, 23, 'VN', ['kaisa', 'jinx']],
      ['Bie', 'SUP', 69, 23, 'VN', ['rakan', 'nautilus']],
      ['Killer', 'TOP', 68, 22, 'VN', ['ornn', 'mundo']]
    ]
  },
  {
    id: 'tsw',
    name: 'Team Secret Whales',
    short: 'TSW',
    cn: 'TSW',
    region: 'LCP',
    color: '#22d3ee',
    coach: 'Naul',
    style: 'aggressive',
    roster: [
      ['Hiro02', 'TOP', 70, 22, 'VN', ['renekton', 'jax']],
      ['Hizto', 'JUG', 71, 23, 'VN', ['nidalee', 'leesin']],
      ['Dire', 'MID', 71, 24, 'VN', ['ahri', 'leblanc']],
      ['Eddie', 'ADC', 72, 23, 'VN', ['kaisa', 'ezreal']],
      ['Taki', 'SUP', 69, 22, 'VN', ['thresh', 'rakan']],
      ['Pun', 'MID', 67, 21, 'VN', ['syndra', 'orianna']]
    ]
  },
  {
    id: 'chf',
    name: 'Chiefs Esports Club',
    short: 'CHF',
    cn: 'CHF',
    region: 'LCP',
    color: '#ef4444',
    coach: 'Chazz',
    style: 'teamfight',
    roster: [
      ['Zorenous', 'TOP', 68, 24, 'AU', ['ornn', 'jax']],
      ['Whynot', 'JUG', 69, 23, 'AU', ['sejuani', 'jarvan']],
      ['Fate', 'MID', 70, 24, 'AU', ['azir', 'syndra']],
      ['Puma', 'ADC', 70, 23, 'AU', ['jinx', 'kaisa']],
      ['Skywalk', 'SUP', 68, 22, 'AU', ['nautilus', 'braum']],
      ['Raes', 'ADC', 67, 21, 'AU', ['ezreal', 'ashe']]
    ]
  }
];
