"use client";
import type { FC } from "react";

import { LogoutButton } from "@/features/log-out";

export const Header: FC = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-x-4 border-b border-accent bg-primary px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <LogoutButton className="ml-auto flex" variant="destructive">
        Logout
      </LogoutButton>
    </header>
  );
};
