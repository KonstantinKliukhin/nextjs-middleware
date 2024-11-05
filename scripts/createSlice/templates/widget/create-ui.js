const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createWidgetComponentTemplate = require("./widget-component-template");
const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = async (sliceName) => {
  const resolveUiPath = (...segments) =>
    resolveRoot("src", "widgets", sliceName, "ui", ...segments);
  const componentName = firstCharUpperCase(toCamelCase(sliceName));

  try {
    await fs.mkdir(resolveUiPath());
    await fs.mkdir(resolveUiPath(componentName));
    await fs.writeFile(
      resolveUiPath(componentName, `${componentName}.tsx`),
      createWidgetComponentTemplate(sliceName)
    );
  } catch (e) {
    console.log(`Couldn't create ui folder for slice ${sliceName}`, e);
  }
};
