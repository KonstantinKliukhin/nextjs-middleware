const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createFormTypesTemplate = require("./types-template");
const createFormSchemaTemplate = require("./form-schema-template");

module.exports = async (sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot("src", "features", sliceName, "model", ...segments);

  try {
    await fs.mkdir(resolveModelPath());
    await fs.writeFile(resolveModelPath("types.ts"), createFormTypesTemplate(sliceName));
    await fs.writeFile(
      resolveModelPath("form-schema.ts"),
      createFormSchemaTemplate(sliceName)
    );
  } catch (e) {
    console.log(`Couldn't create model folder for slice ${sliceName}`, e);
  }
};
