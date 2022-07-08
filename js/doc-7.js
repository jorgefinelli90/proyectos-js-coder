/* 

let imgProdUno = document.getElementById("img-1");
let imgProdDos = document.getElementById("img-2");
let imgProdTres = document.getElementById("img-3");
let imgProdCuatro = document.getElementById("img-4");
let imgProdCinco = document.getElementById("img-5");


const productos = [{sku: 1 , img: "../assets/img/img-targ-1.jpg",  nombre: "Pantalon Deep Manhattan", precio: 12000 },
                   {sku: 2 , img: "../assets/img/img-targ-2.jpg",  nombre: "Campera Lion", precio: 15000 },
                   {sku: 3 , img: "../assets/img/img-targ-3.jpg",  nombre: "Campera Heavy Rocko"  , precio: 25000},
                   {sku: 4 , img: "../assets/img/img-targ-4.jpg",  nombre: "Remera Kenzie Kraft" , precio: 8000},
                   {sku: 5 , img: "../assets/img/img-targ-5.jpg",  nombre: "Buzo Kendall" , precio: 20000}];

for (const producto of productos) { 
    let cards = document.createElement('div')
    cards.classList.add('card');
    cards.innerHTML = `<div class="card-img">
                            <img src=${producto.img} width="200px" alt="">
                        </div>
                        <div class="card-text">
                            <p class="texto-card">${producto.nombre}</p>
                            <div class="precio-cart">
                                <p class="texto-card">$${producto.precio}</p>
                            </div>
                        </div> `;
    document.body.appendChild(cards);
}

let sku1 = "Informacion de Producto: \n\n sku: 1  \n nombre: Pantalon Deep Manhattan \n precio: $12000 "
let sku2 = "Informacion de Producto: \n\n sku: 2  \n nombre: Campera Lion \n precio: $15000 "
let sku3 = "Informacion de Producto: \n\n sku: 3  \n nombre: Campera Heavy Rocko   \n precio: $25000"
let sku4 = "Informacion de Producto: \n\n sku: 4  \n nombre: Remera Kenzie Kraft  \n precio: $8000"
let sku5 = "Informacion de Producto: \n\n sku: 5  \n nombre: Buzo Kendall  \n precio: $20000"

 */
/* 
imgProdUno.addEventListener("click", () => {
    alert(sku1);
    })
imgProdDos.addEventListener("click", () => {
    alert(sku2);
    })
imgProdTres.addEventListener("click", () => {
    alert(sku3);
    })
imgProdCuatro.addEventListener("click", () => {
    alert(sku4);
    })
imgProdCinco.addEventListener("click", () => {
    alert(sku5);
    })

 */

    function cambiarImagen(imagen){
    var imagenGrande = document.getElementsByClassName("grande");
       imagenGrande.src = imagen.src;
    }
    
    

