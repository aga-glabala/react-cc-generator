const vscode = require('vscode');
const { generator } = require('./src/generator');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const generatorWithStyle = vscode.commands.registerCommand('react-cc-generator.genReactComponentContainerFilesWithStyle', (uri) => {
		generator(uri, true);
	});
	context.subscriptions.push(generatorWithStyle);


	const generatorWithoutStyle = vscode.commands.registerCommand('react-cc-generator.genReactComponentContainerFiles', (uri) => {
		generator(uri, false);
	});
	context.subscriptions.push(generatorWithoutStyle);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
