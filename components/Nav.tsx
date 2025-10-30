"use client";
import { Home, Activity, Users, HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Activity", href: "/activity", Icon: Activity },
  { label: "People", href: "/people", Icon: Users },
  { label: "Support", href: "/support", Icon: HelpCircle },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-1 transition-all hover:scale-105">
            <span className="text-3xl font-bold text-jungle-green">BSA</span>
            <span className="text-xl font-medium text-unm-cherry">UNM</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ label, href, Icon }) => (
              <Link key={href} href={href} className={cn(
                "flex items-center space-x-2 px-4 py-2 rounded-full transition-all backdrop-blur-sm border",
                pathname === href
                  ? "bg-white/90 border-slate-300 shadow-sm text-slate-900"
                  : "bg-white/50 border-transparent hover:bg-white/70 text-slate-700"
              )}>
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {navItems.map(({ href, Icon }) => (
              <Link key={href} href={href} className={cn(
                "p-2 rounded-full transition-all backdrop-blur-sm",
                pathname === href ? "bg-white/90 text-slate-900" : "bg-white/50 text-slate-700"
              )}>
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200">
        <div className="flex justify-around py-2">
          <Link href="/" className={cn("p-3 rounded-full transition-all", pathname === "/" ? "text-jungle-green" : "text-slate-600")}>
            <Home className="w-6 h-6" />
          </Link>
          {navItems.map(({ href, Icon }) => (
            <Link key={href} href={href} className={cn("p-3 rounded-full transition-all", pathname === href ? "text-jungle-green" : "text-slate-600")}>
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
