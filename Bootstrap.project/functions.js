/******DOM function control** */

function changeImg(){
    let alt = document.getElementById("img1").alt;
    if(alt == 'img1'){
        document.getElementById("img1").src = "https://img.freepik.com/foto-gratis/gente-negocios-dandose-mano_53876-20488.jpg";
        document.getElementById("img1").alt = 'img2';
    }else{
        document.getElementById("img1").src = "https://www.iebschool.com/blog/wp-content/uploads/2019/04/modelos-de-negocios-digitales.jpg";
        document.getElementById("img1").alt = 'img1';

    }

}

/**Declarar constantes, variables, global*/
const numero_1 = 1;
var cadena = "Hola mundo";
let numero_decimal = 10.2;

/**Functions */
function saludar(){
    alert("Bienvenidos");
}

function operacion(){
    sumar(5,2)
}

function sumar(num1,num2){
    return num1+num2;
}

let funcionFlecha = ()=>{
    console.log("Esto es una función flecha");
}

/************CICLOS****************** */
for(let i = 0; i < 10; i++){
    console.log(i);
}

let personas = ["1","2","3","4"]
for(let i = 0; i < personas.length; i++){
    console.log(personas[i]);
}
console.log("------FOREACH------")
personas.forEach(element => {
    console.log(element);

});

console.log("------WHILE------")
let contador = 0;
while(contador<personas.length){
    console.log(personas[contador]);
    ++contador;
/** if(contador == 2 && contador == 1 || contador == 0)*/
    if(contador == 2){
        console.log("Terminando recorrido...");
    }

}

/**Estructura decision */
if(5 < 2){

}