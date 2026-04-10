import { useState } from "react";
import { HABITS, CATEGORIES } from "@/data/habits";
import { useHabitLogs } from "@/hooks/useHabitLogs";
import { useMigrateToYesterday } from "@/hooks/useMigrateToYesterday";
import { today, getWeekDates, formatDateLabel } from "@/lib/dateUtils";
import { dayScore, weekScore, weekCount, scoreColor } from "@/lib/scoring";
import { WeekNav } from "@/components/WeekNav";
import { ScoreBar } from "@/components/ScoreBar";
import { HabitRow } from "@/components/HabitRow";
import { WeekHabitRow } from "@/components/WeekHabitRow";
import { WeekBreakdown } from "@/components/WeekBreakdown";

type View = "day" | "week";

export function SummitLog() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [activeDate, setActiveDate] = useState(today());
  const [view, setView] = useState<View>("day");
  useMigrateToYesterday();
  const { isChecked, toggle } = useHabitLogs();

  const weekDates = getWeekDates(weekOffset);
  const todayStr = today();

  const score =
    view === "day"
      ? dayScore(activeDate, isChecked)
      : weekScore(weekDates, isChecked);

  const scoreLabel =
    view === "day"
      ? activeDate === todayStr
        ? "TODAY"
        : formatDateLabel(activeDate)
      : "WEEK SCORE";

  function handleSelectDate(d: string) {
    setActiveDate(d);
    setView("day");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 font-mono text-sm pb-16">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
        <div>
          <div className="text-[22px] font-bold tracking-[4px] text-white">SUMMIT LOG</div>
          <div className="text-[9px] text-slate-600 tracking-widest mt-0.5">DAILY HABIT TRACKER</div>
        </div>
        <div className="flex gap-1.5">
          <button
            data-testid="btn-view-day"
            onClick={() => setView("day")}
            className={`px-3 py-1.5 rounded text-[10px] tracking-widest border font-mono transition-all ${
              view === "day"
                ? "bg-[#4ade80] text-[#0a0a0f] border-[#4ade80] font-bold"
                : "bg-transparent text-slate-600 border-[#1e1e2e] hover:border-slate-600"
            }`}
          >
            DAY
          </button>
          <button
            data-testid="btn-view-week"
            onClick={() => setView("week")}
            className={`px-3 py-1.5 rounded text-[10px] tracking-widest border font-mono transition-all ${
              view === "week"
                ? "bg-[#4ade80] text-[#0a0a0f] border-[#4ade80] font-bold"
                : "bg-transparent text-slate-600 border-[#1e1e2e] hover:border-slate-600"
            }`}
          >
            WEEK
          </button>
        </div>
      </div>

      {/* Week nav */}
      <WeekNav
        weekDates={weekDates}
        activeDate={activeDate}
        weekOffset={weekOffset}
        isChecked={isChecked}
        onPrev={() => setWeekOffset((o) => o - 1)}
        onNext={() => setWeekOffset((o) => o + 1)}
        onSelectDate={handleSelectDate}
      />

      {/* Score bar */}
      <ScoreBar label={scoreLabel} score={score} />

      {/* Habits */}
      <div className="px-4 pt-3">
        {CATEGORIES.map((cat) => {
          const catHabits = HABITS.filter((h) => h.category === cat.id);
          if (!catHabits.length) return null;

          return (
            <div key={cat.id}>
              {/* Category header */}
              <div
                className="flex items-center gap-2 text-[9px] tracking-widest mt-4 mb-2 first:mt-0"
                style={{ color: cat.color }}
              >
                <div className="w-4 h-px" style={{ background: cat.color }} />
                {cat.label}
              </div>

              {/* Habit rows */}
              {view === "day"
                ? catHabits.map((hab) => {
                    const checked = isChecked(hab.id, activeDate);
                    const wc = weekCount(hab.id, weekDates, isChecked);
                    const dayOfWeek = new Date(activeDate + "T12:00:00").getDay();
                    const isWeekend = [0, 6].includes(dayOfWeek);
                    const limited = !!(
                      (hab.weekdaysOnly && isWeekend) ||
                      (hab.weekendOnly && !isWeekend) ||
                      (hab.maxPerWeek && !hab.softLimit && wc >= hab.maxPerWeek && !checked)
                    );
                    return (
                      <HabitRow
                        key={hab.id}
                        habit={hab}
                        category={cat}
                        date={activeDate}
                        checked={checked}
                        limited={limited}
                        weekCount={wc}
                        onToggle={() => toggle(hab.id, activeDate)}
                      />
                    );
                  })
                : catHabits.map((hab) => (
                    <WeekHabitRow
                      key={hab.id}
                      habit={hab}
                      category={cat}
                      weekDates={weekDates}
                      isChecked={isChecked}
                      onToggle={toggle}
                    />
                  ))}
            </div>
          );
        })}
      </div>

      {/* Week breakdown */}
      <WeekBreakdown weekDates={weekDates} isChecked={isChecked} />
    </div>
  );
}
