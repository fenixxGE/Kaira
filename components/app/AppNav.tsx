"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase-client";

const NAV = [
  { href: "/app", label: "Inicio", icon: "🏠" },
  { href: "/app/correos", label: "Correos", icon: "📧" },
  { href: "/app/agenda", label: "Agenda", icon: "📅" },
  { href: "/app/familia", label: "Familia", icon: "🎒" },
  { href: "/app/finanzas", label: "Finanzas", icon: "💶" },
  { href: "/app/futuro", label: "Futuro", icon: "🎯" },
  { href: "/app/bienestar", label: "Bienestar", icon: "🌿" },
];

export function AppNav({ userName, avatarUrl }: { userName: string; avatarUrl: string | null }) {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[240px] flex-col border-r border-ink2/10 bg-white lg:flex">
      {/* Brand */}
      <div className="border-b border-ink2/10 px-6 py-5">
        <Link href="/app" className="flex items-center gap-2.5">
          <span
            className="block h-8 w-8 rounded-lg"
            style={{ background: "linear-gradient(135deg, #95BC9F 0%, #5B8B6A 100%)" }}
          />
          <span className="text-[18px] font-semibold text-ink">Kaira</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-1">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/app" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] transition-colors " +
                    (active
                      ? "bg-salvia-soft text-salvia-dark font-medium"
                      : "text-ink2 hover:bg-cream2 hover:text-ink")
                  }
                >
                  <span className="text-[16px]">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User */}
      <div className="border-t border-ink2/10 p-4">
        <div className="mb-3 flex items-center gap-2.5">
          {avatarUrl ? (
            <img src={avatarUrl} alt="" className="h-8 w-8 rounded-full" />
          ) : (
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #95BC9F 0%, #5B8B6A 100%)" }}
            >
              {userName.slice(0, 1).toUpperCase()}
            </span>
          )}
          <p className="truncate text-[13px] text-ink">{userName}</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/app/ajustes"
            className="flex-1 rounded-md border border-ink2/15 px-2 py-1.5 text-center text-[11px] text-ink2 hover:border-salvia hover:text-salvia-dark"
          >
            Ajustes
          </Link>
          <button
            type="button"
            onClick={logout}
            className="flex-1 rounded-md border border-ink2/15 px-2 py-1.5 text-[11px] text-ink2 hover:border-alert hover:text-alert"
          >
            Salir
          </button>
        </div>
      </div>
    </aside>
  );
}
