const createFeatureForm = require("./templates/feature-form/create-feature-form");
const createEntity = require("./templates/entity/create-entity");
const createPage = require("./templates/page/create-page");
const createWidget = require("./templates/widget/create-widget");

const layer = process.argv[2];
const sliceName = process.argv[3];
const subType = process.argv[4];

const layers = ["features", "entities", "widgets", "pages"];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Specify slice ${layers.join(" or ")}`);
}

if (!sliceName) {
  throw new Error("Slice name isn't specified");
}

if (layer === "features" && subType === "form") {
  createFeatureForm(sliceName);
}

if (layer === "entities") {
  createEntity(sliceName);
}

if (layer === "pages") {
  createPage(sliceName);
}

if (layer === "widgets") {
  createWidget(sliceName);
}
