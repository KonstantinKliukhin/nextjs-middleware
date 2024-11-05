import { NextResponse } from "next/server";

import type { ApiError } from "@/shared/types/api.types";

import type { MockedUser } from "../../users";
import { users } from "../../users";

export const POST = async (req: Request) => {
  const creds = (await req.json()) as { email: string; password: string };

  if (users.some((user) => user.user.email === creds.email)) {
    const error: ApiError = {
      message: "User already exists",
      statusCode: 403,
      error: "",
    };

    return NextResponse.json(error, { status: 403 });
  }

  const user: MockedUser = {
    accessToken: "123",
    refreshToken: "321",
    id: String(Math.random()),
    role: "user",
    email: creds.email,
    user: {
      id: String(Math.random()),
      role: "user",
      email: creds.email,
      password: creds.password,
    },
  };

  users.push(user);

  return NextResponse.json(user, { status: 201 });
};
