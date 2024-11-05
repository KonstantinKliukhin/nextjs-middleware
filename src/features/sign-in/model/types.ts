import type { z } from "zod";

import type { signInSchema } from "./form-schema";

export type SignInFormType = z.infer<typeof signInSchema>;
