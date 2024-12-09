function agregarTarea(){

    // Obtener el valor de la Tarea:

    let nuevaTareaTexto = document.getElementById('tarea').value;

    // Condicional para cuando se ingresa una Tarea Vacía:

    if(nuevaTareaTexto === ""){
        alert("Ingrese una Nueva Tarea por favor.");
        return;
    }

    // Se crea el Elemento li para las Nuevas Tareas:

    let nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    // Se Crea el Botón Eliminar:

    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() { nuevaTarea.remove(); }
    nuevaTarea.appendChild(botonEliminar);

    // Se Asignan a la Lista, las distintas Tareas:

    document.getElementById('lista').appendChild(nuevaTarea);

    // Se limpia el Campo de Texto al Cargar cada Tarea:

    document.getElementById('tarea').value = "";

}
