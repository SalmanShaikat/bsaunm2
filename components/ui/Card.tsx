import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps { children: ReactNode; className?: string; }
export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-slate-200 transition-shadow hover:shadow-lg", className)}>
      {children}
    </div>
  );
}
