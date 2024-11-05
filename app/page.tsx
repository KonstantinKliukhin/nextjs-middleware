import Link from "next/link";

import { appRoutes } from "@/shared/config/app-routes";
import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Button className="mt-4">
        <Link href={appRoutes.signUp}>Sign up</Link>
      </Button>
      <Button className="mt-4">
        <Link href={appRoutes.signIn}>Sign in</Link>
      </Button>
      <Button className="mt-4">
        <Link href={appRoutes.dashboard}>Dashboard</Link>
      </Button>
    </main>
  );
}
