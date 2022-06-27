/*
class Producto {
    constructor(nombre, precioCompra, precioVenta, cantidad) {
      this.nombre = nombre.toUpperCase();
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidad = cantidad;
    }
    calcularCosto = () => this.cantidad * this.precioCompra;
  }
  
  function agregarProductos() {
    let numeroProductos = parseInt(
      prompt("Cuantos productos necesita registrar")
    );
    let productos = [];
    for (let index = 0; index < numeroProductos; index++) {
      let nombre = prompt("Ingrese el nombre");
      let precioCompra = prompt("Ingrese el precio de compra");
      let precioVenta = prompt("Ingrese el precio de venta");
      let cantidad = prompt("Ingrese la cantidad");
      let productoARegistrar = new Producto(
        nombre,
        precioCompra,
        precioVenta,
        cantidad
      );
      productos.push(productoARegistrar);
    }
    return productos;
  }
  
  function mostrarProductos(productos) {
    for (const producto of productos) {
      console.log(producto);
      console.log(producto.nombre);
    }
  }

  function main() {
    let productos = agregarProductos();
    mostrarProductos(productos);
    alert("El costo total de los productos es: " + calcularCosto(productos))
  }
  
  main();

----------------------------------------------------
 class Producto {
    constructor(nombre, precioCompra, precioVenta, cantidad) {
      this.nombre = nombre.toUpperCase();
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidad = cantidad;
, cantidad: 2
    calcularCosto = () => this.cantidad * this.precioCompra;
  }
  
  function agregarProductos() {
    let numeroProductos = parseInt(
      prompt("Cuantos productos necesita registrar")
    );
    let productos = [];
    for (let index = 0; index < numeroProductos; index++) {
      let nombre = prompt("Ingrese el nombre");
      let precioCompra = prompt("Ingrese el precio de compra");
      let precioVenta = prompt("Ingrese el precio de venta");
      let cantidad = prompt("Ingrese la cantidad");
      let productoARegistrar = new Producto(
        nombre,
        precioCompra,
        precioVenta,
        cantidad
      );
      productos.push(productoARegistrar);
    }
    return productos;
  }
  
  function mostrarProductos(productos) {
    for (const producto of productos) {
      console.log(producto);
      console.log(producto.nombre);
    }
  }
  
  function calcularCosto(productos) {
    let sumatoriaCosto = 0;
    for (const producto of productos) {
      sumatoriaCosto += producto.calcularCosto();
    }
    return sumatoriaCosto
  }
  
  function main() {
    let productos = agregarProductos();
    mostrarProductos(productos);
    alert("El costo total de los productos es: " + calcularCosto(productos))
  }
  
  main();


  class Producto {
    constructor(sku, nombreProducto, precioFull, temporada, cantidad) {
      this.sku = sku;
      this.nombreProducto = nombreProducto.toUpperCase();
      this.precioFull = precioFull;
      this.temporada = temporada;
      this.cantidad = cantidad;
    }
    calcularCosto = () => this.cantidad * this.precioCompra;
  }
  
 */

