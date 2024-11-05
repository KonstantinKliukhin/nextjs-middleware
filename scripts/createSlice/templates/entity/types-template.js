const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = (sliceName) => `
  export type ${firstCharUpperCase(toCamelCase(sliceName))} = {}
`;
