/* --------------------
function saludo() {
    alert('Bienvenido a Burgues Indumentaria');
}
function datoIncorrecto (){
    alert('eldato ingresado es incorrecto');
} 
//Saludamos al usuario
saludo()
//le solicitamos al usuario su nombre
let nombre = prompt("ingrese su nombre")
let productos = []
class Producto {
    constructor(nombre, precioFull, cantidad) {
        this.nombre = nombre.toUpperCase()
        this.precioFull = precioFull
        this.cantidad = cantidad
    }
}
function selecProduct(productos) {

    for(const productos of productos) {
        console.log(productos.nombre + " " + productos.precioFull + " " + productos.cantidad)
    }
}

//le ofrecemos al usuario ver el catalogo o seleccionar articulos
vistaCatalogo = parseInt(prompt("Hola "+nombre+ " bienvenido a nuestro catalogo online \n 1- Agregar Altas  \n 2- Ver catalogo \n 3- Salir"))

vistaCatalogo()
if (vistaCatalogo == 1){
    function agregarProductos(){
        let numeroProductos = parseInt(prompt("Ingrese el numero de productos que desea agregar"))
    
        for (let index = 0; index < numeroProductos; index++) {
            let nombre = prompt("Ingrese el nombre del producto")
            let precioFull = parseFloat(prompt("Ingrese el precio del producto"))
            let cantidad = parseInt(prompt("Ingrese la cantidad del producto"))
    
            let productoARegistrar = new Producto(nombre, precioFull, cantidad)
            productos.push(productoARegistrar)
        }

        let altaNueva = new Producto("Camisa Toshi", 12000, 4)
        productos.unshift(altaNueva)

        return productos
}
function mostrarProductos(productos) {

    for(const producto of productos) {
        console.log(producto)
        alert(producto + producto.nombre)
        console.log(producto.nombre)
    }
}

function main() {
    let altaRegistrada = agregarProductos()
    mostrarProductos(altaRegistrada)
}
main()
}
else if(vistaCatalogo == 2){
    console.log(producto)
}

else{
    datoIncorrecto()
}

 */


let numeroPrendas = prompt("Ingrese el numero de referencias para dar de alta")
class Altas {
    constructor(nombre, precioCosto, sku, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precioCosto = precioCosto;
        this.sku = sku.toUpperCase();
        this.cantidad = cantidad;
    }
}

function darDeAltaProducto() {
    let altasGeneradas = [];
    for (let i = 0; i < numeroPrendas; i++) {
        let nombre = prompt("Ingrese el nombre del producto que ingreso al deposito");
        let precioCosto = prompt("ingrese el precio de costo");
        let sku = prompt("ingrese el sku del producto");
        let cantidad = prompt("ingrese la cantidad de productos");
        let alta = new Altas(nombre, precioCosto, sku, cantidad);
        altasGeneradas.push(alta);
    }
    return altasGeneradas;
}

function productoDadoDeAlta(altasGeneradas) {
    for (const alta of altasGeneradas) {
        console.log(alta);
        alert(`Alta Cargada correctamente. Detalles: \n Producto:  ${alta.nombre} \n Precio de costo: ${alta.precioCosto} \n SKU: ${alta.sku} \n Cantidad: ${alta.cantidad}`);
    }
}

function registroAltas() {
    let altasGeneradas = darDeAltaProducto();
    productoDadoDeAlta(altasGeneradas);
}

darDeAltaProducto();
productoDadoDeAlta();
registroAltas(Altas);