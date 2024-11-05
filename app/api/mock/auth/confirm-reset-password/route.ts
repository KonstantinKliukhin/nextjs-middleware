import { NextResponse } from "next/server";

import { users } from "../../users";

export const POST = async (req: Request) => {
  const body = (await req.json()) as { resetPasswordCode: string; password: string };

  const user = users.find(
    ({ user: { secretCode } }) => secretCode === body.resetPasswordCode
  );

  if (!user) {
    return NextResponse.json(
      {
        message: "User not found",
        statusCode: 404,
        error: "",
      },
      { status: 404 }
    );
  }

  delete user.user.secretCode;

  user.user.password = body.password;

  return NextResponse.json(user);
};
