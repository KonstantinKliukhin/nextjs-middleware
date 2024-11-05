import { object, string } from "zod";

import { passwordSchema } from "@/shared/lib/validation-schema";

export const signUpSchema = object({
  email: string().email().min(1, "Required"),
  password: passwordSchema(),
  confirmPassword: passwordSchema(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
