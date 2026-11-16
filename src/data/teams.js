import { HEROES_BY_ROLE } from './heroes.js';
import { createRng, hashString } from '../core/rng.js';
import { playerValue, salaryFromValue, growthTagFor, currentAbility, clamp } from '../core/player.js';
import { SCOUT } from './constants.js';
import { LPL_TEAMS } from './lpl-teams.js';
import { INTL_TEAMS } from './international-teams.js';

const ROLE_BIAS = {
  TOP: { m: 3, g: -1 },
  JUG: { m: 0, g: 3 },
  MID: { m: 2, g: 1 },
  ADC: { m: 4, g: -1 },
  SUP: { m: -3, g: 4 }
};

const SOURCE_TEAMS = [...LPL_TEAMS, ...INTL_TEAMS];

function toTeamObject(t) {
  const bases = t.roster.map((r) => r[2]);
  return {
    id: t.id,
    name: t.name,
    short: t.short,
    cn: t.cn || t.short,
    region: t.region,
    color: t.color,
    coach: t.coach,
    style: t.style,
    tier: [Math.min(...bases), Math.max(...bases)]
  };
}

/** 16 支 LPL 战队（玩家可选） */
export const TEAMS = LPL_TEAMS.map(toTeamObject);
/** 全部战队（含国际队） */
export const ALL_TEAMS = SOURCE_TEAMS.map(toTeamObject);
export const TEAM_BY_ID = Object.fromEntries(ALL_TEAMS.map((t) => [t.id, t]));
export const LPL_TEAM_IDS = LPL_TEAMS.map((t) => t.id);

export { LPL_TEAMS, INTL_TEAMS };

function makePlayer(teamSpec, spec, index, rng) {
  const [name, role, base, age, nationality, champs] = spec;
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '');
  const id = `${teamSpec.id}-${slug}`;
  const bias = ROLE_BIAS[role];

  const mechanics = clamp(base + bias.m + rng.int(-2, 2), 40, 99);
  const gameSense = clamp(base + bias.g + rng.int(-2, 2), 40, 99);
  const championPool = clamp(base + rng.int(-4, 3), 40, 99);
  const consistency = clamp(base + rng.int(-6, 3), 30, 99);

  const heroPool = HEROES_BY_ROLE[role].map((h) => h.id);
  const signature = champs && champs.length ? champs.slice(0, 3) : rng.shuffle(heroPool).slice(0, 2);

  const player = {
    id,
    name,
    teamId: teamSpec.id,
    role,
    age,
    nationality,
    mechanics,
    gameSense,
    championPool,
    consistency,
    potential: 0,
    peakAge: rng.int(21, 24),
    peakDuration: rng.int(2, 4),
    growthTag: 'normal',
    loyalty: rng.int(65, 92),
    satisfaction: rng.int(72, 92),
    champions: signature,
    isStarter: index < 5,
    contractYears: rng.int(2, 3),
    trainingFocus: null,
    form: 0,
    season: { games: 0, wins: 0, mvps: 0, ratingSum: 0, kills: 0, deaths: 0, assists: 0 },
    career: { seasons: 0, titles: 0, kills: 0, deaths: 0, assists: 0, games: 0 },
    scoutNote: null,
    value: 0,
    salary: 0
  };

  // 校准 OVR，让生成值贴近设定值
  const ovr = currentAbility(player);
  if (Math.abs(ovr - base) > 1.5) {
    const scale = base / ovr;
    player.mechanics = clamp(player.mechanics * scale, 1, 100);
    player.gameSense = clamp(player.gameSense * scale, 1, 100);
    player.championPool = clamp(player.championPool * scale, 1, 100);
    player.consistency = clamp(player.consistency * scale, 1, 100);
  }

  const room = Math.max(0, 27 - age);
  player.potential = clamp(Math.round(base + room * 1.1 + rng.int(-2, 3)), base, 97);
  player.growthTag = growthTagFor(player.potential, player.age);
  player.value = playerValue(player);
  player.salary = salaryFromValue(player.value, rng.float(0.08, 0.12));
  return player;
}

export function buildInitialPlayers(seed = 20260101) {
  const players = [];
  const duos = [];

  for (const team of SOURCE_TEAMS) {
    const rng = createRng(hashString(`${team.id}:${seed}`));
    team.roster.forEach((spec, i) => players.push(makePlayer(team, spec, i, rng)));

    const starters = players.filter((p) => p.teamId === team.id && p.isStarter);
    const a = starters[0];
    const b = starters.find((p) => p.role === 'SUP') || starters[1];
    if (a && b && a.id !== b.id) duos.push({ teamId: team.id, duo: [a.id, b.id] });
  }

  return { players, duos };
}

