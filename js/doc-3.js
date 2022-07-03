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

function Personaje(nombre, vida, poder) {
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

/* 
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

*/

//------------------------------------------------------------------------------------------------------------
/* 
let a = parseFloat(prompt("ingrese primer numero"))
let b = parseFloat(prompt("ingrese segundo numero"))

function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    } else if (op == "multiplica") {
        return (a, b) => a * b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")
let multiplica = asignarOperacion("multiplica")

alert(suma(a, b))

console.log( suma(a, b) )  //  10
console.log( resta(a, b) )  //  5
console.log( multiplica(a, b) )  //  5 

*/
//--------------------------------------------------------------------------------------------------------------
/* function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

const numeros= [1, 2, 3, 4]

porCadaUno(numeros, console.log)
// 1
// 2
// 3
// 4
let total = 0
//--------------------------------------------------------------------------------------------------------------
function acumular(num) {
    total += num
}

porCadaUno(numeros, acumular)
console.log(total) // 10


//----------find-----------------------------------------------------------

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "Javascript")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined 


//----------filter-----------------------------------------------------------

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado)


console.log(resultado2) // []


//----------some----------------------------------------------------------

console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false



//----------map---------------------------------------------------------

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]
const precios = cursos.map((el) => el.precio)
console.log(precios)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]


//----------reduce---------------------------------------------------------
const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21

*/
/* 
const productos = [
    {nombre: "sweater", precio: 15},
    {nombre: "Campera Lion", precio: 15},
]

let busqueda = (prompt("ingrese el valor"))
const resultado = productos.find((producto) => producto.nombre === busqueda)
const resultadoDos = productos.find((producto) => producto.nombre === "Campera Lion")

console.log(resultado);
console.log(resultadoDos); */

/* console.dir(document);
console.dir(document.tittle);

let divTitulos = document.getElementsByClassName("titulos")
let divTituloDesafio = document.getElementsByClassName("titulo-desafio")

console.dir(divTitulos);
console.log(divTitulos.innerHTML);
console.dir(divTituloDesafio);
console.dir(divTituloDesafio.innerHTML); */
/* 
let listaContenedores = document.getElementsByClassName("contenedor-ejemplo")
console.log(listaContenedores);
console.log(listaContenedores[2].innerHTML);

//for(const elemento of listaContenedores){
//    console.log(elemento.innerHTML);
//}

listaContenedores.innerHTML = <h2>Hola mundo</h2> */
/* 
// ejemplo-5
let parrafo = document.getElementById("parrafo-5")
console.log(parrafo.innerText);
parrafo.innerText = "Hola, este es un parrafo modificado"
console.log(parrafo.innerText); 
*/
/* 
let contenedor = document.getElementById("contenedor-6")
contenedor.innerHTML = "<h2>Hola mundo</h2>"
 */


//* Este algoritmo se encarga de mostrar el menu y de solicitar el número de cabañas que desea arrendar.
//* Si el usuario ingresa un número que no está entre 1 y 2, se le mostrará un mensaje de error.
//* Si el usuario ingresa un número que es igual a ESC, se le mostrará un mensaje de salida.
//* Luego pedirá la cantidad de adultos con un máximo de la cantidad de personas que puede arrendar.
//* Luego pedirá la cantidad de niños con un máximo de la cantidad de personas que puede arrendar.
//* Si el usuario ingresa un número que no está entre 0 y la cantidad de personas que puede arrendar, se le mostrará un mensaje de error.


//inicio del código
// declaramos las variables de los precios
const priceOne = 60000;
const priceTwo = 120000;

alert('Bienvenido/a a nuestro programa de cotización de cabañas');
let userName = prompt('Ingrese nombre de usuario '); // El usuario ingresa su nombre
alert(`Hola ${userName.toUpperCase()} bienvenido/a`); // mensaje de bienvenida

alert('A continuación elija la cantidad de personas que desean arrendar');
let adults = parseInt(prompt('Ingrese el número de adultos'));
let kids = parseInt(prompt('Ingrese el número de niños'));


// Funciones de orden superior
const menu = [{ // Lista de menú de opciones del día c/ entrada piscina 
    id: 1,
    name: 'Desayuno',
    price: 3500
}, {
    id: 2,
    name: 'Almuerzo',
    price: 8000
}, {
    id: 3,
    name: 'Once',
    price: 3500
}, ];

// Listas
class User {
    constructor(name, lastName, age) {
        this.name = name.toUpperCase();
        this.lastName = lastName.toUpperCase();
        this.age = age;
    }
}

function registerUsers() {
    let numberUsers = adults + kids;
    let users = [];
    for (let i = 0; i < numberUsers; i++) {
        let name = prompt('Ingrese el nombre de la persona a registrar: ');
        let lastName = prompt('Ingrese el apellido');
        let age = parseInt(prompt('Ingrese la edad'));
        let user = new User(name, lastName, age);
        users.push(user);
    }
    return users;
}

function registeredUsers(users) {
    for (const user of users) {
        console.log(user);
        alert(`Nombre: ${user.name} \n Apellido: ${user.lastName} \n Edad: ${user.age}`);
    }
}

function registration() {
    let users = registerUsers();
    registeredUsers(users);
}

// funciones

function oneCabin(adults, kids) { // cotizamos una cabaña
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No se puede arrendar una cabañas sin adultos');
    } else if (total > 6) {
        /* Una alerta que se activa cuando el número de personas supera las 6. */
        alert('Sobrepasa el limite de personas por cabaña (6 personas), contrate dos si desea mas capacidad');
    } else if (total <= 6) { // si el usuario ingresa un número que está entre 1 y 6
        alert(`El total a pagar es: $${priceOne}`);
    } else(total <= 6) { registration(); }

    return total;
}

