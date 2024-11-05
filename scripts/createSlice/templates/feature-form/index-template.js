const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
export { ${firstCharUpperCase(toCamelCase(slice))}Form } from "./ui/${slice}Form"
`;
