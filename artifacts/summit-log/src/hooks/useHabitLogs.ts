import { useState, useCallback } from "react";

type Logs = Record<string, Record<string, boolean>>;

const STORAGE_KEY = "sl3";

function loadLogs(): Logs {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function useHabitLogs() {
  const [logs, setLogs] = useState<Logs>(loadLogs);

  const isChecked = useCallback(
    (habitId: string, date: string): boolean => {
      return !!(logs[date]?.[habitId]);
    },
    [logs]
  );

  const toggle = useCallback((habitId: string, date: string) => {
    setLogs((prev) => {
      const updated: Logs = { ...prev, [date]: { ...prev[date] } };
      updated[date][habitId] = !updated[date]?.[habitId];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  return { isChecked, toggle };
}
