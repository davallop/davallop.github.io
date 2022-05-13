function consultarAutor() {
    const urlParams = new URLSearchParams(window.location.search);
    const idAutor = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "autores",
        key: idAutor
    };

    const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarAutorTerminado);

}

function consultarAutorTerminado(response)  {

    document.getElementById("autor").innerHTML = response.value.nombre;

    const dataForSelect = {
        operation: "select",
        table: "libros"
    };

    const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarLibrosDeAutorTerminado);
}

function consultarLibrosDeAutorTerminado(response) {

    const urlParams = new URLSearchParams(window.location.search);
    const idAutor = urlParams.get("id");

    for (let i = 0; i < response.values.length; i++) {
        if (idAutor == response.values[i].id_autor) {
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


consultarAutor();