import { getIsClient } from "../lib/get-is-client";
import { clientAppFetch } from "./client-app-fetch";

export async function appFetch(
  ...args: Parameters<typeof fetch>
): Promise<ReturnType<typeof fetch>> {
  const isClient = getIsClient();

  if (isClient) {
    return clientAppFetch(...args);
  } else {
    const { serverAppFetch } = await import("./server-app-fetch.server");

    return serverAppFetch(...args);
  }
}
