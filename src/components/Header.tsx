"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/data/content";
import { NavigationItem } from "@/types";

interface HeaderProps {
  currentRoute: string;
  onRouteChange: (route: string) => void;
  personalName: string;
}

export function Header({ currentRoute, onRouteChange, personalName }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a
          href="#home"
          className="font-semibold tracking-tight hover:opacity-90"
          aria-label="Ir ao início">
          {personalName.split(" ")[0]}.<span className="opacity-70">dev</span>
        </a>

        <nav aria-label="primária" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {NAVIGATION.map((item: NavigationItem) => (
              <li key={item.id}>
                <Button
                  variant={currentRoute === item.id ? "default" : "ghost"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => onRouteChange(item.id)}>
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-mob"
          onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="sr-only">Abrir menu</span>
        </Button>
      </div>

      {menuOpen && (
        <div id="menu-mob" className="sm:hidden border-t">
          <ul className="max-w-5xl mx-auto px-4 py-2 grid grid-cols-2 gap-2">
            {NAVIGATION.map((item: NavigationItem) => (
              <li key={item.id}>
                <Button
                  variant={currentRoute === item.id ? "default" : "secondary"}
                  className="w-full rounded-xl"
                  onClick={() => onRouteChange(item.id)}>
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
