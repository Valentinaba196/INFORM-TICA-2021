let contador = 0
localStorage.setItem ("Visitas", contador)
let
numcontar = localStorage.getItem ("Visitas")
do {
    contar = contar + 1
    localStorage.setItem ("Visitas", contar)
    numcontar = localStorage.getItem ("Visitas")
    alert ("Usted ha visitado esta página" + contar + veces)
} while (numcontar == contar)