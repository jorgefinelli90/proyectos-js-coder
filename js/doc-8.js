function cambiarImagenDer(imagen){
    var imagenGrandeDer= document.getElementById("grande-der");
    imagenGrandeDer.src = imagen.src;
}

//Carrito------------------------------------------------------

//CLASES
class Producto {
    constructor(id, nombre, imagen, precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.productos.length; i++) {
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
            <p class="card-text card-desc">Sweater escote redondo, menguado. Tejido de tacto suave, disponible en amplia paleta de colores.. Composición: 50% algodón 50% acrílico</p>
            <p class="card-text"> Precio: $${producto.precio}</p>
            <a href="##" class="btn btn-outline-dark botonDeCompra" id="${producto.id}">Agregar al carrito</a>
            <a href="##" class="btn btn-outline-dark botonDeCompra" >X</a>
            </div>
    </div>
    `;
    return cardRendered;
}

function limpiarCarrito() {
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";
}

function actualizarCarrito(carrito) {
    let divCarrito = document.querySelector("#carrito");
    let shopBag = document.querySelector("#shop-bag");
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += renderCard(producto);
    })
    shopBag.innerHTML = ` <p>Total a pagar: $${carrito.calcularTotal()}</p>`;
    divCarrito.innerHTML += ` <h2>Total: $${carrito.calcularTotal()}</h2>`;
}



//cargar carrito existente
window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    })
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});


const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

 //Evento para borrar un elemento del carrito

 function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();

}




/* function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderCard();
    // Borra LocalStorage
    localStorage.clear();

}


const DOMbotonVaciar = document.querySelector('#boton-vaciar');
DOMbotonVaciar.addEventListener('click', vaciarCarrito); */

// generacion catalogo de productos
let catalogoProductos = [];
let producto1 = new Producto(1, "Pantalon Deep Manhattan", "img-targ-1.jpg" , 12000);
let producto2 = new Producto(2, "Campera Lion", "img-targ-2.jpg" , 15000);
let producto3 = new Producto(3, "Campera Heavy Rocko", "img-targ-3.jpg" , 25000);
let producto4 = new Producto(4, "Remera Kenzie Kraft", "img-targ-4.jpg" , 8000);
let producto5 = new Producto(5, "Buzo Kendall", "img-targ-5.jpg" , 20000);
let producto6 = new Producto(6, "Buzo Kendall", "img-targ-5.jpg" , 20000);
let producto7 = new Producto(7, "Buzo Kendall", "img-targ-5.jpg" , 20000);
let producto8 = new Producto(8, "Buzo Kendall", "img-targ-5.jpg" , 20000);
let producto9 = new Producto(9, "Buzo Kendall", "img-targ-5.jpg" , 20000);
catalogoProductos.push(producto1);
catalogoProductos.push(producto2);
catalogoProductos.push(producto3);
catalogoProductos.push(producto4);
catalogoProductos.push(producto5);
catalogoProductos.push(producto6);
catalogoProductos.push(producto7);
catalogoProductos.push(producto8);
catalogoProductos.push(producto9);

//generar una card por producto


let cardsDiv = document.querySelector("#cards");
catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
});



//ingresar al carrito un producto
let carrito = new Carrito(1);
//tengo que hacer que con un boton el producto ingrese al carrito y se sume
let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        console.log(e.target.id)
        let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id);
        
        carrito.productos.push(productoSeleccionado);
        console.log(carrito)
        limpiarCarrito();
        actualizarCarrito(carrito);
        renovarStorage();
        
    })
});

//vaciar carrito

let botonvaciar = document.querySelector("#boton-vaciar");
botonvaciar.addEventListener("click", (e) => {
    limpiarCarrito(); //limpiar carrito
    carrito.productos = []; //limpiar productos
    actualizarCarrito(carrito); //actualizar carrito
    renovarStorage(); //limpiar storage
});

//Ejemplo de operadores ternarios

carrito.productos.length === 0 && console.log("El carrito está vacío!")





