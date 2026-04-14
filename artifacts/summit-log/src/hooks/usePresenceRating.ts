import { useState, useCallback } from "react";

type Ratings = Record<string, number>;

const STORAGE_KEY = "sl3_presence";

function loadRatings(): Ratings {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function usePresenceRating() {
  const [ratings, setRatings] = useState<Ratings>(loadRatings);

  const getRating = useCallback(
    (date: string): number | null => ratings[date] ?? null,
    [ratings]
  );

  const setRating = useCallback((date: string, value: number) => {
    setRatings((prev) => {
      const updated = { ...prev, [date]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  return { getRating, setRating };
}
