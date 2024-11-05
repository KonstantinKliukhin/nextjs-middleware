import type { ApiResponse } from "../types/api.types";

// used for throwing error in query hooks
export function handleQuery<
  DataT,
  FnT extends (...args: any[]) => Promise<ApiResponse<DataT>>,
>(fn: FnT) {
  return async (...args: Parameters<FnT>): Promise<DataT> => {
    const result = await fn(...args);

    if (
      !(typeof result === "object") ||
      result == null ||
      !("message" in result) ||
      !("statusCode" in result)
    ) {
      return result;
    }

    if (typeof result.message === "string") {
      throw result.message;
    }

    if (typeof result.message?.[0] === "string") {
      throw result.message[0];
    } else {
      throw "Unknown error occurred";
    }
  };
}
