import { appRoutes } from "@/shared/config/app-routes";

import { authorizedRule, notAuthorizedRule } from "./rules/auth-rules";
import type { RouteConfig } from "./types";

export const routesRulesConfig: RouteConfig[] = [
  // AUTH
  {
    url: appRoutes.signUp,
    rules: [authorizedRule],
  },
  {
    url: appRoutes.signIn,
    rules: [authorizedRule],
  },

  // APP
  {
    url: appRoutes.dashboard,
    rules: [notAuthorizedRule],
  },
];
