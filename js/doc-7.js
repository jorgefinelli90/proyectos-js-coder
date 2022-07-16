

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
//Carrito------------------------------------------------------

//CLASES
class Producto{
    constructor(id, nombre, imagen, precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}
class Carrito{
    constructor(id){
        this.id = id;
        this.productos = [];
    }
    calcularTotal(){
        let total = 0;
        for(let i = 0; i < this.productos.length; i++){
            total = total + this.productos[i].precio;
        }
        return total;
    }
}
//Funciones------------------------------------------------------
function renderCard(producto){
    let cardRendered = `
    <div class="card d-inline-flex div-tarjetas-producto m-3" style="width: 18rem;">
<img src="../assets/img/${producto.imagen}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${producto.nombre}</h5>
<p class="card-text">Sweater escote redondo, menguado. Tejido de tacto suave, disponible en amplia paleta de colores.. Composición: 50% algodón 50% acrílico</p>
<pcard-text"> Precio: $${producto.precio}</p>
<a href="##" class="btn btn-outline-dark botonDecompra" id="${producto.id}">Agregar al carrito</a>
</div>
</div>
`;
return cardRendered;
}

function limpiarCarrito(){
    let divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML = "";
}

function actualizarCarrito(Carrito){
    let divCarrito = document.getElementById("#carrito");
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += renderCard(producto);
    });
    divCarrito.innerHTML += `<h2>Total: $${carrito.calcularTotal()}</h2>`;
}

//cargar carrito existente
window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem('carrito'));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    });
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});

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
<a href="#" class="btn btn-outline-dark botonDeCompra">Agregar al carrito</a>
</div>
</div>
`;
catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
});



//ingresar al carrito un producto
let carrito = new Carrito(1);
//tengo que hacer que con un boton el producto ingrese al carrito y se sume
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


