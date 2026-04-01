export function today(): string {
  return new Date().toISOString().split("T")[0];
}

export function getWeekDates(weekOffset: number): string[] {
  const now = new Date();
  const day = now.getDay();
  const mondayOffset = (day + 6) % 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - mondayOffset + weekOffset * 7);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.toISOString().split("T")[0];
  });
}

export function formatDateLabel(date: string): string {
  return new Date(date + "T12:00:00")
    .toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
    .toUpperCase();
}

export function getDayNumber(date: string): number {
  return new Date(date + "T12:00:00").getDate();
}
