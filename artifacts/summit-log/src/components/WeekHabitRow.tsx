import { Category, Habit } from "@/data/habits";
import { DAY_LABELS } from "@/data/habits";
import { today } from "@/lib/dateUtils";
import { Check } from "lucide-react";

interface WeekHabitRowProps {
  habit: Habit;
  category: Category;
  weekDates: string[];
  isChecked: (id: string, d: string) => boolean;
  onToggle: (id: string, date: string) => void;
}

export function WeekHabitRow({ habit, category, weekDates, isChecked, onToggle }: WeekHabitRowProps) {
  const todayStr = today();
  const count = weekDates.filter((d) => isChecked(habit.id, d)).length;

  return (
    <div
      data-testid={`week-habit-row-${habit.id}`}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#0f0f18] border border-[#1a1a2a] mb-1"
    >
      <span className="text-xs flex-shrink-0">{habit.icon}</span>
      <span className="text-[10px] text-slate-500 w-24 flex-shrink-0 truncate">{habit.label}</span>
      <div className="flex gap-0.5 flex-1">
        {weekDates.map((d, i) => {
          const ck = isChecked(habit.id, d);
          const isToday = d === todayStr;
          return (
            <button
              key={d}
              data-testid={`btn-week-cell-${habit.id}-${d}`}
              onClick={() => onToggle(habit.id, d)}
              className={`flex-1 h-5 rounded text-[8px] font-mono flex items-center justify-center border transition-all ${
                ck
                  ? "border-transparent font-bold"
                  : isToday
                  ? "bg-[#1a2a1a] border-[#4ade8033] text-slate-600"
                  : "bg-[#0a0a0f] border-[#1a1a2a] text-slate-700"
              }`}
              style={ck ? { background: category.color, borderColor: category.color } : {}}
            >
              {ck ? <Check size={9} color="#0a0a0f" strokeWidth={3} /> : DAY_LABELS[i][0]}
            </button>
          );
        })}
      </div>
      <span
        className="text-[10px] w-5 text-right flex-shrink-0"
        style={{ color: category.color }}
      >
        {count}{habit.maxPerWeek ? `/${habit.maxPerWeek}` : ""}
      </span>
    </div>
  );
}
