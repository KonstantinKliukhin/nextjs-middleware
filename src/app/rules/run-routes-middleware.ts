import { NextResponse } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";

import { matchPath } from "@/shared/lib/match-path";

import type { RouteConfig, Rule, RuleProps } from "./types";

export function runRoutesMiddleware(
  req: NextRequestWithAuth,
  config: RouteConfig[]
): NextResponse<any> | void {
  const props = createRuleProps(req);

  const currentRouteConfig = config.find((route) => matchPath(route.url, props.nextUrl));

  if (!currentRouteConfig) return;

  return executeRules(currentRouteConfig.rules, props);
}

function createRuleProps(req: NextRequestWithAuth): RuleProps {
  const nextUrl = req.nextUrl.pathname;
  const sessionUser = req.nextauth.token?.user;
  const redirect = (path: string) => {
    return NextResponse.redirect(new URL(path, req.url));
  };

  return {
    nextUrl,
    redirect,
    sessionUser,
  };
}

function executeRules(
  rules: Rule[],
  props: RuleProps,
  ruleIndex: number = 0
): ReturnType<Rule> | void {
  if (ruleIndex > rules.length - 1) return;

  const result = rules[ruleIndex](props);

  if (!result) {
    return executeRules(rules, props, ruleIndex + 1);
  } else {
    return result;
  }
}
