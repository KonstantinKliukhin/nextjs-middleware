import type { ApiError } from "../types/api.types";

export function getApiErrorMessage(error: ApiError): string {
  if (typeof error.message === "string") return error.message;

  if (typeof error.message[0] === "string") return error.message[0];

  return "Unknown error occurred";
}
