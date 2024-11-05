import { getSession } from "next-auth/react";

import { localStorageKeys } from "@/shared/config/local-storage-keys";
import { getIsClient } from "@/shared/lib/get-is-client";

export async function getAuthTokens(): Promise<{
  accessToken: string | null;
  refreshToken: string | null;
} | null> {
  if (getIsClient()) {
    const accessToken = localStorage.getItem(localStorageKeys.accessToken) || null;
    const refreshToken = localStorage.getItem(localStorageKeys.refreshToken) || null;

    if (!accessToken && !refreshToken) {
      const session = await getSession();

      return {
        accessToken: session?.user?.accessToken || null,
        refreshToken: session?.user?.refreshToken || null,
      };
    }

    return { accessToken, refreshToken };
  }

  const { getAuthDataServer } = await import("./get-auth-data.server");

  const authData = await getAuthDataServer();

  return {
    accessToken: authData?.session?.user?.accessToken || null,
    refreshToken: authData?.session?.user?.refreshToken || null,
  };
}
