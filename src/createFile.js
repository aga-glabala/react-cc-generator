const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

const createFile = (filename, componentName, template) => {
  let templateFileName = path.join(__dirname, `./template/${template}.template`);

  let componentContent = fs
    .readFileSync(templateFileName)
    .toString()
    .replace(/{componentName}/g, componentName)

  fse.outputFile(filename, componentContent);
}
exports.createFile = createFile;