import { apiRoutes } from "@/shared/config/api-routes";
import type { ApiResponse } from "@/shared/types/api.types";

type ResetPasswordParam = {
  resetPasswordCode: string;
  password: string;
};
export async function resetPassword({
  resetPasswordCode,
  password,
}: ResetPasswordParam): Promise<ApiResponse<void>> {
  const response = await fetch(apiRoutes.confirmResetPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resetPasswordCode, password }),
  });

  if (!response.ok) {
    return (await response.json()) as ApiResponse<void>;
  }
}
