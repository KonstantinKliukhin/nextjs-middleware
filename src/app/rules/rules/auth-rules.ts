import { appRoutes } from "@/shared/config/app-routes";

import type { Rule, RuleProps } from "../types";

function getAuthRulesData({ sessionUser }: RuleProps) {
  const isAuthorized = Boolean(sessionUser);
  const isAdmin = sessionUser?.role === "admin";

  return {
    isAuthorized,
    isAdmin,
  };
}

export const notAuthorizedRule: Rule = (props) => {
  const { isAuthorized } = getAuthRulesData(props);

  // if not authorized and trying to go further redirect to sign in
  if (!isAuthorized) {
    return props.redirect(appRoutes.signIn);
  }
};

export const authorizedRule: Rule = (props) => {
  const { isAuthorized } = getAuthRulesData(props);

  // if authorized and trying to go auth route - redirect to the app
  if (isAuthorized) {
    return props.redirect(appRoutes.dashboard);
  }
};
