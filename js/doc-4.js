const productos = [{ sku: 10, producto: "Sweater Canton", precioFull: 12000 , temporada: "Invierno"   },
                  { sku: 20,  producto: "Campera Lion", precioFull: 14050 , temporada: "Invierno"  },
                  { sku: 30,  producto: "Campera Rock", precioFull: 11500 , temporada: "Invierno"  },
                  { sku: 30,  producto: "Remera Iconic", precioFull: 8600 , temporada: "Verano"  },
                  { sku: 40,  producto: "Remera Maison", precioFull: 9500 , temporada: "Verano"  },
                  { sku: 50,  producto: "Jean Fresh", precioFull: 18000 , temporada: "Invierno"  }];

for (const producto of productos) {
    console.log(producto.sku);
    console.log(producto.producto);
    console.log(producto.precioFull);
    console.log(producto.temporada);
}

for (const producto of productos){
    alert("ha seleccionado el producto: " + producto.producto + ", de la temporada: " + producto.temporada + ", con un precio final de: $" + producto.precioFull);
}

