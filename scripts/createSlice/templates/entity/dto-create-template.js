const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
export type Create${firstCharUpperCase(toCamelCase(slice))}Dto = {}

`;
