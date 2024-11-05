"use server";

import { cookies } from "next/headers";

export async function removeAllCookies() {
  const cookieData = cookies();
  cookieData.getAll().forEach((cookie) => cookieData.delete(cookie.name));
}
