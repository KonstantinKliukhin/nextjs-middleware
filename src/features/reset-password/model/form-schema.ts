import { object } from "zod";

import { passwordSchema } from "@/shared/lib/validation-schema";

export const resetPasswordSchema = object({
  password: passwordSchema(),
  confirmPassword: passwordSchema(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
