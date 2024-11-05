import { getFullAppRoute } from "./get-full-app-route";
import { getIsClient } from "./get-is-client";

export function hardNavigate(route: string) {
  if (!getIsClient()) return;

  window.location.href = getFullAppRoute(route);
}
