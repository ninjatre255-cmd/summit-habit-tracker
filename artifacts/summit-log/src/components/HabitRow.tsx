import { Category, Habit } from "@/data/habits";
import { Check } from "lucide-react";

interface HabitRowProps {
  habit: Habit;
  category: Category;
  date: string;
  checked: boolean;
  limited: boolean;
  weekCount: number;
  onToggle: () => void;
}

export function HabitRow({ habit, category, date, checked, limited, weekCount, onToggle }: HabitRowProps) {
  return (
    <div
      data-testid={`habit-row-${habit.id}`}
      className={`flex items-center justify-between px-3 py-2.5 rounded-md border mb-1 transition-all ${
        checked
          ? "border-opacity-25"
          : "bg-[#0f0f18] border-[#1a1a2a]"
      } ${limited ? "opacity-30 pointer-events-none" : ""}`}
      style={checked ? { background: category.bg, borderColor: category.color + "44" } : {}}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-base flex-shrink-0">{habit.icon}</span>
        <div>
          <div
            className={`text-xs font-light ${checked ? "font-medium" : ""}`}
            style={checked ? { color: category.color } : { color: "#94a3b8" }}
          >
            {habit.label}
          </div>
          <div className="text-[10px] text-slate-700 mt-0.5">
            {habit.description}
            {habit.maxPerWeek && (
              <span
                className="ml-1.5 text-[9px]"
                style={{ color: weekCount >= habit.maxPerWeek ? category.color : "#334155" }}
              >
                {weekCount}/{habit.maxPerWeek}w
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        data-testid={`btn-toggle-${habit.id}`}
        onClick={onToggle}
        className={`w-7 h-7 rounded flex items-center justify-center flex-shrink-0 border-[1.5px] transition-all ${
          checked ? "border-transparent" : "bg-transparent border-[#2d2d3a]"
        }`}
        style={checked ? { background: category.color, borderColor: category.color } : {}}
      >
        {checked && <Check size={13} color="#0a0a0f" strokeWidth={3} />}
      </button>
    </div>
  );
}
