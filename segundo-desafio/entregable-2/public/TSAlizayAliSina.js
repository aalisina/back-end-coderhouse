"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const calculateModule = './calculates';
const operacion = async (num1, num2, oper) => {
    //Cargar dinamicamente el modulo que realiza la operacion
    let operation = null;
    switch (oper.toLowerCase()) {
        case 'suma':
            //Importar al modulo de suma
            operation = await Promise.resolve().then(() => __importStar(require(calculateModule))).then(n => n.Suma);
            break;
        case 'resta':
            //Importar al modulo resta
            operation = await Promise.resolve().then(() => __importStar(require(calculateModule))).then(f => f.Resta);
            break;
        default:
            return console.log(`${oper} no es una operacion soportada por esta aplicion`);
    }
    return new operation(num1, num2).resultado();
};
const operaciones = async () => {
    const operacionSuma = await operacion(54, 2, 'suma');
    console.log(operacionSuma);
    const operacionResta = await operacion(54, 2, 'resta');
    console.log(operacionResta);
    const operacionError = await operacion(54, 2, 'rsafdestasas');
    console.log(operacionError);
};
operaciones();
