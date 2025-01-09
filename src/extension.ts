import * as vscode from 'vscode';

const buildDate = new Date().toLocaleString();

export function activate(context: vscode.ExtensionContext) {
    console.log('Hello extension is now active!');
    const disposable = vscode.commands.registerCommand('hello.world', () => {
        const msg = `Hello from hello-vscode! Build time: ${buildDate}`;
        // vscode.window.showInformationMessage(msg);
        vscode.window.showErrorMessage(msg);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('Hello extension deactivated.');
}
