// ©2024 - DevScript - All rights reserved.
const code = `
print: "Hello World!";
`;

import throw_error from "./src/throw_error.js";
const variables = {};

function parsePrintStatement(statement) {
    const args = [statement.trim()];
    return args;
}

function parseVariableDeclaration(declaration) {
    // Split the declaration by spaces
    const parts = declaration.split("=");
    if (parts.length !== 2) {
        // Invalid variable declaration format
        throw_error("Invalid variable declaration format");
    }
    const name = parts[0].trim();
    let value = parts[1].trim();

    // Check if the value is a string literal
    if (value.startsWith('"') && value.endsWith('"')) {
        // Remove surrounding quotes
        value = value.slice(1, -1);
    }

    return {
        name: name,
        value: value
    };
}

function assignVariable(name, value) {
    variables[name] = value;
}

function getVariableValue(name) {
    if (isNaN(name)) {
        // If the name is not a number, check if it's a valid variable
        if (!(name in variables)) {
            throw_error("Variable '" + name + "' not found");
        }
        return variables[name];
    } else {
        // If the name is a number, return it directly
        return name;
    }
}

function executeCode(code) {
    try {
        const statements = code.split(";");
        statements.forEach(statement => {
            statement = statement.trim();
            if (statement !== '') {
                if (statement.includes('=')) {
                    const parsedDeclaration = parseVariableDeclaration(statement);
                    assignVariable(parsedDeclaration.name, parsedDeclaration.value);
                } else if (statement.startsWith("print:")) {
                    const printStatement = statement.substring("print:".length).trim();
                    const args = parsePrintStatement(printStatement);
                    print(...args);
                } else {
                    throw_error("Invalid statement: " + statement);
                }
            }
        });
    } catch (error) {
        console.error("Error executing code:", error);
        throw_error("Error executing code: " + error.message);
    }
}

function print(...args) {
    args.forEach(arg => {
        if (arg.startsWith('"') && arg.endsWith('"')) {
            // Remove surrounding quotes for string literals
            arg = arg.slice(1, -1);
        } else {
            // Retrieve the value of variables
            const variableValue = getVariableValue(arg);
            if (variableValue !== undefined) {
                arg = variableValue;
            }
        }
        console.log(arg);
    });
}

try {
    executeCode(code);
} catch (error) {
    console.error("Error:", error.message);
}
