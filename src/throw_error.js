// ©2024 - DevScript - BestMat, Inc. - All rights reserved.
import { consola, createConsola } from "consola";

function throw_error(error){
    consola.error(new Error(`ERROR: ${error}`));
}

export default throw_error;