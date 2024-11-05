import type { SessionUser, User } from "@/entities/user";

export type MockedUser = Omit<SessionUser, "user"> & {
  user: User & {
    password: string;
    secretCode?: string;
  };
};
export const users: MockedUser[] = [];
