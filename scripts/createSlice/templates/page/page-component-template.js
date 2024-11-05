const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
import type { FC } from "react";

export const ${firstCharUpperCase(toCamelCase(slice))}: FC = () => {

  return <div></div>
}
`;
