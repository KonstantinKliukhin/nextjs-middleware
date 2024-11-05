import { localStorageKeys } from "@/shared/config/local-storage-keys";
import { getIsClient } from "@/shared/lib/get-is-client";

export function saveAuthTokens(accessToken: string, refreshToken: string) {
  if (!getIsClient()) return;

  localStorage.setItem(localStorageKeys.refreshToken, refreshToken);
  localStorage.setItem(localStorageKeys.accessToken, accessToken);
}
