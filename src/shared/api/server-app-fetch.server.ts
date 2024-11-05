import { getAuthTokens } from "@/entities/user";

export async function serverAppFetch(
  ...args: Parameters<typeof fetch>
): Promise<ReturnType<typeof fetch>> {
  const tokens = await getAuthTokens();

  return await fetch(args[0], {
    ...args[1],
    headers: {
      credentials: "include",
      Authorization: tokens?.accessToken ? `Bearer ${tokens?.accessToken}` : "",
      ...args[1]?.headers,
    },
  });
}
