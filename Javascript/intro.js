//Call files in Js
//Require --> Node js

const functions = require("./functions.js");

functions.saludar();

//Aplicando funcion flecha
var result = functions.sumar(5, 5);
console.log("resultado: ", result);

//function 3
let band = functions.validar("a");
console.error(band);

band = functions.validar("Hola mundo");
console.log(band);

let numeros = functions.mayorque(10);
console.log(numeros);