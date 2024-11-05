const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createServicesTemplate = require("./services-template");
const createQueryHooksTemplate = require("./query-hooks-template");
const createDtoCreateTemplate = require("./dto-create-template");
const createDtoUpdateTemplate = require("./dto-update-template");
const toCamelCase = require("../../to-camel-case");

module.exports = async (sliceName) => {
  const resolveApiPath = (...segments) =>
    resolveRoot("src", "entities", sliceName, "api", ...segments);

  try {
    await fs.mkdir(resolveApiPath());
    await fs.writeFile(resolveApiPath(`services.ts`), createServicesTemplate(sliceName));
    await fs.writeFile(
      resolveApiPath(`query-hooks.ts`),
      createQueryHooksTemplate(sliceName)
    );

    await fs.mkdir(resolveApiPath("types"));
    await fs.writeFile(
      resolveApiPath("types", `create-${toCamelCase(sliceName)}.dto.ts`),
      createDtoCreateTemplate(sliceName)
    );
    await fs.writeFile(
      resolveApiPath("types", `update-${toCamelCase(sliceName)}.dto.ts`),
      createDtoUpdateTemplate(sliceName)
    );
  } catch (e) {
    console.log(`Couldn't create UI folder for slice ${sliceName}`, e);
  }
};
