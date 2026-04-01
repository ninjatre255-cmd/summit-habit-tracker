import { HABITS } from "@/data/habits";

export function scoreColor(pct: number): string {
  if (pct >= 70) return "#4ade80";
  if (pct >= 40) return "#fbbf24";
  return "#f87171";
}

export function dayScore(date: string, isChecked: (id: string, d: string) => boolean): number {
  const checked = HABITS.filter((h) => isChecked(h.id, date)).length;
  return Math.round((checked / HABITS.length) * 100);
}

export function weekScore(weekDates: string[], isChecked: (id: string, d: string) => boolean): number {
  const total = weekDates.reduce((acc, d) => acc + HABITS.filter((h) => isChecked(h.id, d)).length, 0);
  return Math.round((total / (HABITS.length * 7)) * 100);
}

export function weekCount(habitId: string, weekDates: string[], isChecked: (id: string, d: string) => boolean): number {
  return weekDates.filter((d) => isChecked(habitId, d)).length;
}
