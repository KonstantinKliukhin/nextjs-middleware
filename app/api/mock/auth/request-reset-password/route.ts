import { NextResponse } from "next/server";

import { users } from "../../users";

export const POST = async (req: Request) => {
  const creds = (await req.json()) as { email: string; password: string };

  const user = users.find(({ user: { email } }) => email === creds.email);

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

  const code = String(Math.random());
  user.user.secretCode = code;
  console.log("code: ", code);

  return NextResponse.json({ ok: true });
};
