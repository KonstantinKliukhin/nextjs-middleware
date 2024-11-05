import { appFetch } from "@/shared/api/app-fetch";
import { apiRoutes } from "@/shared/config/api-routes";
import type { ApiResponse } from "@/shared/types/api.types";

import type { User } from "../model/types";

export async function getCurrentUser(): Promise<ApiResponse<User>> {
  const response = await appFetch(apiRoutes.me);

  return (await response.json()) as ApiResponse<User>;
}
