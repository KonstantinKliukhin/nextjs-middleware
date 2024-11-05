import type { NextResponse } from "next/server";

import type { SessionUser } from "@/entities/user";

export type RuleProps = {
  readonly sessionUser?: SessionUser;
  readonly nextUrl: string;
  readonly redirect: (path: string) => NextResponse<any>;
};

export type Rule = (props: RuleProps) => NextResponse<any> | void;

export type RouteConfig = {
  rules: Rule[];
  url: string;
};
