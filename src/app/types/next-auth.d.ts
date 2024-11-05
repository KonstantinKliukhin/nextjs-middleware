import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: import("../../entities/user/model/types").SessionUser;
  }

  interface DefaultUser {}
  type SessionUser = import("../../entities/user/model/types").SessionUser;
  interface User extends SessionUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    user: import("../../entities/user/model/types").SessionUser;
  }
}
