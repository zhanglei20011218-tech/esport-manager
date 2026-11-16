// 国际战队（LCK / LEC / LCS / LCP），用于先锋赛、MSI、EWC 与全球总决赛。
// 同样是真实战队与选手，数据以 2025 赛季公开名单为基准。

import { EXTRA_TEAMS } from './regional-teams-extra.js';

const BASE_INTL_TEAMS = [
  {
    id: 't1',
    name: 'T1',
    short: 'T1',
    cn: 'T1',
    region: 'LCK',
    color: '#e2012d',
    coach: 'kkOma',
    style: 'macro',
    roster: [
      ['Doran', 'TOP', 87, 25, 'KR', ['jax', 'renekton']],
      ['Oner', 'JUG', 88, 23, 'KR', ['leesin', 'jarvan']],
      ['Faker', 'MID', 95, 29, 'KR', ['ahri', 'leblanc']],
      ['Gumayusi', 'ADC', 88, 23, 'KR', ['vayne', 'kaisa']],
      ['Keria', 'SUP', 90, 23, 'KR', ['thresh', 'rakan']],
      ['Smash', 'ADC', 80, 21, 'KR', ['jinx', 'ezreal']]
    ]
  },
  {
    id: 'gen',
    name: 'Gen.G',
    short: 'GEN',
    cn: 'Gen.G',
    region: 'LCK',
    color: '#c8a24a',
    coach: 'Kim',
    style: 'macro',
    roster: [
      ['Kiin', 'TOP', 88, 26, 'KR', ['ornn', 'jax']],
      ['Canyon', 'JUG', 90, 24, 'KR', ['nidalee', 'khazix']],
      ['Chovy', 'MID', 94, 24, 'KR', ['azir', 'syndra']],
      ['Ruler', 'ADC', 90, 27, 'KR', ['vayne', 'aphelios']],
      ['Duro', 'SUP', 84, 22, 'KR', ['rakan', 'nautilus']],
      ['Lehends', 'SUP', 82, 27, 'KR', ['thresh', 'braum']]
    ]
  },
  {
    id: 'hle',
    name: 'Hanwha Life Esports',
    short: 'HLE',
    cn: '韩华',
    region: 'LCK',
    color: '#f37321',
    coach: 'DanDy',
    style: 'aggressive',
    roster: [
      ['Zeus', 'TOP', 93, 21, 'KR', ['jayce', 'aatrox']],
      ['Peanut', 'JUG', 84, 27, 'KR', ['sejuani', 'jarvan']],
      ['Zeka', 'MID', 88, 23, 'KR', ['syndra', 'ahri']],
      ['Viper', 'ADC', 92, 27, 'KR', ['kaisa', 'vayne']],
      ['Delight', 'SUP', 86, 23, 'KR', ['rakan', 'thresh']],
      ['Clid', 'JUG', 78, 27, 'KR', ['leesin', 'viego']]
    ]
  },
  {
    id: 'dk',
    name: 'Dplus KIA',
    short: 'DK',
    cn: 'DK',
    region: 'LCK',
    color: '#00a19c',
    coach: 'Bengi',
    style: 'teamfight',
    roster: [
      ['Siwoo', 'TOP', 82, 21, 'KR', ['jax', 'camille']],
      ['Lucid', 'JUG', 82, 21, 'KR', ['nidalee', 'viego']],
      ['ShowMaker', 'MID', 88, 25, 'KR', ['syndra', 'leblanc']],
      ['Aiming', 'ADC', 85, 25, 'KR', ['aphelios', 'jinx']],
      ['BeryL', 'SUP', 82, 28, 'KR', ['rakan', 'braum']],
      ['Kellin', 'SUP', 78, 26, 'KR', ['nami', 'janna']]
    ]
  },
  {
    id: 'g2',
    name: 'G2 Esports',
    short: 'G2',
    cn: 'G2',
    region: 'LEC',
    color: '#0f172a',
    coach: 'Dylan Falco',
    style: 'aggressive',
    roster: [
      ['BrokenBlade', 'TOP', 82, 25, 'EU', ['jax', 'renekton']],
      ['Yike', 'JUG', 83, 23, 'EU', ['leesin', 'nidalee']],
      ['Caps', 'MID', 86, 25, 'EU', ['ahri', 'leblanc']],
      ['Hans Sama', 'ADC', 84, 25, 'EU', ['draven', 'kaisa']],
      ['Mikyx', 'SUP', 82, 26, 'EU', ['thresh', 'rakan']],
      ['SkewMond', 'JUG', 76, 22, 'EU', ['viego', 'jarvan']]
    ]
  },
  {
    id: 'fnc',
    name: 'Fnatic',
    short: 'FNC',
    cn: 'FNC',
    region: 'LEC',
    color: '#f36c21',
    coach: 'GrabbZ',
    style: 'teamfight',
    roster: [
      ['Oscarinin', 'TOP', 78, 23, 'EU', ['camille', 'jax']],
      ['Razork', 'JUG', 79, 24, 'EU', ['jarvan', 'sejuani']],
      ['Humanoid', 'MID', 80, 25, 'EU', ['syndra', 'azir']],
      ['Upset', 'ADC', 80, 26, 'EU', ['aphelios', 'jinx']],
      ['Trymbi', 'SUP', 76, 24, 'EU', ['rakan', 'nami']],
      ['Noah', 'ADC', 76, 23, 'EU', ['ezreal', 'caitlyn']]
    ]
  },
  {
    id: 'mkoi',
    name: 'Movistar KOI',
    short: 'MKOI',
    cn: 'KOI',
    region: 'LEC',
    color: '#ffcc00',
    coach: 'Fredy122',
    style: 'macro',
    roster: [
      ['Myrwn', 'TOP', 76, 22, 'EU', ['renekton', 'ornn']],
      ['Elyoya', 'JUG', 78, 26, 'EU', ['leesin', 'viego']],
      ['Jojo', 'MID', 78, 23, 'EU', ['ahri', 'syndra']],
      ['Supa', 'ADC', 78, 23, 'EU', ['kaisa', 'ezreal']],
      ['Alvaro', 'SUP', 74, 24, 'EU', ['nautilus', 'rakan']],
      ['Fresskowy', 'MID', 72, 23, 'EU', ['orianna', 'azir']]
    ]
  },
  {
    id: 'tl',
    name: 'Team Liquid',
    short: 'TL',
    cn: 'TL',
    region: 'LCS',
    color: '#004b87',
    coach: 'Reapered',
    style: 'macro',
    roster: [
      ['Impact', 'TOP', 76, 30, 'NA', ['ornn', 'jax']],
      ['UmTi', 'JUG', 77, 25, 'KR', ['sejuani', 'jarvan']],
      ['APA', 'MID', 78, 22, 'NA', ['azir', 'syndra']],
      ['Yeon', 'ADC', 79, 23, 'NA', ['kaisa', 'aphelios']],
      ['CoreJJ', 'SUP', 78, 30, 'KR', ['thresh', 'nautilus']],
      ['Spawn', 'JUG', 72, 22, 'NA', ['viego', 'leesin']]
    ]
  },
  {
    id: 'fly',
    name: 'FlyQuest',
    short: 'FLY',
    cn: 'FLY',
    region: 'LCS',
    color: '#00c853',
    coach: 'Thinkcard',
    style: 'teamfight',
    roster: [
      ['Bwipo', 'TOP', 78, 26, 'EU', ['renekton', 'jax']],
      ['Inspired', 'JUG', 80, 25, 'EU', ['nidalee', 'leesin']],
      ['Quad', 'MID', 79, 23, 'KR', ['azir', 'ahri']],
      ['Massu', 'ADC', 80, 22, 'NA', ['kaisa', 'jinx']],
      ['Busio', 'SUP', 76, 22, 'NA', ['rakan', 'nami']],
      ['Jensen', 'MID', 78, 29, 'EU', ['orianna', 'syndra']]
    ]
  },
  {
    id: '100t',
    name: '100 Thieves',
    short: '100T',
    cn: '100T',
    region: 'LCS',
    color: '#e4002b',
    coach: 'Freeze',
    style: 'aggressive',
    roster: [
      ['Sniper', 'TOP', 74, 22, 'NA', ['jax', 'camille']],
      ['River', 'JUG', 76, 27, 'KR', ['sejuani', 'jarvan']],
      ['Quid', 'MID', 76, 22, 'KR', ['syndra', 'leblanc']],
      ['FBI', 'ADC', 76, 25, 'NA', ['jinx', 'ezreal']],
      ['Eyla', 'SUP', 74, 25, 'NA', ['leona', 'nautilus']],
      ['Ssumday', 'TOP', 74, 28, 'KR', ['ornn', 'mundo']]
    ]
  },
  {
    id: 'kt',
    name: 'KT Rolster',
    short: 'KT',
    cn: 'KT',
    region: 'LCK',
    color: '#000000',
    coach: 'Score',
    style: 'teamfight',
    roster: [
      ['PerfecT', 'TOP', 82, 22, 'KR', ['jax', 'renekton']],
      ['Cuzz', 'JUG', 84, 26, 'KR', ['jarvan', 'sejuani']],
      ['Bdd', 'MID', 87, 26, 'KR', ['azir', 'syndra']],
      ['deokdam', 'ADC', 82, 26, 'KR', ['jinx', 'aphelios']],
      ['Way', 'SUP', 78, 23, 'KR', ['rakan', 'nautilus']],
      ['Peter', 'SUP', 74, 22, 'KR', ['thresh', 'braum']]
    ]
  },
  {
    id: 'cfo',
    name: 'CTBC Flying Oyster',
    short: 'CFO',
    cn: 'CFO',
    region: 'LCP',
    color: '#0f766e',
    coach: 'Achie',
    style: 'macro',
    roster: [
      ['Rest', 'TOP', 74, 25, 'TW', ['jax', 'ornn']],
      ['Karsa', 'JUG', 76, 28, 'TW', ['leesin', 'jarvan']],
      ['HongQ', 'MID', 74, 21, 'TW', ['ahri', 'azir']],
      ['Doggo', 'ADC', 75, 24, 'TW', ['kaisa', 'ezreal']],
      ['Kaiwing', 'SUP', 72, 24, 'TW', ['thresh', 'nautilus']],
      ['Driver', 'TOP', 70, 22, 'TW', ['renekton', 'mundo']]
    ]
  },
  {
    id: 'psg',
    name: 'PSG Talon',
    short: 'PSG',
    cn: 'PSG',
    region: 'LCP',
    color: '#e60012',
    coach: 'WarHorse',
    style: 'macro',
    roster: [
      ['Azhi', 'TOP', 74, 24, 'TW', ['jax', 'renekton']],
      ['JunJia', 'JUG', 76, 24, 'TW', ['leesin', 'jarvan']],
      ['Maple', 'MID', 77, 27, 'TW', ['ahri', 'syndra']],
      ['Betty', 'ADC', 76, 26, 'TW', ['kaisa', 'ezreal']],
      ['Woody', 'SUP', 74, 25, 'TW', ['thresh', 'nautilus']],
      ['Hansha', 'MID', 70, 22, 'TW', ['orianna', 'azir']]
    ]
  },
  {
    id: 'gam',
    name: 'GAM Esports',
    short: 'GAM',
    cn: 'GAM',
    region: 'LCP',
    color: '#ffb300',
    coach: 'Jackiewind',
    style: 'aggressive',
    roster: [
      ['Kiaya', 'TOP', 73, 25, 'VN', ['renekton', 'jax']],
      ['Levi', 'JUG', 75, 28, 'VN', ['leesin', 'nidalee']],
      ['Emo', 'MID', 74, 24, 'VN', ['ahri', 'leblanc']],
      ['Easylove', 'ADC', 74, 22, 'VN', ['kaisa', 'draven']],
      ['Elio', 'SUP', 72, 23, 'VN', ['rakan', 'leona']],
      ['Zin', 'TOP', 70, 22, 'VN', ['ornn', 'mundo']]
    ]
  }
];

export const INTL_TEAMS = [...BASE_INTL_TEAMS, ...EXTRA_TEAMS];

export const INTL_TEAM_IDS = INTL_TEAMS.map((t) => t.id);

export const REGION_TEAMS = INTL_TEAMS.reduce((acc, t) => {
  (acc[t.region] ||= []).push(t.id);
  return acc;
}, {});
