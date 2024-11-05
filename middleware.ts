import { withAuth } from "next-auth/middleware";

import { routesRulesConfig, runRoutesMiddleware } from "@/app/rules";
import { env } from "@/shared/config/env";

export default withAuth(
  async function middleware(req) {
    return runRoutesMiddleware(req, routesRulesConfig);
  },
  {
    secret: env.NEXTAUTH_SECRET,
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/sign-up", "/sign-in", "/dashboard"],
};
