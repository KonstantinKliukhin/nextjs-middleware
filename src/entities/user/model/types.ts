export type User = {
  email: string;
  id: string;
  role: UserRoles;
};

export type SessionUser = User & {
  refreshToken: string;
  accessToken: string;
};

export type UserRoles = "admin" | "user";
