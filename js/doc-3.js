const personaje = {
    nombre: "spiderman",
    vida: 400,
    poder: 600,
}

/* console.log(personaje)
console.log("nombre personaje: " + personaje.nombre)
 */

/* personaje["vida"]= 100
console.log(personaje["vida"])
 */

//buen ejemplo:

function Personaje(nombre, vida, poder){
    this.nombre = nombre
    this.vida = vida
    this.poder = poder
}

const arquero = new Personaje("Hawkeye", 100, 150)
const velocista = new Personaje("Flash", 150, 250)
/* 
console.log(velocista)
 */

/* arquero.vida = 80
velocista["poder"]=100

console.log(arquero.vida)
console.log(velocista.poder) 
*/
//ejemplos de Metodos en Objetos js.
/* 
let cadena = "HOLA CODER";
//Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);
//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());

 */
/* 
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre + ", mi edad es: " + this.edad + " mi direccion es: " + this.calle)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 743");
persona1.hablar();
persona2.hablar();
 */

/* 
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
// va a devolver todas las propiedas que tenga el objeto persona1
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
 */

//------------------CLASES------------------------
/* 
class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }
}
const persona2 = new Persona("Marge", 36, "Av. Siempre viva 742");
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();
 */

// TERMINAR ESTE EJEMPLO//
/* class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.vendido = false;
    }
    aumentarPrecio(precioAumentar){
        this.precio += precioAumentar;
    }
    vender(){
        this.vendido = true;
    }
    mostrar(){
        console.log("el producto es: "+ this.nombre + "\n el precio es: "+ this.precio + "\n la cantidad es: " + this.cantidad);
    }
    aplicarPromo = (precioDisminuir) => (this.precio -= precioDisminuir);
}

const producto1 = new Producto("Sweater Canton", 100, 3);
const producto2 = new Producto("Campera Lion", 4500, 10);

producto1.mostrar();
producto2.mostrar();

producto2.aumentarPrecio(500)
console.log("precio Campera: " + producto2.precio)

producto1.vender()
console.log("status vendido Sweaters: "+ producto1.vendido)
*/

//---------------------  CLASE 6 ------------------------  CLASE 6 ---------------------------  CLASE 6 ---------------------
/* 
const listaNombres = []

listaNombres.push("Hola") // aca le agregue el elemento "hola" porque el array estaba vacio
listaNombres.push("perritos" , 4, true) //aca le agregue otros elementos, numeros, etc, y se agrego al "hola"



console.log(listaNombres)
*/
//----------------------------------------------------------------------------------------------------------------------------
/* 
const catalogo = [
    { sku: 1, name: "Sweater", precio: 1000},
    { sku: 2,  name: "Buzo", precio: 1500},
    { sku: 3,  name: "campera", precio: 3500}
];

for (const name of catalogo) {
    console.log(name.sku);
    console.log(name.name);
    console.log(name.precio);
}
*/
//----------------------------------------------------------------------------------------------------------------------------
class Producto{
    constructor(nombre, precioCompra, precioVenta, cantidad){
        this.nombre = nombre.toUpperCase()
        this.precioCompra = precioCompra
        this.precioVenta = precioVenta
        this.cantidad = cantidad
    }
}

function agregarProductos(){
    let numeroProductos = parseInt(prompt("cuantos productos deseas ingresar?"))
    let productos = []

    for(let index = 0; index < numeroProductos; index++){
        let nombre = prompt("Ingrese el nombre")
        let precioCompra = parseFloat(prompt("Ingrese el precio de compra"))
        let precioVenta = parseFloat(prompt("Ingrese el precio de venta"))
        let cantidad = parseInt(prompt("Ingrese la cantidad"))

        let productoARegistrar = new Producto(nombre, precioCompra, precioVenta, cantidad)

        productos.push(productoARegistrar)
    }
    console.log(productos)
}

function main(){
    agregarProductos()
}

main()