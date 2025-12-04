"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Plus, History, User } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/home", icon: Home, label: "Beranda" },
    { href: "/create-order", icon: Plus, label: "Tambah Orderan" },
    { href: "/transactions", icon: History, label: "Riwayat Order" },
    { href: "/profile", icon: User, label: "Profil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="grid grid-cols-4 gap-1 px-2 py-2">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all duration-200 ${
              isActive(href)
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
