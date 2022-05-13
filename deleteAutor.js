
function ddelete() {
    let idGoogleSheet = 'AKfycbx12UhJQhkJ-wUZUlqTdRwF3LzctfSKUGUjUbYwyOixoR5lbPk4tDvJbHVqa16YcKt_';
    let tableName     = 'autores';
    let key           = document.getElementById("key").value;
    
    const dataForSelect = {
        operation: "delete",
        table: tableName,
        key: key
    };

    document.getElementById("error").innerHTML = "Esperando resultado...";
    document.getElementById("message").innerHTML = "Esperando resultado...";

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect,
        deleteFinished);
}

function deleteFinished(response) {
    document.getElementById("error").innerHTML = response.error;
    document.getElementById("message").innerHTML = response.message;
}

