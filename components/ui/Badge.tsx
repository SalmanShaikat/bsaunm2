import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps { children: ReactNode; className?: string; }
export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("inline-block px-3 py-1 text-sm font-medium text-slate-600 bg-slate-100 rounded-full", className)}>
      {children}
    </span>
  );
}
