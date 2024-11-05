import { signOut } from "next-auth/react";

import { appRoutes } from "@/shared/config/app-routes";

export async function logOut() {
  await signOut({ callbackUrl: appRoutes.signIn });
}
