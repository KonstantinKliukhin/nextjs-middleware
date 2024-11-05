const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createFormUITemplate = require("./form-ui-template");
const firstCharUpperCase = require("../../firstCharUpperCase");
const toCamelCase = require("../../to-camel-case");

module.exports = async (sliceName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot("src", "features", sliceName, "ui", ...segments);

  try {
    await fs.mkdir(resolveUIPath());
    const componentName = `${firstCharUpperCase(toCamelCase(sliceName))}Form`;
    await fs.mkdir(resolveUIPath(componentName));
    await fs.writeFile(
      resolveUIPath(componentName, `${componentName}.tsx`),
      createFormUITemplate(sliceName, componentName)
    );
  } catch (e) {
    console.log(`Couldn't create UI folder for slice ${sliceName}`, e);
  }
};
