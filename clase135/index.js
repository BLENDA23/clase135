// tu_archivo.js

$(document).ready(function(){
    // Al hacer clic en el botón de guardar
    $("#botonGuardar").click(function(){
        // Obtener el texto ingresado por el usuario
        var texto = $("#textoInput").val();
        
        // Crear una nueva fila en la tabla con el texto ingresado
        var nuevaFila = "<tr><td>" + texto + "</td></tr>";
        
        // Agregar la nueva fila a la tabla
        $("#tablaDatos tbody").append(nuevaFila);
        
        // Limpiar el campo de texto después de guardar
        $("#textoInput").val("");
    });
});
