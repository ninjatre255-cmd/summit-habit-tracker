import { ChevronLeft, ChevronRight } from "lucide-react";
import { DAY_LABELS } from "@/data/habits";
import { today, getDayNumber } from "@/lib/dateUtils";
import { dayScore, scoreColor } from "@/lib/scoring";

interface WeekNavProps {
  weekDates: string[];
  activeDate: string;
  weekOffset: number;
  isChecked: (id: string, d: string) => boolean;
  onPrev: () => void;
  onNext: () => void;
  onSelectDate: (d: string) => void;
}

export function WeekNav({ weekDates, activeDate, isChecked, onPrev, onNext, onSelectDate }: WeekNavProps) {
  const todayStr = today();

  return (
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
      <button
        data-testid="btn-prev-week"
        onClick={onPrev}
        className="text-slate-500 hover:text-slate-300 text-2xl leading-none flex-shrink-0 px-0.5 transition-colors"
      >
        <ChevronLeft size={22} />
      </button>

      <div className="flex gap-1.5 flex-1">
        {weekDates.map((date, i) => {
          const pct = dayScore(date, isChecked);
          const isToday = date === todayStr;
          const isActive = date === activeDate;
          const dotColor = pct > 0 && !isActive ? scoreColor(pct) : "transparent";

          return (
            <button
              key={date}
              data-testid={`btn-day-${date}`}
              onClick={() => onSelectDate(date)}
              className={`flex-1 rounded-md py-1.5 text-center border transition-all ${
                isActive
                  ? "bg-[#4ade80] border-[#4ade80]"
                  : isToday
                  ? "bg-[#1a2a1a] border-[#4ade8044]"
                  : "bg-[#0f0f18] border-[#1a1a2a] hover:border-[#2a2a3a]"
              }`}
            >
              <div className={`text-[8px] tracking-wide mb-0.5 ${isActive ? "text-[#0a0a0f]" : "text-slate-500"}`}>
                {DAY_LABELS[i]}
              </div>
              <div className={`text-xs ${isActive ? "text-[#0a0a0f] font-bold" : isToday ? "text-[#4ade80]" : "text-slate-400"}`}>
                {getDayNumber(date)}
              </div>
              <div
                className="w-3.5 h-0.5 rounded-full mx-auto mt-1"
                style={{ background: dotColor }}
              />
            </button>
          );
        })}
      </div>

      <button
        data-testid="btn-next-week"
        onClick={onNext}
        className="text-slate-500 hover:text-slate-300 text-2xl leading-none flex-shrink-0 px-0.5 transition-colors"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
