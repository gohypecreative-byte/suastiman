"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Heart, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function BottomNav() {
  const pathname = usePathname();
  const { openCart, totalCount, wishlistCount } = useCart();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Shop", href: "/products", icon: LayoutGrid },
    { label: "Wishlist", href: "/wishlist", icon: Heart, badge: wishlistCount },
    { label: "Cart", onClick: openCart, icon: ShoppingBag, badge: totalCount },
    { label: "Account", href: "/account", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md border-t border-[#E0D8CB] flex items-center justify-around py-1.5 px-2 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)] select-none">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.href ? pathname === item.href : false;

        const content = (
          <div className="flex flex-col items-center justify-center relative py-1 px-2.5 text-center min-w-[54px] select-none">
            <div className="relative">
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-[#122E46] stroke-[2.2]" : "text-stone-600 stroke-[1.6]"
                }`}
              />
              {typeof item.badge === "number" && item.badge > 0 ? (
                <span className="absolute -top-1.5 -right-2 bg-[#122E46] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {item.badge}
                </span>
              ) : null}
            </div>
            <span
              className={`text-[10px] tracking-wide mt-1 transition-colors ${
                isActive ? "text-[#122E46] font-semibold" : "text-stone-600 font-medium"
              }`}
            >
              {item.label}
            </span>
          </div>
        );

        if (item.onClick) {
          return (
            <button
              key={item.label}
              onClick={item.onClick}
              className="cursor-pointer focus:outline-none"
              aria-label={item.label}
            >
              {content}
            </button>
          );
        }

        return (
          <Link key={item.label} href={item.href!} aria-label={item.label}>
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
