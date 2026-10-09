
"use client";

import { useSyncExternalStore } from "react";

import { useAppTheme } from "../context/ThemeContext";
import { Button } from "./ui/button";

const subscribe = () => () => {};

const getSnapshot = () => true;

const getServerSnapshot = () => false;

export default function ThemeSwitcher() {
  const { resolvedTheme, toggleTheme } = useAppTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (!mounted) {
    return (
      <Button variant="outline" disabled>
        Theme
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {isDark ? "☀ Light" : "🌙 Dark"}
    </Button>
  );
}
