const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createTypesTemplate = require("./types-template");

module.exports = async (sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot("src", "entities", sliceName, "model", ...segments);

  try {
    await fs.mkdir(resolveModelPath());
    await fs.writeFile(resolveModelPath("types.ts"), createTypesTemplate(sliceName));
  } catch (e) {
    console.log(`Couldn't create model folder for slice ${sliceName}`, e);
  }
};
