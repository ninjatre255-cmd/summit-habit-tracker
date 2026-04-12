import { HABITS } from "@/data/habits";

const SCORED_HABITS = HABITS.filter((h) => h.category !== "fitness");

export function scoreColor(pct: number): string {
  if (pct >= 70) return "#4ade80";
  if (pct >= 40) return "#fbbf24";
  return "#f87171";
}

export function dayScore(date: string, isChecked: (id: string, d: string) => boolean): number {
  const checked = SCORED_HABITS.filter((h) => isChecked(h.id, date)).length;
  return Math.round((checked / SCORED_HABITS.length) * 100);
}

export function weekScore(weekDates: string[], isChecked: (id: string, d: string) => boolean): number {
  const total = weekDates.reduce((acc, d) => acc + SCORED_HABITS.filter((h) => isChecked(h.id, d)).length, 0);
  return Math.round((total / (SCORED_HABITS.length * 7)) * 100);
}

export function weekCount(habitId: string, weekDates: string[], isChecked: (id: string, d: string) => boolean): number {
  return weekDates.filter((d) => isChecked(habitId, d)).length;
}