/* ------------------------------------------------------------------ */
/* 转会市场：从其他战队的替补里挂牌                                      */
/* ------------------------------------------------------------------ */

export function buildMarket(players, rng, playerTeamId, count = 10) {
  const candidates = players.filter((p) => p.teamId && p.teamId !== playerTeamId && !p.isStarter);
  const lpl = candidates.filter((p) => TEAM_BY_ID[p.teamId]?.region === 'LPL');
  const intl = candidates.filter((p) => TEAM_BY_ID[p.teamId]?.region !== 'LPL');
  const intlCount = Math.min(3, Math.floor(count / 3));
  const picked = [
    ...rng.shuffle(lpl).slice(0, count - intlCount),
    ...rng.shuffle(intl).slice(0, intlCount)
  ].slice(0, count);
  return picked.map((p) => ({
    ...p,
    originalTeamId: p.teamId,
    askingValue: Math.round(playerValue(p) * 0.9),
    expectedSalary: Math.round(playerValue(p) * rng.float(0.08, 0.12)),
    interest: rng.int(25, 95)
  }));
}

/** 某个位置的自由人（用于市场补货） */
export function buildFreeAgent(rng, existingNames = new Set()) {
  const base = rng.int(58, 82);
  const age = rng.int(18, 30);
  const role = rng.pick(['TOP', 'JUG', 'MID', 'ADC', 'SUP']);
  const name = `${rng.pick(['Free', 'Solo', 'Wander', 'Nomad', 'Drift'])}${rng.int(10, 99)}`;
  const spec = [name, role, base, age, rng.chance(0.15) ? 'KR' : 'CN'];
  const p = makePlayer({ id: 'fa', roster: [] }, spec, 5, rng);
  p.teamId = null;
  p.isStarter = false;
  p.id = `fa-${Date.now().toString(36)}-${Math.floor(rng.next() * 1e9).toString(36)}`;
  p.value = playerValue(p);
  p.salary = salaryFromValue(p.value, 0.1);
  existingNames.add(name);
  return p;
}

/* ------------------------------------------------------------------ */
/* 青训：这里使用虚构名字，方便长期养成                                  */
/* ------------------------------------------------------------------ */

const PROSPECT_NAMES = [
  '小北', '青柠', '阿星', 'Nova', '七夜', '白鸟', '小满', 'Kite',
  '阿岚', '拾光', '子夜', '寒江', '赤霄', '洛水', '惊蛰', '野火',
  '千山', '归零', '破晓', '银翼'
];

export function buildProspect(rng, id) {
  const role = rng.pick(['TOP', 'JUG', 'MID', 'ADC', 'SUP']);
  const age = rng.int(SCOUT.ageMin, SCOUT.ageMax);
  const ability = rng.int(SCOUT.abilityMin, SCOUT.abilityMax);
  const high = rng.chance(SCOUT.highPotentialChance);
  const potential = high ? rng.int(88, SCOUT.potentialMax) : rng.int(SCOUT.potentialMin, 87);

  const name = `${rng.pick(PROSPECT_NAMES)}${String(rng.int(1, 99)).padStart(2, '0')}`;
  const spec = [name, role, ability, age, 'CN'];
  const p = makePlayer({ id: 'sc', roster: [] }, spec, 5, rng);
  p.id = id;
  p.teamId = null;
  p.isStarter = false;
  p.potential = potential;
  p.growthTag = growthTagFor(potential, age);
  p.contractYears = 2;
  p.value = playerValue(p);
  p.salary = salaryFromValue(p.value, SCOUT.salaryRatio);
  p.scoutNote = potential;
  return p;
}

/* ------------------------------------------------------------------ */
/* 查询工具                                                             */
/* ------------------------------------------------------------------ */

export function squadOf(players, teamId) {
  return players.filter((p) => p.teamId === teamId);
}

export function startersOf(players, teamId) {
  const squad = squadOf(players, teamId);
  const starters = squad.filter((p) => p.isStarter);
  if (starters.length < 5) {
    const used = new Set(starters.map((p) => p.role));
    for (const p of squad) {
      if (starters.length >= 5) break;
      if (!p.isStarter && !used.has(p.role)) {
        starters.push(p);
        used.add(p.role);
      }
    }
  }
  return starters;
}

export function teamAbility(players, teamId) {
  const starters = startersOf(players, teamId);
  if (!starters.length) return 0;
  return Math.round(starters.reduce((s, p) => s + currentAbility(p), 0) / starters.length);
}
