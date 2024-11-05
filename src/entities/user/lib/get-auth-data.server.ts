import { getServerSession } from "next-auth";

import { authOptions } from "@/shared/config/auth-options";

export async function getAuthDataServer() {
  const session = await getServerSession(authOptions);

  const isAuthenticated = Boolean(session?.user);

  return { session, isAuthenticated };
}
