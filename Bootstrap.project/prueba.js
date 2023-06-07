/*Función que consume API REST*/

async function getProducts(){
    //conectar con API
    //await -> convierte la función fetch a una función sincronica
    const peticion = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
    console.log(peticion);
    console.log("---------");
    
    //Obtener datos de la petición
    const productos = await peticion.json();
    console.log(productos);

    
    // Referenciar contenedor padre Manipular elemento
    let contenedor = document.getElementById("contImg");

    //Listar productos/elementos, embeber codigo HTML
    productos.forEach(element => {
        //console.log(element.name);
        let strProduct = "<div class='card' style='width: 18rem;'>";
        strProduct += "<img id='img1'";
        strProduct += "src='"+element.image_link+"' class='card-img-top' alt='"+element.name+"'>";
        strProduct += "<div class='card-body'>";
        strProduct += "<h5 class='card-title'>"+element.name+"</h5>";
        strProduct += "<p class='card-text'></p>";
        strProduct += "</div> </div>";

        //innerHTML embeber HTML al elemento div.
        contenedor.innerHTML += strProduct;

    })
   

}
