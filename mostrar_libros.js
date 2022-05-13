function consultarLibros() {
    const dataForSelect = {
        operation: "select",
        table: "libros"
    };

    const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDelibroTerminado);
}

function consultarInfoDelibroTerminado(response) {
    
    let divlibros = document.createElement("div");
    divlibros.className = "libros";

    for (let i = 0; i < response.values.length; i++) {
        let divlibro = document.createElement("div");
        divlibro.className = "libro";
        divlibro.setAttribute("onclick", "clickSobrelibro(" + response.values[i].id_libro + ")");

        let nombre_libro = document.createElement("div");
        nombre_libro.innerHTML = response.values[i].nombre; 

        divlibro.append(nombre_libro);

        let sinopsis = document.createElement("div");
        sinopsis.innerHTML = "Sinopsis: " + response.values[i].sinopsis;
        divlibro.append(sinopsis);

        let anio = document.createElement("div");
        anio.innerHTML = "Fecha de lanzamiento:" + response.values[i].anio;
        divlibro.append(anio);

        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imágenes/" + response.values[i].Imagen);

        divlibro.append(imagen);

        let enlace = document.createElement("a");
        enlace.setAttribute("href", "info-libro.html?id=" + response.values[i].id_libro);
        enlace.innerHTML = "Más información";

        let parrafoParaElEnlace = document.createElement("p");
        parrafoParaElEnlace.append(enlace);

        divlibro.append(parrafoParaElEnlace);

        divlibros.append(divlibro);
    }

    document.getElementById("resultado").append(divlibros);
}

function clickSobrelibro(id) {
    window.location = "info-libro.html?id=" + id;
}

consultarLibros();