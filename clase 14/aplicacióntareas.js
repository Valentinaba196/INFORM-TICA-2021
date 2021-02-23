let tareas = [
    {materia:"Biología", descripción:"Hacer vídeo explicando una enzima", fecha:"19-03-21"},
    {materia:"Álgebra", descripción:"Hacer del ejercicio 61 al 86 y el 90" , fecha:"23-03-21"},
    {materia:"Informática", descripción:"Hacer una aplicación web para llevar registro d etareas", fecha:"23-03-21"},
    {materia:"Historia", descripción:"Interrogación sobre la crisis de 1300", fecha:"24-03-21"},
    {materis:"Física", descripción:"Hacer ejercicios 90,96,97,102 y 103", fecha:"25-03-21"},
    {materia:"Filosofía", descripción:"Interrogación sobre Platón", fecha:"03-04-21"},
]

let tabla = document.querySelector("#tareas")
function llenartabla () {
    let contenido = "<tr><th>materia</th><th>descripción</th><th>fecha</th></tr>"
    for (tarea of tareas){
        contenido = coontenido + `<tr><td>${tarea.materia}</td><td>${tarea.descripción}</td><td>${tarea.fecha}</td></tr>`
    }
    tabla.innerHTML = contenido 
}

let form = document.querySelector ("form")
function nuevaTarea () {
    let nuevaMateria = document.querySelector("input[name=materia]").value 
    let nuevaDescripción = document.querySelector("input[name=descripción]").value
    let nuevaFecha = document.querySelector("input[name=fecha]").value
    let tareaNueva = {materia:nuevaMateria, descripción:nuevaDescripción, fecha:nuevaFecha}
    console.log (tareaNueva) 
    tareas.push (tareaNueva)
    llenartabla ();
    return false;
}

form.onsubmit = nuevaTarea ;
