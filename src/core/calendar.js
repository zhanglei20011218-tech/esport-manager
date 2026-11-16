// 时间线从 2025 年 9 月开始：接手战队打 LPL 年度总决赛、世界赛资格赛、S15 全球总决赛与德杯，
// 然后进入 2026 完整赛季。内部用绝对周推进，W1 = 2025-09-01 那一周。

import { REGION_TEAMS } from '../data/international-teams.js';

export const START = { year: 2025, month: 9, day: 1 };
const START_DATE = new Date(2025, 8, 1);

export function weekDate(week) {
  const d = new Date(START_DATE);
  d.setDate(d.getDate() + (week - 1) * 7);
  return d;
}

export function formatDate(d) {
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`;
}

export function weekLabel(week) {
  const d = weekDate(week);
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 · 第 ${week} 周`;
}

export function yearOfWeek(week) {
  return weekDate(week).getFullYear();
}

/* ------------------------------------------------------------------ */
/* 赛事定义                                                             */
/* ------------------------------------------------------------------ */

const LPL_16 = [
  'blg', 'al', 'tes', 'ig', 'jdg', 'wbg', 'lng', 'nip',
  'edg', 'rng', 'fpx', 'omg', 'we', 'lgd', 'tt', 'up'
];

// 2025 世界赛 16 强（S15，中国举办）
const WORLDS_2025 = [
  'blg', 'al', 'tes', 'ig',
  'gen', 'hle', 't1', 'kt',
  'g2', 'fnc', 'mkoi',
  'fly', 'tl', '100t',
  'cfo', 'psg'
];

// 2025 LPL 年度总决赛八强（第三赛段季后赛席位）
const FINALS_2025 = ['blg', 'al', 'tes', 'ig', 'jdg', 'wbg', 'lng', 'nip'];
// 世界赛资格赛四队
const QUALIFIER_2025 = ['jdg', 'wbg', 'lng', 'nip'];

export const EVENTS_2025 = [
  {
    id: 'finals2025',
    name: '2025 LPL 年度总决赛',
    short: '年度总决赛',
    type: 'lpl',
    format: 'ko',
    startWeek: 1,
    endWeek: 3,
    size: 8,
    teams: FINALS_2025,
    prize: { champion: 300, runnerUp: 150, top4: 80, top8: 30 },
    season: 2025
  },
  {
    id: 'qualifier2025',
    name: '2025 世界赛资格赛',
    short: '资格赛',
    type: 'lpl',
    format: 'ko',
    startWeek: 4,
    endWeek: 5,
    size: 4,
    teams: QUALIFIER_2025,
    prize: { champion: 80, runnerUp: 40 },
    season: 2025
  },
  {
    id: 'worlds2025',
    name: '2025 全球总决赛',
    short: '世界赛',
    type: 'intl',
    format: 'swiss+ko',
    startWeek: 6,
    endWeek: 11,
    size: 16,
    teams: WORLDS_2025,
    prize: { champion: 1200, runnerUp: 600, top4: 300, top8: 150 },
    season: 2025
  },
  {
    id: 'demacia2025',
    name: '2025 德玛西亚杯',
    short: '德杯',
    type: 'lpl',
    format: 'ko',
    startWeek: 15,
    endWeek: 15,
    size: 12,
    teams: LPL_16.slice(0, 12),
    prize: { champion: 120, runnerUp: 60, top4: 30 },
    season: 2025
  }
];

