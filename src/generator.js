const vscode = require('vscode');

const generator = async (uri) => {
  let componentName = await vscode.window.showInputBox({
    prompt: "What's name of your component?"
  });

  console.log(uri, componentName);
};

exports.generator = generator;