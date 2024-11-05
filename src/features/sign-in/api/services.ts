import type { SessionUser } from "@/entities/user";
import { apiRoutes } from "@/shared/config/api-routes";
import type { ApiResponse } from "@/shared/types/api.types";

import type { SignInDto } from "./types/sign-in.dto";

export async function logIn(dto: SignInDto): Promise<ApiResponse<SessionUser>> {
  const response = await fetch(apiRoutes.signIn, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  return (await response.json()) as ApiResponse<SessionUser>;
}
