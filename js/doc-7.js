/* 

let imgProdUno = document.getElementById("img-1");
let imgProdDos = document.getElementById("img-2");
let imgProdTres = document.getElementById("img-3");
let imgProdCuatro = document.getElementById("img-4");
let imgProdCinco = document.getElementById("img-5");


const productos = [{sku: 1 , img: "../assets/img/img-targ-1.jpg",  nombre: "Pantalon Deep Manhattan", precio: 12000 },
                   {sku: 2 , img: "../assets/img/img-targ-2.jpg",  nombre: "Campera Lion", precio: 15000 },
                   {sku: 3 , img: "../assets/img/img-targ-3.jpg",  nombre: "Campera Heavy Rocko"  , precio: 25000},
                   {sku: 4 , img: "../assets/img/img-targ-4.jpg",  nombre: "Remera Kenzie Kraft" , precio: 8000},
                   {sku: 5 , img: "../assets/img/img-targ-5.jpg",  nombre: "Buzo Kendall" , precio: 20000}];

for (const producto of productos) { 
    let cards = document.createElement('div')
    cards.classList.add('card');
    cards.innerHTML = `<div class="card-img">
                            <img src=${producto.img} width="200px" alt="">
                        </div>
                        <div class="card-text">
                            <p class="texto-card">${producto.nombre}</p>
                            <div class="precio-cart">
                                <p class="texto-card">$${producto.precio}</p>
                            </div>
                        </div> `;
    document.body.appendChild(cards);
}

let sku1 = "Informacion de Producto: \n\n sku: 1  \n nombre: Pantalon Deep Manhattan \n precio: $12000 "
let sku2 = "Informacion de Producto: \n\n sku: 2  \n nombre: Campera Lion \n precio: $15000 "
let sku3 = "Informacion de Producto: \n\n sku: 3  \n nombre: Campera Heavy Rocko   \n precio: $25000"
let sku4 = "Informacion de Producto: \n\n sku: 4  \n nombre: Remera Kenzie Kraft  \n precio: $8000"
let sku5 = "Informacion de Producto: \n\n sku: 5  \n nombre: Buzo Kendall  \n precio: $20000"

 */
/* 
imgProdUno.addEventListener("click", () => {
    alert(sku1);
    })
imgProdDos.addEventListener("click", () => {
    alert(sku2);
    })
imgProdTres.addEventListener("click", () => {
    alert(sku3);
    })
imgProdCuatro.addEventListener("click", () => {
    alert(sku4);
    })
imgProdCinco.addEventListener("click", () => {
    alert(sku5);
    })

 */

function cambiarImagenIzq(imagen){
    var imagenGrandeIzq = document.getElementById("grande-izq");
    imagenGrandeIzq.src = imagen.src;
}
function cambiarImagenDer(imagen){
    var imagenGrandeDer= document.getElementById("grande-der");
    imagenGrandeDer.src = imagen.src;
}

let input1  = document.getElementById("nombre")
input1.addEventListener('input', () => {
     console.log(input1.value)
let container = document.getElementById("personalizacion")
// cambio el código HTML de la imagen
container.innerHTML= "<div class='nombre-remera'><h2>"+input1.value+"</h2><p>Burgues</p> <h3>"+input1.value+"</h3> </div>";
})


class Producto{
    constructor(sku, nombre, imagen, precio){
        this.sku = sku;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

class Carrito{
    constructor(sku, productos){
        this.sku = sku;
        this.productos = [];
    }
}

// generacion catalogo de productos
let catalogoProductos = [];

let producto1 = new Producto(1, "Pantalon Deep Manhattan", "img-targ-1.jpg" , 12000);
let producto2 = new Producto(2, "Campera Lion", "img-targ-2.jpg" , 15000);
let producto3 = new Producto(3, "Campera Heavy Rocko", "img-targ-3.jpg" , 25000);
let producto4 = new Producto(4, "Remera Kenzie Kraft", "img-targ-4.jpg" , 8000);
let producto5 = new Producto(5, "Buzo Kendall", "img-targ-5.jpg" , 20000);

catalogoProductos.push(producto1);
catalogoProductos.push(producto2);
catalogoProductos.push(producto3);
catalogoProductos.push(producto4);
catalogoProductos.push(producto5);

//generar una card por producto


let cardsDiv = document.querySelector("#cards");
let cardRendered = `
<div class="card div-tarjetas-producto m-3" style="width: 18rem;">
<img src="../assets/img/-------------------" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">-------------------</h5>
<p class="card-text">Sweater escote redondo, menguado. Tejido de tacto suave, disponible en amplia paleta de colores.. Composición: 50% algodón 50% acrílico</p>
<pcard-text"> Precio: $-------------------</p>
<a href="#" class="btn btn-primary">Comprar</a>
<a href="#" class="btn btn-outline-dark">Agregar al carrito</a>
</div>
</div>
`;
catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
});

function renderCard(producto){
    let cardRendered = `
    <div class="card d-inline-flex div-tarjetas-producto m-3" style="width: 18rem;">
<img src="../assets/img/${producto.imagen}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${producto.nombre}</h5>
<p class="card-text">Sweater escote redondo, menguado. Tejido de tacto suave, disponible en amplia paleta de colores.. Composición: 50% algodón 50% acrílico</p>
<pcard-text"> Precio: $${producto.precio}</p>
<a href="#" class="btn btn-primary">Comprar</a>
<a href="##" class="btn btn-outline-dark botonDecompra" id="${producto.sku}">Agregar al carrito</a>
</div>
</div>
`;
return cardRendered;
}


//ingresar al carrito un producto

let carrito = new Carrito(1);

//tengo que hacer que con un boton el producto ingrese al carrito y se sume

//buttons
let botones = document.querySelectorAll(".botonDecompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        console.log(e.target.id)
        let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id);
        carrito.productos.push(productoSeleccionado);
        console.log(carrito)
    })
});

