const fs = require("fs");

const foldersPaths = ["node_modules/.cache", ".next"];

foldersPaths.forEach((path) => {
  fs.rm(path, { recursive: true }, (err) => {
    if (err) {
      console.error(`Error removing cache for path ${path}: ${err.message}`);
    } else {
      console.log(`Cache for folder ${path} removed successfully.`);
    }
  });
});
