
function nuevaAltaProducto() {
  let cantidadAltas = parseInt(prompt("Ingresar la cantidad de referencias que deseas dar de alta"));
  let altas = [];
  for (let index = 0; index < cantidadAltas; index++) {
    let articulo = prompt("Ingrese el nombre del articulo:");
    let cantidad = prompt("Ingrese el stock a ingresar");
    let color = prompt("Ingrese el color");
    let precioFull = prompt("Ingrese el full price del producto");
    let altaAIngresar = new Alta(articulo,cantidad,color,precioFull);
    //usamos push para agregar un nuevo elemento al array
    altas.push(altaAIngresar);
  }
  return altas;
}

class Alta {
  constructor(articulo, cantidad, color, precioFull) {
    this.articulo = articulo.toUpperCase();
    this.cantidad = cantidad;
    this.color = color;
    this.precioFull = precioFull;
  }
  totalProducto = () => this.cantidad * this.precioFull;
}

function mostrarAltas(altas) {
  for (const producto of altas) {
    console.log("Nueva alta ingresada al Sistema: ")
    console.log(producto);
    console.log("detalles: " + producto.articulo + ", en color: " + producto.color + ", con precio : " + producto.precioFull);
  }
}

//funcion para calcular el valor total de las altas ingresadas
function totalProducto(altas) {
  let sumatoriaCosto = 0;
  for (const producto of altas) {
    sumatoriaCosto += producto.totalProducto();
  }
  return sumatoriaCosto
}

//
function main() {
  let todosLosProductos = nuevaAltaProducto();
  mostrarAltas(todosLosProductos);
  alert("El valor total de las altas ingresadas es de:  $" + totalProducto(todosLosProductos))
  alert("por consola podras ver mas detalles al respecto")
}

main();
