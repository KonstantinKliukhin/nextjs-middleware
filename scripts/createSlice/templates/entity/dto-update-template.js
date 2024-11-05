const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
import type { Create${firstCharUpperCase(toCamelCase(slice))}Dto } from "./create-${toCamelCase(slice)}.dto";
export type Update${firstCharUpperCase(toCamelCase(slice))}Dto = Partial<Create${firstCharUpperCase(toCamelCase(slice))}Dto>;

`;
