import { env } from "./env";

export const apiRoutes = {
  // auth
  refreshToken: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/refresh-token`,
  requestResetPassword: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/request-reset-password`,
  confirmResetPassword: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/confirm-reset-password`,
  signIn: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-in`,
  signUp: `${env.NEXT_PUBLIC_APP_API_URL}/mock/auth/sign-up`,

  // users
  me: `${env.NEXT_PUBLIC_APP_API_URL}/users/me`,
} as const;
