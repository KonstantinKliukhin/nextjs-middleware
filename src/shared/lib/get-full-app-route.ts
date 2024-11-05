import { env } from "../config/env";

const start = env.NEXT_PUBLIC_APP_URL?.endsWith?.("/")
  ? env.NEXT_PUBLIC_APP_URL?.slice(0, -1)
  : env.NEXT_PUBLIC_APP_URL;

export function getFullAppRoute(route: string) {
  return `${start}${route}`;
}
