if (!localStorage.getItem("carrito")) {

    localStorage.setItem("carrito", JSON.stringify([]));

}


function calcularPrecioTotal(carrito) {

    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);

}


function añadirAlCarrito() {

    let carrito = JSON.parse(localStorage.getItem("carrito"));

    const producto = {

        nombre: "Remera Rockies",

        precio: 23500,

        cantidad: 1

    };


    const index = carrito.findIndex(item => item.nombre === producto.nombre);

    if (index !== -1) {

        carrito[index].cantidad += 1;

        console.log(`Se ha añadido otra prenda: ${producto.nombre}. Cantidad actual: ${carrito[index].cantidad}`);

    } else {

        carrito.push(producto);

        console.log(`Se ha añadido la prenda: ${producto.nombre}. Precio: ${producto.precio}`);

    }


    localStorage.setItem("carrito", JSON.stringify(carrito));

    const precioTotal = calcularPrecioTotal(carrito);

    console.log(`Precio total del carrito: ${precioTotal}`);

    actualizarDOM(carrito);

}


function quitarDelCarrito(nombre) {

    let carrito = JSON.parse(localStorage.getItem("carrito"));

    const index = carrito.findIndex(item => item.nombre === nombre);

    if (index !== -1) {

        if (carrito[index].cantidad > 1) {

            const precioAntes = carrito[index].precio;

            carrito[index].cantidad -= 1;

            console.log(`Se ha quitado una prenda: ${nombre}. Cantidad actual: ${carrito[index].cantidad}`);

            console.log(`Precio descontado: ${precioAntes}.`);

        } else {

            console.log(`Se ha eliminado la prenda: ${nombre}. Precio: ${carrito[index].precio}.`);

            carrito.splice(index, 1);

        }

    }


    localStorage.setItem("carrito", JSON.stringify(carrito));

    const precioTotal = calcularPrecioTotal(carrito);

    console.log(`Precio total del carrito: ${precioTotal}`);

    actualizarDOM(carrito);

}


function actualizarDOM(carrito) {

    const carritoContainer = document.getElementById("carritoContainer");

    carritoContainer.innerHTML = "";

    carrito.forEach(item => {

        const div = document.createElement("div");

        div.innerText = `${item.nombre} - Cantidad: ${item.cantidad}`;

        const botonQuitar = document.createElement("button");

        botonQuitar.innerText = "Quitar";

        botonQuitar.addEventListener("click", () => quitarDelCarrito(item.nombre));

        div.appendChild(botonQuitar);

        carritoContainer.appendChild(div);

    });

}


document.addEventListener("DOMContentLoaded", () => {

    const botonAñadir = document.querySelector(".botonAñadir button");

    botonAñadir.addEventListener("click", añadirAlCarrito);

    const carrito = JSON.parse(localStorage.getItem("carrito"));

    actualizarDOM(carrito);

});


document.getElementById("searchForm").addEventListener("submit", function(event) {

    event.preventDefault();


    const searchInput = document.getElementById("searchInput").value.toLowerCase(); 

    const articles = {

        "remera": "pages/prendaArticulo.html",

        "remera rockies": "pages/prendaArticulo.html",

        "remeras": "pages/hombre.html",

        "remeras hombre": "pages/hombre.html",

    };


    if (articles[searchInput]) {

        window.location.href = articles[searchInput]; 

    } else {

        alert("Artículo no encontrado."); 

    }

});