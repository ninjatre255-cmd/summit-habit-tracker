export interface Habit {
  id: string;
  label: string;
  category: string;
  icon: string;
  description: string;
  maxPerWeek?: number;
}

export interface Category {
  id: string;
  label: string;
  color: string;
  bg: string;
}

export const HABITS: Habit[] = [
  { id: "weigh",       label: "Weigh Myself",           category: "fitness",   icon: "⚖️",  description: "Morning, consistent conditions" },
  { id: "matterhorn",  label: "Matterhorn Training",    category: "fitness",   icon: "🏔️",  description: "Alpine cardio block", maxPerWeek: 2 },
  { id: "strength",    label: "Strength Training",      category: "fitness",   icon: "🏋️",  description: "Posterior chain / single-leg" },
  { id: "knee_am",     label: "Knee Flossing AM",       category: "recovery",  icon: "🦵",  description: "Wall sits + flossing" },
  { id: "knee_pm",     label: "Knee Flossing PM",       category: "recovery",  icon: "🦵",  description: "Wall sits + flossing" },
  { id: "sleep",       label: "Sleep 8h",               category: "recovery",  icon: "😴",  description: "Prioritize sleep" },
  { id: "walk",        label: "Walk at Office",          category: "movement",  icon: "🚶",  description: "Step away from the desk" },
  { id: "walk_clear",  label: "Walk to Clear Head",     category: "movement",  icon: "🧠",  description: "Intentional, not doom-scrolling" },
  { id: "macrofactor", label: "Log Macros (MacroFactor)",category: "nutrition", icon: "🍽️",  description: "Guesstimate is fine" },
  { id: "snacks",      label: "Healthy Snacks Only",    category: "nutrition", icon: "🥗",  description: "No junk at the office" },
  { id: "hydration",   label: "Hydration",              category: "nutrition", icon: "💧",  description: "3L+ water" },
  { id: "reading",     label: "Read",                   category: "mental",    icon: "📖",  description: "A few pages minimum" },
  { id: "inner_voice", label: "Quiet the Inner Voice",  category: "mental",    icon: "🧘",  description: "Don't feed the doubt" },
];

export const CATEGORIES: Category[] = [
  { id: "fitness",   label: "FITNESS",   color: "#4ade80", bg: "#1a2a1a" },
  { id: "recovery",  label: "RECOVERY",  color: "#818cf8", bg: "#1a1a2e" },
  { id: "movement",  label: "MOVEMENT",  color: "#fbbf24", bg: "#2a2a1a" },
  { id: "nutrition", label: "NUTRITION", color: "#34d399", bg: "#1a2a2a" },
  { id: "mental",    label: "MENTAL",    color: "#e879f9", bg: "#2a1a2a" },
];

export const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