/* 

const productos = [{ sku: 10, producto: "Sweater Canton", precioFull: 12000 , temporada: "Invierno", cantidad: 2},
                  { sku: 20,  producto: "Campera Lion", precioFull: 14050 , temporada: "Invierno", cantidad: 1},
                  { sku: 30,  producto: "Campera Rock", precioFull: 11500 , temporada: "Invierno", cantidad: 5},
                  { sku: 30,  producto: "Remera Iconic", precioFull: 8600 , temporada: "Verano", cantidad: 4},
                  { sku: 40,  producto: "Remera Maison", precioFull: 9500 , temporada: "Verano", cantidad: 1},
                  { sku: 60,  producto: "Jean Fresh", precioFull: 18000 , temporada: "Invierno", cantidad: 6}];

for (const producto of productos) {
    console.log(producto.sku);
    console.log(producto.producto);
    console.log(producto.precioFull);
    console.log(producto.temporada); 
}
for (const producto of productos) {
console.log("Ha seleccionado el producto: " + producto.producto + ", de la temporada: " + producto.temporada + ", con un precio final de: $" + producto.precioFull);
}
 


 
const productos = [{ sku: 10, producto:prompt("ingrese nombre del producto") , precioFull: prompt("ingrese precio del producto") , temporada:prompt("ingrese la temporada"), cantidad:prompt("ingrese el stock")},
                  ];

for (const producto of productos) {
    console.log(producto.sku);
    console.log(producto.producto);
    console.log(producto.precioFull);
    console.log(producto.temporada); 
}
for (const producto of productos) {
console.log("Ha seleccionado el producto: " + producto.producto + ", de la temporada: " + producto.temporada + ", con un precio final de: $" + producto.precioFull);
}
*/
//---------------------------------------//
/* 
class nuevoProducto {
    constructor(nombreProducto, precioFull, temporada, stock) {
      this.nombreProducto = nombreProducto.toUpperCase();
      this.precioFull = precioFull;
      this.temporada = temporada;
      this.stock = stock;
    }
  }

function altaProductos() {
let cantAltas = parseInt(
    prompt("Cuantos productos necesita dar de alta?")
  );
  let productos = [];
  for (let index = 0; index < cantAltas; index++) {
      let nombre = prompt("Ingrese el nombre del producto");
      let precioFull = prompt("Ingrese el precio full del producto");
      let temporada = prompt("Ingrese la temporada del producto");
      let stock = prompt("Ingrese el stock");
      let nuevaAltaProducto = new nuevoProducto(
        nombre,
        precioFull,
        temporada,
        stock
      );
      productos.push(nuevaAltaProducto);
  }
}


function mostrarProductos(productos) {
    for (const producto of productos) {
      console.log(producto);
      console.log(producto.nombre);
    }
}





let nombre = prompt("Hola, ingrese su nombre")
// mediante switch ofrecemos dar de alta o ver el catalogo.
const consultaAltas = () => {
    if (nombre) {
let catalogo = parseInt(prompt("Hola "+nombre+ ", ingrese la opcion valida: \n 1- Alta de producto \n 2- Vista de productos"));
switch (catalogo) {
case 1:
    alert("Usted selecciono ALTA DE PRODUCTO");
    altaProductos();
break;
case 2:alert("Usted selecciono VISTA DE PRODUCTOS");

break;
default:
        alert('Opcion no valida');
        nombre();
        break
}
} else {
    alert("OPCION INCORRECTA")
    return
}
}
consultaAltas();


 */


const productos = [{ sku: 10, producto: "Sweater Canton", precioFull: 12000 , temporada: "Invierno", cantidad: 2},
                  { sku: 20,  producto: "Campera Lion", precioFull: 14050 , temporada: "Invierno", cantidad: 1},
                  { sku: 30,  producto: "Campera Rock", precioFull: 11500 , temporada: "Invierno", cantidad: 5},
                  { sku: 30,  producto: "Remera Iconic", precioFull: 8600 , temporada: "Verano", cantidad: 4},
                  { sku: 40,  producto: "Remera Maison", precioFull: 9500 , temporada: "Verano", cantidad: 1},
                  { sku: 60,  producto: "Jean Fresh", precioFull: 18000 , temporada: "Invierno", cantidad: 6}];

let consulta = parseInt(prompt("Hola, ingrese la opcion valida: \n 1- vista completa \n 2- Vista resumida"));
switch (consulta) {
case 1:
    alert("Usted selecciono VISTA COMPLETA");
    for (const producto of productos) {
        console.log("Producto: " + producto.producto + ", pertenece a la temporada: " + producto.temporada + ", \nTiene precio de: $" + producto.precioFull + ". STOCK: " + producto.cantidad);
        }
break;
case 2:
    alert("Usted selecciono VISTA RESUMIDA");
    console.log(productos.reverse());
break;
default:
        alert('Opcion no valida');
        consulta();
        break;
}

/* 
for (const producto of productos) {
alert("producto: " + producto.producto + ", pertenece a la temporada: " + producto.temporada + ", \nTiene precio de: $" + producto.precioFull + ". STOCK: " + producto.cantidad);
}
 */