function twoCabin(adults, kids) { // cotizamos dos cabañas
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No se puede arrendar una cabañas sin adultos');
    } else if (total > 12) {
        /* Una alerta que se activa cuando el número de personas supera las 12. */
        alert('Sobrepasa el limite de personas máximo por cabaña, si son mas personas favor contactar a nuestro personal');
    } else if (total <= 12) { // si el usuario ingresa un número que está entre 1 y 6 independientemente de la cantidad de personas que puede arrendar
        alert(`El total a pagar es: $${priceTwo}`);
    } else(total <= 12) { registration(); }
    return total;
}

function showTotal(total) { //muestra el total de personas
    if (total <= 7 || total <= 13) {
        alert(`El total de personas ingresadas es : ${total}`);
    }
}

function showMenu(menu) { // muestra el menú principal del programa
    let options = prompt(`Estimado/a ${userName.toUpperCase()}, actualmente son ${adults + kids} personas ingresadas. \n \n Elija la opción que desea: \n 1. Una cabaña (hasta 6 personas) \n 2. Dos cabañas (hasta 12 personas) \n \n Escriba (EXIT) para salir`);
    return options;
}

function quotation() { //cotizamos las cabañas y el menú
    let selectedOption = showMenu();
    while (selectedOption !== 'EXIT') {
        if (!isNaN(selectedOption !== '')) {
            selectedOption = parseInt(selectedOption);
            //Switch seleccionar la opción

            switch (selectedOption) {
                case 1: // una cabaña
                    let totalOne = oneCabin(adults, kids); // solicitamos el número de adultos y niños
                    showTotal(totalOne); // mostramos el total de personas
                    break;
                case 2: // dos cabañas
                    let totalTwo = twoCabin(adults, kids); // solicitamos el número de adultos y niños
                    showTotal(totalTwo); // mostramos el total de personas
                    break;
                case 3: // 
                    let
                default:
                    alert('Ingrese la opción 1, 2 o 3 para continuar');
                    selectedOption = showMenu();
                    break;
            }
        } else { // si el usuario ingresa un número que no está entre 1,2 o 3
            alert('Ingrese la opción valida');
        }
        selectedOption = showMenu();
    }
}
/* Llamando a la función principal. */
quotation();
alert(`Adios ${userName.toUpperCase()}. Gracias por usar nuestro servicio de arriendo de cabañas.`);