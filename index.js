document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
        const redirects = {
            "remeras": "./pages/hombre.html", 
            "remera rockies": "./pages/prendaArticulo.html" 
        };
        if (redirects[searchValue]) {
            window.location.href = redirects[searchValue];
        } else {
            alert("No se encontró el ID."); 
        }
    });
});