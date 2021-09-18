const vscode = require('vscode');
const { pascalCase } = require("change-case");
const { createDir } = require('./createDir');
const { createFile } = require('./createFile');

const generator = async (uri, withStyle) => {
  let componentName = await vscode.window.showInputBox({
    prompt: "What's name of your component?"
  });

  if (!componentName || componentName.length === 0) {
    throw new Error("Component name can not be empty");
  }

  componentName = componentName.replace(/[^A-Za-z]/g, "");

  if (componentName === "") {
    throw new Error("Component name can only be in English.");
  }

  componentName = pascalCase(componentName);

  const componentDir = createDir(uri, componentName);
  let filename = `${componentDir}/index.js`;
  createFile(filename, componentName, 'index');

  if(withStyle) {
    filename = `${componentDir}/style.js`;
    createFile(filename, componentName, 'style');

    filename = `${componentDir}/${componentName}View.js`;
    createFile(filename, componentName, 'view-styled');
  } else {
    filename = `${componentDir}/${componentName}View.js`;
    createFile(filename, componentName, 'view-unstyled');
  }

  filename = `${componentDir}/with${componentName}Container.js`;
  createFile(filename, componentName, 'container');
};

exports.generator = generator;