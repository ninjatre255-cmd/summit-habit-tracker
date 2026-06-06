import { scoreColor } from "@/lib/scoring";

interface ScoreBarProps {
  label: string;
  score: number;
}

export function ScoreBar({ label, score }: ScoreBarProps) {
  const color = scoreColor(score);
  return (
    <div className="px-4 pt-3">
      <div className="flex justify-between mb-1.5 text-[10px] tracking-widest items-center">
        <span className="text-slate-500">{label}</span>
        <span style={{ color }} data-testid="score-percentage">{score}%</span>
      </div>
      <div className="h-0.5 bg-[#1e1e2e] rounded-full">
        <div
          data-testid="score-bar"
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${score}%`, background: color }}
        />
      </div>
    </div>
  );
}
