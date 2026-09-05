import type { LucideIcon } from "lucide-react";
import { Home, User, Calendar, MessageSquare, HelpCircle, Settings } from "lucide-react";

// A union of every valid page key. To add a new sidebar page later, you add
// one string here — TypeScript will then tell you everywhere else that
// needs updating (a switch statement missing a case, etc).
export type NavKey = "home" | "profile" | "schedule" | "messages" | "help" | "settings";

export interface NavItem {
  key: NavKey;
  label: string;
  icon: LucideIcon; // note: this is the TYPE of a component, not an instance
}

export const NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Home", icon: Home },
  { key: "profile", label: "Profile", icon: User },
  { key: "schedule", label: "Schedule", icon: Calendar },
  { key: "messages", label: "Messages", icon: MessageSquare },
  { key: "help", label: "Help", icon: HelpCircle },
  { key: "settings", label: "Settings", icon: Settings },
];
