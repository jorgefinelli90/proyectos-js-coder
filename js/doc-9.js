function cambiarImagenDer(imagen){
    var imagenGrandeDer= document.getElementById("grande-der");
    imagenGrandeDer.src = imagen.src;
}

//Carrito------------------------------------------------------

const baseDeDatos = [
    {id: 1, nombre: 'Pantalon Deep Manhattan', imagen: '../assets/img/img-targ-1.jpg' , precio: 12000},
    {id: 2, nombre: 'Campera Lion', imagen:'../assets/img/img-targ-2.jpg' ,precio: 15000},
    {id: 3, nombre: 'Campera Heavy Rocko', imagen:'../assets/img/img-targ-3.jpg' ,precio: 25000},
    {id: 4, nombre: 'Remera Kenzie Kraft',imagen: '../assets/img/img-targ-4.jpg' ,precio: 8000},
    {id: 5, nombre: 'Buzo Kendall', imagen:'../assets/img/img-targ-5.jpg' ,precio: 20000},
    {id: 6, nombre: 'Buzo Kendall', imagen:'../assets/img/img-targ-5.jpg' ,precio: 20000},
    {id: 7, nombre: 'Buzo Kendall', imagen:'../assets/img/img-targ-5.jpg' ,precio: 20000},
    {id: 8, nombre: 'Buzo Kendall', imagen:'../assets/img/img-targ-5.jpg' ,precio: 20000},
    {id: 9, nombre: 'Buzo Kendall', imagen: '../assets/img/img-targ-5.jpg' ,precio: 20000},
];

let carrito = []
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;

//---------------------------------------------------------------------------------------------------------------------

function renderizarProductos(){
    baseDeDatos.forEach((info) => {
        //estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        //tarjeta
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        //titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        //imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute(`src` , info.imagen);
        //precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;
        //boton
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Agregar al carrito';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', agregarProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

//evento para añadir produycto al carrito

    function agregarProductoAlCarrito(evento){
        carrito.push(evento.target.getAttribute('marcador'));
        renderizarCarrito();
        agregadoAlCarrito();
        AgregadoAlCarritoresumen();
        guardarCarritoEnLocalStorage();
    }


//renderizar carrito

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
             return itemId === item ? total += 1 : total;
        }, 0);
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
        let shopBag = document.querySelector("#shop-bag");
        shopBag.innerHTML = `<span class="m-2">Total: `+ calcularTotal() +`</span>`;
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}



        //Evento para borrar un elemento del carrito

        function borrarItemCarrito(evento) {
            const id = evento.target.dataset.item;
            carrito = carrito.filter((carritoId) => {
                return carritoId !== id;
            });
            renderizarCarrito();
            guardarCarritoEnLocalStorage();
            }
    
            function calcularTotal() {
                return carrito.reduce((total, item) => {
                    const miItem = baseDeDatos.filter((itemBaseDatos) => {
                        return itemBaseDatos.id === parseInt(item);
                    });
                    return total + miItem[0].precio;
                }, 0).toFixed(2);
            }

            //Vacia el carrito y vuelve a dibujarlo
            
            function vaciarCarrito() {
                carrito = [];
                renderizarCarrito();
                localStorage.clear();
            }

            function guardarCarritoEnLocalStorage () {
                miLocalStorage.setItem('carrito', JSON.stringify(carrito));
            }

            function cargarCarritoDeLocalStorage () {
                if (miLocalStorage.getItem('carrito') !== null) {
                    carrito = JSON.parse(miLocalStorage.getItem('carrito'));
                }
            }
            // Eventos
            DOMbotonVaciar.addEventListener('click', vaciarCarrito);

            // Inicio
            cargarCarritoDeLocalStorage();
            renderizarProductos();
            renderizarCarrito();
            //---------------------------------------------------------------------------------------------------------------------

            /*------------- sweet alert -------------*/

            function agregadoAlCarrito(id){
                Toastify({
                    text: `Producto agregado al carrito`,
                    duration: 2000,
                    newWindow: false,
                    close: false,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                }
            
            function AgregadoAlCarritoresumen(id){
                Swal.fire({
                    position: 'bottom-start',
                    html: '<aside class="col">'+
                    '<h2>Gracias por su compra</h2>'+
                    '<ul id="carrito" class="list-group"></ul>'+
                    '<hr>'+
                    '<p class="text-right">Total: <span id="total">'+calcularTotal()+ '</span>&dollar; </p>'+  
                    '</aside>' ,
                    imageHeight: 500,
                    confirmButtonText: 'Seguir comprando',
                    duration: 2000,
                  })
                }