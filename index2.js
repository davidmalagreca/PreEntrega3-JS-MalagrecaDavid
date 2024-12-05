document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
        const redirects = {
            "remeras": "./hombre.html",
            "remera rockies": "./prendaArticulo.html"
        };
        if (redirects[searchValue]) {
            window.location.href = redirects[searchValue];
        } else {
            alert("No se encontró lo buscado.");
        }
    });

    let cantidadRemeras = 0;
    let precioAcumulado = 0;
    const precioRemera = 23500;

    const botonAñadir = document.querySelector("#pArticulo .botonAñadir button");
    const botonDescuento = document.createElement("button");
    botonDescuento.textContent = "Descontar -";
    document.querySelector("#pArticulo .botonAñadir").appendChild(botonDescuento);

    function actualizarCarrito() {
        const carritoEmoji = document.getElementById("carritoEmoji");
        if (cantidadRemeras > 0) {
            carritoEmoji.textContent = `🛒 (${cantidadRemeras})`;
        } else {
            carritoEmoji.textContent = `🛒 (-)`;
        }
    }

    botonAñadir.addEventListener("click", function() {
        cantidadRemeras++;
        precioAcumulado += precioRemera;
        console.log(`Cantidad de remeras: ${cantidadRemeras}`);
        console.log(`Precio acumulado: $${precioAcumulado}`);
        actualizarCarrito(); 
    });

    botonDescuento.addEventListener("click", function() {
        if (cantidadRemeras > 0) {
            cantidadRemeras--;
            precioAcumulado -= precioRemera;
            console.log(`Cantidad de prendas: ${cantidadRemeras}`);
            console.log(`Precio total: $${precioAcumulado}`);
            actualizarCarrito(); 
        } else {
            console.log("No hay prendas para descuento");
        }
    });
});