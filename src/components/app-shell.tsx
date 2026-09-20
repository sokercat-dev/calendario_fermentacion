import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Camera, House } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Inicio", icon: House, match: (p: string) => p === "/" },
  { to: "/nuevo", label: "Recambio", icon: Camera, match: (p: string) => p.startsWith("/nuevo") },
  { to: "/guia", label: "Guía", icon: BookOpen, match: (p: string) => p.startsWith("/guia") },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col overflow-x-hidden">
      <div className="flex-1 pb-28">{children}</div>
      <nav
        className="fixed inset-x-0 bottom-0 z-20"
        style={{ paddingBottom: "max(0.35rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto max-w-lg border-t border-border bg-surface/95 px-4 pt-5 backdrop-blur-md">
          <div className="grid grid-cols-3">
            {NAV.map((item) => {
              const active = item.match(pathname);
              const Icon = item.icon;
              const isCamera = item.to === "/nuevo";
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex min-h-11 flex-col items-center justify-center gap-1 rounded-md text-xs font-medium",
                    active ? "text-primary" : "text-muted",
                  )}
                >
                  <span
                    className={cn(
                      "flex items-center justify-center",
                      isCamera &&
                        "-mt-8 size-12 rounded-full bg-primary text-primary-fg shadow-card",
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
