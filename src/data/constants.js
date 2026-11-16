// 所有可调参数集中在这里，方便按设定集第七章“调参速查表”逐个试。

export const SEASON_LENGTH = 15;         // LPL 单循环 15 轮（16 队）
export const TEAM_COUNT = 16;
export const PLAYOFF_TEAMS = 8;

export const MATCH = {
  sigma: 6.0,                 // 单局表现值标准差
  sigmaStableHigh: 5.0,       // 全队稳定性平均 >= 80
  sigmaStableLow: 7.5,        // 全队稳定性平均 <= 60
  bo5SigmaStep: 0.5,          // BO5 每多打一局标准差 +0.5
  regularBo: 3,               // 常规赛 BO3
  playoffBo: 5                // 季后赛 BO5
};

/** 位置权重：操作 / 意识 / 英雄池 / 稳定性 */
export const ROLE_WEIGHTS = {
  TOP: { mechanics: 0.40, gameSense: 0.30, championPool: 0.20, consistency: 0.10 },
  JUG: { mechanics: 0.30, gameSense: 0.40, championPool: 0.20, consistency: 0.10 },
  MID: { mechanics: 0.40, gameSense: 0.30, championPool: 0.20, consistency: 0.10 },
  ADC: { mechanics: 0.45, gameSense: 0.25, championPool: 0.20, consistency: 0.10 },
  SUP: { mechanics: 0.20, gameSense: 0.45, championPool: 0.20, consistency: 0.15 }
};

/** 年龄战力修正 */
export const AGE_POWER_MOD = [
  { max: 19, mod: 1.02 },
  { max: 24, mod: 1.00 },
  { max: 27, mod: 0.97 },
  { max: 30, mod: 0.93 },
  { max: 99, mod: 0.88 }
];

/** 年龄身价系数 */
export function ageValueCoef(age) {
  if (age <= 19) return 1.5;
  if (age <= 22) return 1.3;
  if (age <= 25) return 1.0;
  if (age <= 27) return 0.85;
  if (age <= 29) return 0.7;
  return 0.5;
}

export const ROLE_VALUE_COEF = { TOP: 1.0, JUG: 1.1, MID: 1.2, ADC: 1.15, SUP: 0.9 };

export const GROWTH_TAGS = {
  ordinary: { cn: '平庸', rate: 1, valueCoef: 0.9 },
  normal: { cn: '一般', rate: 2, valueCoef: 1.0 },
  genius: { cn: '天才', rate: 3, valueCoef: 1.2 }
};

/** 能力身价系数（每点） */
export function abilityValueCoef(ability) {
  if (ability >= 80) return 1200;
  if (ability >= 70) return 800;
  if (ability >= 60) return 500;
  return 300;
}

/** 身价单位换算：公式输出 × 该系数 = 游戏内金额（元） */
export const VALUE_UNIT = 30;

export const ECONOMY = {
  leagueShare: 150 * 10000,      // 联赛分成 150 万
  sponsorBase: 100 * 10000,      // 赞助基础 100 万
  sponsorWinRateCoef: 2.0,       // 赞助 = 基础 + 胜率 × 2.0 × 100 万
  prizeChampion: 500 * 10000,
  prizeRunnerUp: 250 * 10000,
  prizeTop4: 120 * 10000,
  prizeTop6: 40 * 10000,
  operatingCost: 120 * 10000,    // 基础运营 120 万
  facilityUpkeepPerLevel: 10 * 10000,
  salaryCap: 250 * 10000,        // 全队薪资帽
  singleSalaryCapRatio: 0.30,    // 单人不得超过薪资帽 30%
  startCash: 600 * 10000
};

export const FACILITIES = {
  training: {
    name: '训练室',
    desc: '训练效率 +10% / 级',
    icon: '🏋️',
    cost: (lv) => 50 * 10000 * lv
  },
  analysis: {
    name: '分析室',
    desc: 'BP 时逐级解锁对手英雄标签：1 级强势 / 3 级克制 / 5 级联动',
    icon: '📊',
    cost: (lv) => 40 * 10000 * lv
  },
  dorm: {
    name: '宿舍',
    desc: '满意度 +5 / 级，续约时忠诚判定 +5 / 级',
    icon: '🛏️',
    cost: (lv) => 30 * 10000 * lv
  }
};

export const MAX_FACILITY_LEVEL = 5;

/** BP 修正 */
export const BP = {
  strong: 0.03,
  counter: 0.01,
  synergy: 0.01,
  signature: 0.02,
  bannedSignature: -0.02,
  counterMaxStacks: 2,
  synergyMaxStacks: 2,
  cap: 0.10
};

/** 羁绊 */
export const BOND = {
  sameNationality3: 0.01,
  sameNationality5: 0.02,
  duo: 0.02,
  subSameNationality: 0.01,
  cap: 0.08
};

export const TRAINING = {
  focuses: {
    mechanics: { name: '个人技术', stat: 'mechanics', desc: '操作 +1~2' },
    gameSense: { name: '战术复盘', stat: 'gameSense', desc: '意识 +1~2' },
    championPool: { name: '英雄池拓展', stat: 'championPool', desc: '英雄池 +1~2，可能掌握新英雄' },
    consistency: { name: '心态管理', stat: 'consistency', desc: '稳定性 +1~2' },
    team: { name: '团队配合', stat: null, desc: '满意度 +3，羁绊小幅提升' }
  },
  lowSatisfactionThreshold: 30
};

export const SCOUT = {
  perSeason: 2,
  ageMin: 17,
  ageMax: 19,
  abilityMin: 55,
  abilityMax: 70,
  potentialMin: 75,
  potentialMax: 95,
  highPotentialChance: 0.20,
  salaryRatio: 0.05
};

export const RETIRE = {
  ageSoftCap: 33,
  abilityThreshold: 60,
  softChance: 0.25,
  hardAge: 35,
  hardChance: 0.6
};

export const TRANSFER = {
  marketSizeMin: 8,
  marketSizeMax: 12,
  salaryNegotiation: 0.15,
  contractYearsMin: 2,
  contractYearsMax: 3
};
