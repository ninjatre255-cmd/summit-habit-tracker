interface PresenceRatingProps {
  date: string;
  rating: number | null;
  onRate: (value: number) => void;
}

export function PresenceRating({ rating, onRate }: PresenceRatingProps) {
  return (
    <div className="px-4 pt-3">
      <div className="text-[9px] text-slate-500 tracking-widest mb-2">HOW PRESENT WAS I TODAY?</div>
      <div className="flex gap-1">
        {Array.from({ length: 10 }, (_, i) => {
          const val = i + 1;
          const selected = rating === val;
          const filled = rating !== null && val <= rating;
          return (
            <button
              key={val}
              data-testid={`btn-presence-${val}`}
              onClick={() => onRate(val)}
              className={`flex-1 h-8 rounded text-[11px] font-mono font-bold border transition-all ${
                selected
                  ? "border-[#818cf8] bg-[#818cf8] text-[#0a0a0f]"
                  : filled
                  ? "border-[#818cf866] bg-[#1a1a2e] text-[#818cf8]"
                  : "border-[#1a1a2a] bg-[#0f0f18] text-slate-600 hover:border-[#2a2a3a] hover:text-slate-400"
              }`}
            >
              {val}
            </button>
          );
        })}
      </div>
    </div>
  );
}
