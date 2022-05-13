function consultarInfoDeLibro() {

    const urlParams = new URLSearchParams(window.location.search);
    const idLibro = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "libros",
        key: idLibro
    };

    const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeLibroTerminado);
}

function consultarInfoDeLibroTerminado(response) {
    document.getElementById("nombre").innerHTML= response.value.nombre;
    document.getElementById("sinopsis").innerHTML = response.value.sinopsis;
    document.getElementById("anio").innerHTML = response.value.anio;
    document.getElementById("imagen").setAttribute("src", "imágenes/" + response.value.Imagen);
}



consultarInfoDeLibro();
