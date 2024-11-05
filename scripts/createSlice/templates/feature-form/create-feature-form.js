const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createFeatureFormModel = require("./create-model");
const createFeatureFormUI = require("./create-ui");
const createFeatureFormIndexTemplate = require("./index-template");

module.exports = async (sliceName) => {
  try {
    await fs.mkdir(resolveRoot("src", "features", sliceName));
  } catch (e) {
    console.log(`Couldn't find directory for ${sliceName}`);
  }

  await createFeatureFormModel(sliceName);
  await createFeatureFormUI(sliceName);
  await fs.writeFile(
    resolveRoot("src", "features", sliceName, "index.ts"),
    createFeatureFormIndexTemplate(sliceName)
  );
};
