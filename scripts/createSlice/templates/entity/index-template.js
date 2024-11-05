const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
export type { ${firstCharUpperCase(toCamelCase(slice))} } from "./model/types";
export {
  useGet${firstCharUpperCase(toCamelCase(slice))}sList,
  useGet${firstCharUpperCase(toCamelCase(slice))},
  useCreate${firstCharUpperCase(toCamelCase(slice))},
  useUpdate${firstCharUpperCase(toCamelCase(slice))},
  useDelete${firstCharUpperCase(toCamelCase(slice))},
} from "./api/query-hooks";
`;
