const ingresarTarea = document.getElementById("ingresar-tarea");
console.log(ingresarTarea);
const botonTarea = document.getElementById("botonCrearTarea");
console.log(botonTarea);
const listaDeTareas = document.getElementById("listaDeTareas");
console.log(listaDeTareas);

// Agregamos tarea al hacer click al boton
botonTarea.addEventListener("click", agregarTarea);

// Funcion agregar tarea

function agregarTarea() {
  // Comprobar tarea
  if (ingresarTarea.value) {
    console.log(ingresarTarea.value);
    // Creamos el contenedor div ( tarea nueva )
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");

    // Creamos el texto de la tarea
    let TextoTareaNueva = document.createElement("p");
    TextoTareaNueva.innerText = ingresarTarea.value;
    tareaNueva.appendChild(TextoTareaNueva);

    // Creamos el boton de eliminar
    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    tareaNueva.appendChild(iconos);

    // <span class="material-symbols-outlined">check</span>
    let completado = document.createElement("span");
    completado.classList.add("material-symbols-outlined");
    completado.innerText = "check";
    completado.style.cursor = "pointer";
    completado.addEventListener("click", tareaCompletada);

    // <span class="material-symbols-outlined">delete</span>`;
    let eliminado = document.createElement("span");
    eliminado.classList.add("material-symbols-outlined");
    eliminado.innerText = "delete";
    eliminado.style.cursor = "pointer";
    eliminado.addEventListener("click", tareaEliminada);

    tareaNueva.append(completado, eliminado);
    // Agregar tarea a la lista
    listaDeTareas.appendChild(tareaNueva);
  } else {
    alert("Ingrese una tarea");
  }
}
// Marcar la tarea como completada
function tareaCompletada(e) {
  console.log(e.target.parentNode);
  let tarea = e.target.parentNode.firstChild;
  tarea.classList.toggle("tareaCompletada");

  console.log("Tarea Completada");
}

// Marcar la tarea como eliminada
function tareaEliminada(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
  console.log("Tarea Eliminada");
}
