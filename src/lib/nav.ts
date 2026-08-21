import {
  BarChart3,
  Bell,
  Brain,
  FlaskConical,
  GitCompare,
  HeartHandshake,
  Home,
  MessagesSquare,
  NotebookPen,
  Sparkles,
  UserRound,
  Bot,
} from "lucide-react";

export const NAV = [
  { path: "/", labelKey: "nav.home", icon: Home },
  { path: "/substances", labelKey: "nav.substances", icon: FlaskConical },
  { path: "/compare", labelKey: "nav.compare", icon: GitCompare },
  { path: "/effects", labelKey: "nav.effects", icon: Sparkles },
  { path: "/neuro", labelKey: "nav.neuro", icon: Brain },
  { path: "/harm-scale", labelKey: "nav.harm", icon: BarChart3 },
  { path: "/reduction", labelKey: "nav.reduction", icon: HeartHandshake },
  { path: "/experiences", labelKey: "nav.experiences", icon: MessagesSquare },
  { path: "/alerts", labelKey: "nav.alerts", icon: Bell },
  { path: "/chat", labelKey: "nav.chat", icon: Bot },
  { path: "/logs", labelKey: "nav.logs", icon: NotebookPen },
  { path: "/profile", labelKey: "nav.profile", icon: UserRound },
] as const;

export const PRIMARY_NAV = ["/", "/substances", "/logs"] as const;

export const MORE_NAV = [
  "/compare",
  "/effects",
  "/neuro",
  "/harm-scale",
  "/reduction",
  "/experiences",
  "/alerts",
  "/chat",
] as const;

export const MOBILE_NAV = ["/", "/substances", "/logs", "/profile"] as const;
