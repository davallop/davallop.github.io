function insertarCategoria() {

        let categoria = {
            id_categoria: document.getElementById("id_categoria").value,
            nombre: document.getElementById("nombre").value
        };

        const dataForInsert = {
            operation: "insert",
            table: "categorias",
            object: categoria
        };

        const idImplementacion = "AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_";

        GoogleSheetDataBaseOperation(
            idImplementacion,
            dataForInsert,
            insertarCategoriaTerminado);
    }

    function insertarCategoriaTerminado(response) {
        console.log(response);
    }


    insertarCategoria();
