const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createUi = require("./create-ui");
const createIndexTemplate = require("./index-template");

module.exports = async (sliceName) => {
  try {
    await fs.mkdir(resolveRoot("src", "widgets", sliceName));
  } catch (e) {
    console.log(`Couldn't find directory for ${sliceName}`);
  }

  await createUi(sliceName);
  await fs.writeFile(
    resolveRoot("src", "widgets", sliceName, "index.ts"),
    createIndexTemplate(sliceName)
  );
};
