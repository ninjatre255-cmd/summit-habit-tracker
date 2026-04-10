export interface Habit {
  id: string;
  label: string;
  category: string;
  icon: string;
  description: string;
  maxPerWeek?: number;
  softLimit?: boolean; // show tally but never gray out
  weekdaysOnly?: boolean; // disabled on Sat & Sun
  weekendOnly?: boolean; // disabled Mon–Fri
}

export interface Category {
  id: string;
  label: string;
  color: string;
  bg: string;
}

export const HABITS: Habit[] = [
  { id: "weigh",       label: "Weigh Myself",           category: "fitness",   icon: "⚖️",  description: "Morning, consistent conditions" },
  { id: "matterhorn",  label: "Matterhorn Training",    category: "fitness",   icon: "🏔️",  description: "3 zone 2 sessions over 60 min (hiking, incline treadmill, stairs, rower)", maxPerWeek: 3 },
  { id: "strength",    label: "Strength Training",      category: "fitness",   icon: "🏋️",  description: "Two upper body and two lower body sessions", maxPerWeek: 4 },
  { id: "hike",        label: "Weekend Hike",           category: "fitness",   icon: "🥾",  description: "At least 3k ft gain — get time on the trail!", maxPerWeek: 1, softLimit: true, weekendOnly: true },
  { id: "knee_am",     label: "Knee Flossing AM",       category: "recovery",  icon: "🦵",  description: "Wall sits + flossing" },
  { id: "knee_pm",     label: "Knee Flossing PM",       category: "recovery",  icon: "🦵",  description: "Wall sits + flossing" },
  { id: "sleep",       label: "Get to Bed at 8:30 (10 @ Latest on Weekends)", category: "recovery", icon: "😴", description: "Prioritize sleep" },
  { id: "walk",        label: "10 Minutes in Morning or Night", category: "movement", icon: "🚶", description: "Make it easy & make it rewarding" },
  { id: "macrofactor", label: "Log Macros (MacroFactor)",category: "nutrition", icon: "🍽️",  description: "Guesstimate is fine" },
  { id: "snacks",      label: "Healthy Food Only",      category: "nutrition", icon: "🥗",  description: "No junk at the office" },
  { id: "reading",     label: "Read / Learn Something Productive (>30 min for myself)", category: "mental", icon: "📖", description: "A few pages minimum" },
  { id: "audible",     label: "Listen to Audible",      category: "mental",    icon: "🎧",  description: "Any time — commute, walk, wind down" },
  { id: "stranger",    label: "Approach & Talk to 1 Stranger", category: "mental", icon: "🤝", description: "Put yourself out there" },
  { id: "inner_voice", label: "Told Myself \"Haha That Guy Is Acting Crazy Haha\"", category: "mental", icon: "🧘", description: "Don't feed the doubt" },
];

export const CATEGORIES: Category[] = [
  { id: "fitness",   label: "FITNESS",   color: "#4ade80", bg: "#1a2a1a" },
  { id: "recovery",  label: "RECOVERY",  color: "#818cf8", bg: "#1a1a2e" },
  { id: "movement",  label: "MOVEMENT",  color: "#fbbf24", bg: "#2a2a1a" },
  { id: "nutrition", label: "NUTRITION", color: "#34d399", bg: "#1a2a2a" },
  { id: "mental",    label: "MENTAL",    color: "#e879f9", bg: "#2a1a2a" },
];

export const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
