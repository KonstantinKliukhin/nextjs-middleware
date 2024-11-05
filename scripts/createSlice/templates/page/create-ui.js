const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createPageComponentTemplate = require("./page-component-template");
const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = async (sliceName) => {
  const resolveUiPath = (...segments) =>
    resolveRoot("src", "pages-layer", sliceName, "ui", ...segments);
  const componentName = firstCharUpperCase(toCamelCase(sliceName));

  try {
    await fs.mkdir(resolveUiPath());
    await fs.mkdir(resolveUiPath(componentName));
    await fs.writeFile(
      resolveUiPath(componentName, `${componentName}.tsx`),
      createPageComponentTemplate(sliceName)
    );
  } catch (e) {
    console.log(`Couldn't create model folder for slice ${sliceName}`, e);
  }
};
