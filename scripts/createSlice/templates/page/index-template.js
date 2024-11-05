const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
export { ${toCamelCase(firstCharUpperCase(slice))} } from "./ui/${toCamelCase(firstCharUpperCase(slice))}/${toCamelCase(firstCharUpperCase(slice))}";
`;
