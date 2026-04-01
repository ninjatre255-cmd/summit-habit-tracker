import { DAY_LABELS } from "@/data/habits";
import { today } from "@/lib/dateUtils";
import { dayScore, scoreColor } from "@/lib/scoring";

interface WeekBreakdownProps {
  weekDates: string[];
  isChecked: (id: string, d: string) => boolean;
}

export function WeekBreakdown({ weekDates, isChecked }: WeekBreakdownProps) {
  const todayStr = today();

  return (
    <div className="mx-4 mt-4 mb-4 p-3.5 rounded-lg bg-[#0f0f18] border border-[#1e1e2e]">
      <div className="text-[9px] text-slate-700 tracking-widest mb-2.5">WEEK BREAKDOWN</div>
      {weekDates.map((date, i) => {
        const pct = dayScore(date, isChecked);
        const isToday = date === todayStr;
        const color = pct > 0 ? scoreColor(pct) : "transparent";

        return (
          <div key={date} className="flex items-center gap-2.5 mb-1.5">
            <div
              data-testid={`breakdown-day-${date}`}
              className="text-[10px] w-6"
              style={{ color: isToday ? "#4ade80" : "#475569" }}
            >
              {DAY_LABELS[i]}
            </div>
            <div className="flex-1 h-1 bg-[#1a1a2a] rounded-full">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: color }}
              />
            </div>
            <div className="text-[10px] text-slate-700 w-7 text-right">
              {pct > 0 ? `${pct}%` : "--"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
