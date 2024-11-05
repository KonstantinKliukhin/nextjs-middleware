import type { SessionUser } from "@/entities/user";

import { apiRoutes } from "../config/api-routes";
import type { ApiResponse } from "../types/api.types";

export async function refreshUserToken(
  refreshToken: string
): Promise<ApiResponse<SessionUser>> {
  const res = await fetch(apiRoutes.refreshToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  return (await res.json()) as ApiResponse<SessionUser>;
}
