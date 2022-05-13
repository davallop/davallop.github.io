function update() {

    const urlParams = new URLSearchParams(window.location.search);
    let key           = urlParams.get("id");

    let idGoogleSheet = 'AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_';
    let tableName     = 'libros';
    let columnName1   = 'id_libro';
    let columnValue1  = document.getElementById("columnValue1").value;
    let columnName2   = 'nombre';
    let columnValue2  = document.getElementById("columnValue2").value;
    let columnName3   = 'sinopsis';
    let columnValue3  = document.getElementById("columnValue3").value;
    let columnName4   = 'anio';
    let columnValue4  = document.getElementById("columnValue4").value;
    let columnName5   = 'Imagen';
    let columnValue5  = document.getElementById("columnValue5").value;
    
    const newRow = {};

    if (columnName1) {
        newRow[columnName1] = columnValue1;
    }

    if (columnName2) {
        newRow[columnName2] = columnValue2;
    }

    if (columnName3) {
        newRow[columnName3] = columnValue3;
    }
    if (columnName4) {
        newRow[columnName4] = columnValue4;
    }

    if (columnName5) {
        newRow[columnName5] = columnValue5;
    }
    const dataForSelect = {
        operation: "update",
        table: tableName,
        key: key,
        object: newRow
    };

    document.getElementById("error").innerHTML = "Esperando resultado...";
    document.getElementById("message").innerHTML = "Esperando resultado...";

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect,
        updateFinished);
}

function updateFinished(response) {
    document.getElementById("error").innerHTML = response.error;
    document.getElementById("message").innerHTML = response.message;
}

