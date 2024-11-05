const toCamelCase = require("../../to-camel-case");

module.exports = (slice) => `
import { object } from 'zod';

export const ${toCamelCase(slice)}Schema = object({})
`;
