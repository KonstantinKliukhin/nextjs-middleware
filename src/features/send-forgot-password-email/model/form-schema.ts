import { object, string } from "zod";

export const forgotPasswordSchema = object({
  email: string().email().min(1, "Required"),
});
