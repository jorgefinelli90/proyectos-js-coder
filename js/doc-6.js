let nombreBienvenida = prompt("Hola, ingrese su nombre");
let titulo = document.getElementById("titulo")
titulo.innerText = "Hola Coder!";


const productos = [{  img: "../assets/img/img-targ-1.jpg",  nombre: "Pantalon Deep Manhattan", precio: 12000 },
                   {  img: "../assets/img/img-targ-2.jpg",  nombre: "Campera Lion", precio: 15000 },
                   {  img: "../assets/img/img-targ-3.jpg",  nombre: "Campera Heavy Rocko"  , precio: 25000},
                   {  img: "../assets/img/img-targ-4.jpg",  nombre: "Remera Kenzie Kraft" , precio: 8000},
                   {  img: "../assets/img/img-targ-5.jpg",  nombre: "Buzo Kendall" , precio: 20000}];

for (const producto of productos) { 
    let cards = document.createElement('div')
    cards.classList.add('card');
    cards.innerHTML = `<div class="card-img"><img src=${producto.img} width="250px" alt=""></div>
                            <div class="card-text"><p class="texto-card">${producto.nombre}</p>
                            <div class="precio-cart">
                            <p class="texto-card">$${producto.precio}</p></div></div> `;
    document.body.appendChild(cards);
    
}








/* 
let sectionCards = document.createElement("section");
sectionCards.classList.add('d-flex.justify-content-around');


<div>
  <section class="cards">
    <div class="card-1">
      <div class="card-img">
        <img src="../assets/img/img-targ-1.jpg" width="250px" alt="">
      </div>
    <div class="card-text">
      <p class="texto-card">Pantalon Deep Manhattan</p>
      <div class="precio-cart">
        <p class="texto-card">$16000</p></div><p class="texto-card">Comprar</p></div></section></div>
*/
/* 
<div class="card-x">
    <div class="card-img"><img src="../assets/img/img-targ-5.jpg"width="250px" alt=""></div>
    <div class="card-text"><p class="texto-card">Buzo Kendall</p><div class="precio-cart"><p class="texto-card">$20.000</p><p class="texto-card">Comprar</p></div></div>
</div> 
                */