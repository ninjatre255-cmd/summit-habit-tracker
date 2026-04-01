const MIGRATION_KEY = "sl3_migrated_to_yesterday_v1";

function getLocalDateString(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// Runs once synchronously at module load — before any component mounts
(function runMigration() {
  if (localStorage.getItem(MIGRATION_KEY)) return;

  try {
    const raw = localStorage.getItem("sl3");
    if (!raw) return;

    const logs = JSON.parse(raw) as Record<string, Record<string, boolean>>;
    const todayStr = getLocalDateString(new Date());

    if (!logs[todayStr]) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = getLocalDateString(yesterday);

    logs[yesterdayStr] = { ...logs[yesterdayStr], ...logs[todayStr] };
    delete logs[todayStr];

    localStorage.setItem("sl3", JSON.stringify(logs));
  } catch {}

  localStorage.setItem(MIGRATION_KEY, "1");
})();

// No-op hook — migration already ran above
export function useMigrateToYesterday() {}
