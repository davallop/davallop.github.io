function consultarAutores() {
    const dataForSelect = {
        operation: "select",
        table: "autores"
    };

    const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDeautorTerminado);
}

function consultarInfoDeautorTerminado(response) {
    
    let divautores = document.createElement("div");
    divautores.className = "autores";

    for (let i = 0; i < response.values.length; i++) {
        let divautor = document.createElement("div");
        divautor.className = "autor";
        divautor.setAttribute("onclick", "clickSobreautor(" + response.values[i].id_autor + ")");

        let id_autor = document.createElement("span");
        id_autor.innerHTML = "ID: " + response.values[i].id_autor;
        divautor.append(id_autor);

        let nombre_autor = document.createElement("span");
        nombre_autor.innerHTML = response.values[i].nombre; 
        divautor.append(nombre_autor);

        let nacimiento = document.createElement("span");
        nacimiento.innerHTML = "Fecha de nacimiento:" + response.values[i].fecha_nacimiento;
        divautor.append(nacimiento);

        let nacionalidad = document.createElement("span");
        nacionalidad.innerHTML = "Nacionalidad:" + response.values[i].nacionalidad;
        divautor.append(nacionalidad);

        let enlaceMostrarLibros = document.createElement("a");
        enlaceMostrarLibros.innerHTML = "Mostrar libros";
        enlaceMostrarLibros.setAttribute("href", "librosDeAutor.html?id=" + response.values[i].id_autor);

        divautor.append(enlaceMostrarLibros);

        divautores.append(divautor);
    }

    document.getElementById("resultado").append(divautores);
}



consultarAutores();