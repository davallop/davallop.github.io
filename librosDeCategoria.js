function consultarCategoria() {
    const urlParams = new URLSearchParams(window.location.search);
    const idCategoria = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "categorias",
        key: idCategoria
    };

    const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarCategoriaTerminado);

}

function consultarCategoriaTerminado(response)  {

    document.getElementById("categoria").innerHTML = response.value.nombre;

    const dataForSelect = {
        operation: "select",
        table: "libros"
    };

    const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarCategoriasDeLibroTerminado);
}

function consultarCategoriasDeLibroTerminado(response) {

    const urlParams = new URLSearchParams(window.location.search);
    const idCategoria = urlParams.get("id");

    for (let i = 0; i < response.values.length; i++) {
        if (idCategoria == response.values[i].id_categoria) {
            let divlibro = document.createElement("div");
            divlibro.className="libro";

            let parrafoNombre = document.createElement("p");
            parrafoNombre.innerHTML = response.values[i].nombre;
            divlibro.append(parrafoNombre);

            let imagenLibro = document.createElement("img");
            imagenLibro.setAttribute("src", "imágenes/"+ response.values[i].Imagen);
            divlibro.append(imagenLibro);

            document.getElementById("libros").append(divlibro);
        }
    }
}


consultarCategoria();