let actores = [
{nombre :"Ian Somerhslder" , edad :"42" , personaje : "Damon Salvatore", imagen :"https://media1.popsugar-assets.com/files/thumbor/mSw6KtNHwv_Cqbo4Ujx3ZA28PoQ/878x0:2139x1261/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/20/766/n/1922398/4101d0a75e9dda8ba7da41.08531277_/i/Ian-Somerhalder.jpg"} ,
{ nombre : "Leighton Meester" , edad : "34" , personaje : "Blair Waldorf" , imagen :"https://www.etonline.com/sites/default/files/images/2018-09/gettyimages-1012960656.jpg"} ,
{nombre : "Tom Ellis" , edad : "42" , personaje : "Lucifer" , imagen : "https://upload.wikimedia.org/wikipedia/commons/b/b3/Tom_Ellis_%282016%29.jpg"} ,
{ nombre : "Chyler Leight" , edad : "38" , personaje : "Lexie Grey" , imagen : "http://pm1.narvii.com/7028/5859912ed13fa9fdec2ae25ef546eee94abe4e68r1-310-310v2_00.jpg"} ,
{ nombre : "Luke Paqualino" , edad : "30" , personaje : "Freddie McClair" , imagen : "https://static.wikia.nocookie.net/littlemix/images/7/7d/Luke_pasqualino.jpg/revision/latest?cb=20160913085230.pnj" } ,
{ nombre : "Millie Bobby Brown" , edad :"16" , personaje : "eleven" , imagen : "https://aws.glamour.mx/prod/designs/v1/assets/620x414/201997.jpg"} ,
{nombre : "Nina Dobrev" , edad : "32" , personaje : "Elena Gilbert" , imagen : "https://fotografias.antena3.com/clipping/cmsimages01/2019/01/10/B457AAA3-223E-4B6A-878E-6A5011CBC13A/58.jpg"}
]

let tabla = document.querySelector ('#actores') 
let conttabla = '<tr><th>nombre</<th><th>edad</<th><th>personaje</<th><tr>'
for (actor of actores) {
    conttabla = conttabla + `<tr><th> ${actor.nombre}</td><td> ${actor.edad} </td><td> ${actor.personajes}</td><td><img width ="450px" src = "${actor.imagen}" alt = " " ></td></tr>`

}
tabla.innerHTML=conttabla