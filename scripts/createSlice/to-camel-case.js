const firstCharUpperCase = require("./firstCharUpperCase");
module.exports = (value) => {
  const [firstPart, ...restParts] = value.split("-");

  return [firstPart, ...restParts.map(firstCharUpperCase)].join("");
};
