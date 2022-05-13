function insertarLibro() {

        let libro = {
            id_libro: document.getElementById("id_libro").value,
            nombre: document.getElementById("nombre").value,
            sinopsis: document.getElementById("sinopsis").value,
            anio: document.getElementById("anio").value,
            Imagen: document.getElementById("Imagen").value
        };

        const dataForInsert = {
            operation: "insert",
            table: "libros",
            object: libro
        };

        const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

        GoogleSheetDataBaseOperation(
            idImplementacion,
            dataForInsert,
            insertarLibroTerminado);
    }

    function insertarLibroTerminado(response) {
        console.log(response);
    }


    insertarLibro();
