import type { z } from "zod";

import type { signUpSchema } from "./form-schema";

export type SignUpFormType = z.infer<typeof signUpSchema>;
