const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createModel = require("./create-model");
const createApi = require("./create-api");
const createFeatureFormIndexTemplate = require("./index-template");

module.exports = async (sliceName) => {
  try {
    await fs.mkdir(resolveRoot("src", "entities", sliceName));
  } catch (e) {
    console.log(`Couldn't find directory for ${sliceName}`);
  }

  await createModel(sliceName);
  await createApi(sliceName);
  await fs.writeFile(
    resolveRoot("src", "entities", sliceName, "index.ts"),
    createFeatureFormIndexTemplate(sliceName)
  );
};
