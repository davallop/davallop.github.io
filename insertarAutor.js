function insertarAutor() {

        let autor = {
            id_autor: document.getElementById("id_autor").value,
            nombre: document.getElementById("nombre").value,
            fecha_nacimiento: document.getElementById("fecha_nacimiento").value,
            nacionalidad: document.getElementById("nacionalidad").value
        };

        const dataForInsert = {
            operation: "insert",
            table: "autores",
            object: autor
        };

        const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

        GoogleSheetDataBaseOperation(
            idImplementacion,
            dataForInsert,
            insertarAutorTerminado);
    }

    function insertarAutorTerminado(response) {
        console.log(response);
    }


    insertarAutor();
