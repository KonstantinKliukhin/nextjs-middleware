"use client";
import { SessionProvider } from "next-auth/react";
import type { FC, PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";

import { queryClient } from "@/shared/config/query-client";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <SessionProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </SessionProvider>
);
