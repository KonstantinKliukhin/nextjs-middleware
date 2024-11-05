import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

import type { SessionUser } from "@/entities/user";
import { getAuthTokens, saveAuthTokens } from "@/entities/user";
import { logOut } from "@/features/log-out";

import { appRoutes } from "../config/app-routes";
import type { ApiResponse } from "../types/api.types";
import { refreshUserToken } from "./refresh-user-token";

let refreshPromise: Promise<ApiResponse<SessionUser>> | null = null;

export async function clientAppFetch(
  ...args: Parameters<typeof fetch>
): Promise<ReturnType<typeof fetch>> {
  if (refreshPromise) await refreshPromise;

  const tokens = await getAuthTokens();

  const response = await fetch(args[0], {
    ...args[1],
    headers: {
      Authorization: tokens?.accessToken ? `Bearer ${tokens.accessToken}` : "",
      ...args[1]?.headers,
    },
  });

  const isAuthError = response.status === 401;

  if (isAuthError) {
    if (!tokens?.refreshToken) {
      signOut({ callbackUrl: appRoutes.signIn });

      return response;
    }

    refreshPromise = refreshUserToken(tokens?.refreshToken);
    const sessionUser = await refreshPromise;

    if (
      "message" in sessionUser ||
      !sessionUser?.accessToken ||
      !sessionUser?.refreshToken
    ) {
      await logOut();
      toast.info("Your session has expired. Please sign in again");
      redirect(appRoutes.signIn);
    } else {
      saveAuthTokens(sessionUser.accessToken, sessionUser.refreshToken);

      return await fetch(args[0], {
        ...args[1],
        headers: {
          Authorization: `Bearer ${sessionUser.accessToken}`,
          ...args[1]?.headers,
        },
      });
    }
  }

  return response;
}
