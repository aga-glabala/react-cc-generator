
const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const { workspace } = require("vscode");

const createDir = (uri, componentName) => {
  let contextMenuSourcePath;

  if (uri && fs.lstatSync(uri.fsPath).isDirectory()) {
    contextMenuSourcePath = uri.fsPath;
  } else if (uri) {
    contextMenuSourcePath = path.dirname(uri.fsPath);
  } else {
    contextMenuSourcePath = workspace.workspaceFolders;
  }

  let componentDir = `${contextMenuSourcePath}/${componentName}`;
  fse.mkdirsSync(componentDir);

  return componentDir;
};

exports.createDir = createDir;