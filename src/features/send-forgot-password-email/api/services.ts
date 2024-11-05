import { apiRoutes } from "@/shared/config/api-routes";
import type { ApiResponse } from "@/shared/types/api.types";

export async function sendForgotPasswordEmail(email: string): Promise<ApiResponse<void>> {
  const result = await fetch(apiRoutes.requestResetPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!result.ok) {
    return (await result.json()) as ApiResponse<void>;
  }
}
