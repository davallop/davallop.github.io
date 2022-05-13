function consultarCategorias() {
    const dataForSelect = {
        operation: "select",
        table: "categorias"
    };

    const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDecategoriaTerminado);
}

function consultarInfoDecategoriaTerminado(response) {
    
    let divcategorias = document.createElement("div");
    divcategorias.className = "categorias";

    for (let i = 0; i < response.values.length; i++) {
        let divcategoria = document.createElement("div");
        divcategoria.className = "categoria";
        divcategoria.setAttribute("onclick", "clickSobrecategoria(" + response.values[i].id_categoria + ")");

        let id_categoria = document.createElement("span");
        id_categoria.innerHTML = "ID: " + response.values[i].id_categoria;
        divcategoria.append(id_categoria);

        let nombre_categoria = document.createElement("span");
        nombre_categoria.innerHTML = response.values[i].nombre; 

        let enlaceMostrarCategorias = document.createElement("a");
        enlaceMostrarCategorias.innerHTML = "Mostrar libros";
        enlaceMostrarCategorias.setAttribute("href", "librosDeCategoria.html?id=" + response.values[i].id_categoria);

        divcategoria.append(nombre_categoria);

        divcategoria.append(enlaceMostrarCategorias);

        divcategorias.append(divcategoria);
    }

    document.getElementById("resultado").append(divcategorias);
}



consultarCategorias();