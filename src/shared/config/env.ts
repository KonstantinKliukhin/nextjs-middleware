import { createEnv } from "@t3-oss/env-nextjs";
import { string } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_API_URL: string().url().min(1, "NEXT_PUBLIC_APP_API_URL is missed"),
    NEXT_PUBLIC_APP_URL: string().url().min(1, "NEXT_PUBLIC_APP_URL is missed"),
  },
  server: {
    NEXTAUTH_URL: string().url().min(1, "NEXTAUTH_URL is missed"),
    NEXTAUTH_SECRET: string().min(1, "NEXTAUTH_SECRET is missed"),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
