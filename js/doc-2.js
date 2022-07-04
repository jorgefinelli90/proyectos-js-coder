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
    let seleccionEnvio = parseInt(prompt(nombre + " deseas pagar envio a domicilio? Costo de envio: $400 \n 1: SI \n 2:NO"));
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
//variables de precios varios
let precioSweater = 3000
let precioCampera = 4000
let precioSaco = 8000
let precioRemera = 2000
let precioEnvio = 400
    // Solicitamos un nombre al usuario
let nombre = prompt("ingrese su nombre")
    // mediante switch ofrecemos el catalogo de producto
const consultaShop = () => {
    if (nombre) {
        alert("Hola " + nombre + " bienvenido a nuestro catalogo online");
        let catalogo = parseInt(prompt("que producto deseas comprar: \n 1.Sweater Canton: $ " + precioSweater + " \n 2.Campera Lion: $ " + precioCampera + " \n 3.Saco Megan: $ " + precioSaco + " \n 4.Remera Basic: $ " + precioRemera));
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
consultaShop();