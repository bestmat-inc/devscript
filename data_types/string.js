// ©2024 - DevScript - BestMat, Inc. - All rights reserved.
function isString(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '"') {
            return true;
        }
    }
    return false;
}

export default isString;