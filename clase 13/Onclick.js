let boton1 = document.querySelector ("#button1")
let boton2 = document.querySelector ("#button2")
let boton3 = document.querySelector ("#button3")

let parraf1 = document.querySelector ("#pa1")
let parraf2 = document.querySelector ("#pa2")
let parraf3 = document.querySelector ("#pa3")

boton1.onclick = colorDiferente ;
boton2. onclick = desaparaparecer ;
boton3.onclick = aparecertiempo ;

function colorDiferente () {
    if (parraf2.style.display = "block" ){
        parraf2.style.display = "none"
    } else {
        parraf2.style.display = "block"
    }
}

function aparecertiempo () {
    parraf3.style.display ="none"
    setTimeout (aparecer,3000) ;
}

function aparecertiempo2 () {
    parraf3.style.display = "block"
}