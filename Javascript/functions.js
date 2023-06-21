//Declarar funcion
function saludar(){
    console.log("Hello world");
}

//Funcion flecha
const sumar = (num1, num2)=>{
    return (num1+num2);
}

//declarar funcion, nombre, argumento, if, retornar resultado
function validar(cadena){
    let result = false;
    if(cadena.length > 5){
        result = true;
    }
    return result;
}

/**********************
 * Funcion
 * Recibe un parametro con numeros
 * retorna arreglos con valores mayores al parametro
 * 
***********************/

var arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


function mayorque(num){
    let numeros = [];
    for(let i = 0; i < arreglo.length; i ++){
        if(arreglo[i] > num){
            numeros.push(arreglo[i]);
        }
    }
    return numeros;
}

//Funcion flecha
const filtro = (num)=>{
    let result = arreglo.filter(n => {
        if(n > num){
            return n;
        }
        return result;
    })

}

//hacer función pública - Node js
module.exports = {
    saludar,
    sumar,
    validar,
    mayorque,
    filtro
};