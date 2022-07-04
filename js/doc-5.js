function saludo() {
    alert('Bienvenido a Burgues Indumentaria');
}

function datoIncorrecto() {
    alert('eldato ingresado es incorrecto');
}
//variables de precios varios
let precioSweater = 3000
let precioCampera = 4000
let precioSaco = 8000
let precioRemera = 2000
let precioEnvio = 400

//const para consultar si quiere un producto adicional
const algoMas = () => {
        let opcion = prompt("Desea comprar algo mas? \n 1: SI 2: NO")
        if (opcion == "1") {
            consultaShop();
        } else {
            alert("Gracias por su compra")
        }
    }
    //funcion de envio
function envio() {
    let seleccionEnvio = parseInt(prompt(nombreUsuario + " deseas pagar envio a domicilio? Costo de envio: $400 \n 1: SI \n 2:NO"));
    switch (seleccionEnvio) {
        case 1:
            precioConEnvio = precioProducto + precioEnvio;
            alert("El costo del producto es de  $" + precioProducto + "\n el envio es:  $" + precioEnvio + "\n el precio total con envio es: \n " + precioConEnvio)
            break;
        case 2:
            alert("Usted selecciono Retiro pickup");
            algoMas();
            break;
        default:
            alert('Opcion no valida');
            break
    }
}

function registroAltas() {
    let altasGeneradas = darDeAltaProducto();
    productoDadoDeAlta(altasGeneradas);
}
//Saludamos al usuario
saludo()
    //le solicitamos al usuario su nombre
let nombreUsuario = prompt("ingrese su nombre")
    //le ofrecemos al usuario ver el catalogo o seleccionar articulos
vistaCatalogo = parseInt(prompt("Hola " + nombreUsuario + " bienvenido a nuestro sistema de catalogo \n 1- Dar de Alta producto  \n 2- Ver catalogo \n 3- Salir"))

const consultaShop = () => {
    if (nombreUsuario) {
        let catalogo = parseInt(prompt("Hola " + nombreUsuario + "que producto deseas comprar: \n 1. Sweater Canton: $ " + precioSweater + "\n 2. Campera Lion: $ " + precioCampera + "\n 3. Saco Megan: $ " + precioSaco + "\n 4. Remera Basic: $ " + precioRemera));
        switch (catalogo) {
            case 1:
                alert("Usted selecciono un Sweater Canton");
                precioProducto = precioSweater
                envio()
                algoMas()
                break;
            case 2:
                alert("Usted selecciono una Campera Lion");
                precioProducto = precioCampera
                envio()
                algoMas()
                break;
            case 3:
                alert("Usted selecciono un Saco Megan");
                precioProducto = precioSaco
                envio()
                algoMas()
                break;
            case 4:
                alert("Usted selecciono una Remera Basic");
                precioProducto = precioRemera
                envio()
                algoMas()
                break;
            default:
                alert('Opcion no valida');
                nombre();
                break
        }
    } else {
        alert("nombre ingresado incorrecto")
        return
    }
}

if (vistaCatalogo == 1) {
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
    darDeAltaProducto();
    registroAltas();
}
if (vistaCatalogo == 2) {
    consultaShop();
} else {
    datoIncorrecto()
}
const listaPrecios = [

    {
        sku: 1235,
        nombre: 'Buzo Canton',
        precio: 15000,
        temporada: 'invierno'
    },
    {
        sku: 1236,
        nombre: 'Campera Lion',
        precio: 19000,
        temporada: 'media estacion'
    },
    {
        sku: 1237,
        nombre: 'Remera pocket',
        precio: 8000,
        temporada: 'verano'
    },
    {
        sku: 1238,
        nombre: 'Jean Royal Manhattan',
        precio: 13500,
        temporada: 'verano'
    },
];