const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
import type { z } from "zod";

import { ${toCamelCase(slice)}Schema } from "./form-schema";

export type ${firstCharUpperCase(toCamelCase(slice))}FormType = z.infer<typeof ${toCamelCase(slice)}Schema>;
`;
