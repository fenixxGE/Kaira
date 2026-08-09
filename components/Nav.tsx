"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3.5 backdrop-blur transition-all sm:px-8 " +
        (scrolled ? "bg-cream/80 border-b border-ink2/8" : "bg-transparent border-b border-transparent")
      }
    >
      <Link href="/" className="flex items-center gap-2.5">
        <span
          className="block h-8 w-8 rounded-lg"
          style={{
            background: "linear-gradient(135deg, #95BC9F 0%, #5B8B6A 100%)",
            boxShadow: "0 4px 14px rgba(123,166,135,0.35)",
          }}
        />
        <span className="text-[18px] font-semibold tracking-tight text-ink">Kaira</span>
      </Link>

      <Link
        href="#waitlist"
        className="rounded-full bg-salvia px-5 py-2 text-[13px] font-medium text-white shadow-soft transition-all hover:bg-salvia-dark hover:-translate-y-0.5"
      >
        Únete
      </Link>
    </nav>
  );
}
