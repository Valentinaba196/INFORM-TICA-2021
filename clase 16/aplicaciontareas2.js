let Tareas = JSON.parse (localStorage.getItem("tareas")) ;
if (Tareas == null) tarea = [] ;

let tabla = document.querySelector (`#trabajos`)
function llenartabla () {
    let conttabla = '<tr><th>materias</th><th>descripción</th><th>entrega</th></tr>'
    for (tarea of Tareas){
        conttabla = conttabla + '<tr><td>${tarea.materias}</td><td>${tarea.descripción}</td><td>${tarea.entrega}</td></tr><td><tr>'
    }
    tabla.innerHTML = conttabla;
}
 let forma = document.querySelector ("#formularioAdd") ;
 function addnota () {
     let nuevaMateria = document.querySelector ("imput[name=materias]").value 
     let nuevaDescripción = document.querySelector ("imput[name=descripción]").value
     let nuevaEntrega = document.querySelector ("imput[name=entrega]").value
     let nuevatarea = {materia:nuevaMateria,descripción:nuevaDescripción,entrega:nuevaEntrega}
     console.log ("Agregar una nueva tarea") ;
     console.log (nuevatarea)
     tareas.push (nuevatarea)
     llenartabla () ;
     localStorage.setItem ("tareas", JSON.stringify(tareas))

 }
 forma.onsubmit = addnota ;
 ;
 llenartabla ()