function makeYearEvents(year, baseWeek) {
  return [
    {
      id: `split1-${year}`,
      name: `${year} LPL 第一赛段`,
      short: '第一赛段',
      type: 'lpl',
      format: 'rr+playoff',
      startWeek: baseWeek,
      endWeek: baseWeek + 7,
      playoffSize: 8,
      teams: LPL_16,
      prize: { champion: 300, runnerUp: 150, top4: 80, top8: 30 },
      season: year
    },
    {
      id: `firststand-${year}`,
      name: `${year} 全球先锋赛`,
      short: '先锋赛',
      type: 'intl',
      format: 'group+final',
      startWeek: baseWeek + 8,
      endWeek: baseWeek + 8,
      size: 6,
      qualifier: `split1-${year}-champion`,
      teams: [],
      prize: { champion: 400, runnerUp: 200, top4: 100 },
      season: year
    },
    {
      id: `split2-${year}`,
      name: `${year} LPL 第二赛段`,
      short: '第二赛段',
      type: 'lpl',
      format: 'rr+playoff',
      startWeek: baseWeek + 9,
      endWeek: baseWeek + 17,
      playoffSize: 8,
      teams: LPL_16,
      prize: { champion: 350, runnerUp: 180, top4: 90, top8: 35 },
      season: year
    },
    {
      id: `msi-${year}`,
      name: `${year} MSI 季中冠军赛`,
      short: '季中赛',
      type: 'intl',
      format: 'groups+ko',
      startWeek: baseWeek + 18,
      endWeek: baseWeek + 19,
      size: 8,
      qualifier: `split2-${year}-top2`,
      teams: [],
      prize: { champion: 500, runnerUp: 250, top4: 120 },
      season: year
    },
    {
      id: `ewc-${year}`,
      name: `${year} 电竞世界杯`,
      short: '电竞世界杯',
      type: 'intl',
      format: 'ko',
      startWeek: baseWeek + 20,
      endWeek: baseWeek + 20,
      size: 8,
      qualifier: `split2-${year}-top2`,
      teams: [],
      prize: { champion: 450, runnerUp: 220, top4: 110 },
      season: year
    },
    {
      id: `split3-${year}`,
      name: `${year} LPL 第三赛段`,
      short: '第三赛段',
      type: 'lpl',
      format: 'rr+playoff',
      startWeek: baseWeek + 21,
      endWeek: baseWeek + 29,
      playoffSize: 8,
      teams: LPL_16,
      prize: { champion: 400, runnerUp: 200, top4: 100, top8: 40 },
      season: year
    },
    {
      id: `worlds-${year}`,
      name: `${year} 全球总决赛`,
      short: '世界赛',
      type: 'intl',
      format: 'swiss+ko',
      startWeek: baseWeek + 31,
      endWeek: baseWeek + 35,
      size: 16,
      qualifier: `split3-${year}-top4`,
      teams: [],
      prize: { champion: 1200, runnerUp: 600, top4: 300, top8: 150 },
      season: year
    },
    {
      id: `demacia-${year}`,
      name: `${year} 德玛西亚杯`,
      short: '德杯',
      type: 'lpl',
      format: 'ko',
      startWeek: baseWeek + 38,
      endWeek: baseWeek + 38,
      size: 12,
      teams: LPL_16.slice(0, 12),
      prize: { champion: 120, runnerUp: 60, top4: 30 },
      season: year
    }
  ];
}

function makeRegionalEvents(year, baseWeek) {
  const regions = Object.keys(REGION_TEAMS);
  const out = [];
  for (const region of regions) {
    const teams = REGION_TEAMS[region];
    out.push({
      id: `${region.toLowerCase()}-${year}-spring`,
      name: `${year} ${region} 春季赛`,
      short: '春季',
      type: 'regional',
      region,
      format: 'rr+playoff',
      startWeek: baseWeek,
      endWeek: baseWeek + 7,
      playoffSize: 4,
      teams,
      prize: {},
      season: year
    });
    out.push({
      id: `${region.toLowerCase()}-${year}-summer`,
      name: `${year} ${region} 夏季赛`,
      short: '夏季',
      type: 'regional',
      region,
      format: 'rr+playoff',
      startWeek: baseWeek + 21,
      endWeek: baseWeek + 29,
      playoffSize: 4,
      teams,
      prize: {},
      season: year
    });
  }
  return out;
}

function regional2025Events() {
  return Object.keys(REGION_TEAMS).map((region) => ({
    id: `${region.toLowerCase()}-2025-finals`,
    name: `2025 ${region} 年度总决赛`,
    short: '年度',
    type: 'regional',
    region,
    format: 'ko',
    startWeek: 1,
    endWeek: 3,
    size: 4,
    teams: REGION_TEAMS[region].slice(0, 4),
    prize: {},
    season: 2025
  }));
}

// 2026 第一赛段从 W20 开始（约 2026 年 1 月 14 日），之后每年顺延 52 周
export const CALENDAR = [
  ...EVENTS_2025,
  ...regional2025Events(),
  ...makeYearEvents(2026, 20),
  ...makeRegionalEvents(2026, 20),
  ...makeYearEvents(2027, 72),
  ...makeRegionalEvents(2027, 72)
];

export const COMPETITION_BY_ID = Object.fromEntries(CALENDAR.map((c) => [c.id, c]));

export function competitionForWeek(week) {
  return CALENDAR.find((c) => week >= c.startWeek && week <= c.endWeek) || null;
}

export function eventsOfSeason(season) {
  return CALENDAR.filter((c) => c.season === season);
}

export function eventDateLabel(spec) {
  const a = weekDate(spec.startWeek);
  const b = weekDate(spec.endWeek);
  return a.getTime() === b.getTime() ? formatDate(a) : `${formatDate(a)} – ${formatDate(b)}`;
}
