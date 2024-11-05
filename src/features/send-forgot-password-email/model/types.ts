import type { z } from "zod";

import type { forgotPasswordSchema } from "./form-schema";

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordSchema>;
