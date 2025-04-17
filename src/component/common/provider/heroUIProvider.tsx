"use client";

import { HeroUIProvider as UIProvider } from "@heroui/react";

export default function HeroUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UIProvider>{children}</UIProvider>;
}
