import type { z } from "zod";

import type { resetPasswordSchema } from "./form-schema";

export type ResetPasswordFormType = z.infer<typeof resetPasswordSchema>;
