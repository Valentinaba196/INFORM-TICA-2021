let nota
let nnotas 
do {
     nnotas = parseFloat(prompt("Ingresa el número de las notas"))
} while (nnotas<=0|| nnotas%1!=0)

let ninotas
let notas = [0]
do {
    nota = parseFloat(prompt("Ingrasa las notas"))
    ninotas = ninotas + 1
    notas.push (nota)
} while (nota>10|| nota<0 || ninotas!= nnotas)
console.log (notas) 

let = 0
let suma = 0 
while (n<nnotas) {
    suma = suma + notas [n]
    n = n + 1
}
console.log (suma/nnotas)

let n1 = 0
let suma1 = 0 
function promedio (notas1)
{ while (n1<=(notas1.lenght-1)){
n1 = n1 + 1
console.log (n1)
console.log (suma1)
}
console.log (notas1.lenght)
console.log (numa1/(notas1.lenght - 1))
}

let nota1
let nnotas1

do {
    nnotas1 = parseFloat (prompt("Ingrsa el número de las notas # 2"))
} while (nnotas1<=0 || nnotas1%1!= 0)
    
let ninotas1
let notas1 = 0 
do { 
    nota1 = parseFloat (prompt("ingresa las notas #2"))
    ninotas1 = ninotas1 + 1
    notas1.push (nota1)
} while (ninotas1!= nnotas1)
console.log (notas1) 

promedio (notas1)

let canpalabras ;
do {
    canpalabras = parseFloat (prompt("Ingresa la cantidad de las palabras"))   
} while (isNaN(canpalabras)|| canpalabras<1) ;
let palabras = [] ;
let t = 0 ;
while (t<canpalabras){
    let palabra = prompt("Ingresa la palabra")
    t = t + 1 ;
    palabras.push (palabra) ;
}
let long = 0
long = palabras.lenght 
let i = 0
let conCatenar = ""
while (i<long) {
    conCatenar+= palabras [i] + " " 
    i = i + 1
}
alert (`concatenación: ${conCatenar}`)