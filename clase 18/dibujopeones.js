let canvas = document.querySelector ("#canvas")
let ctx = canvas.getContext("2d")
ctx.strokeStyle = 'black'
ctx.fillStyle = 'white'
ctx.fillRect (20,30,260,230)
ctx.strokeRect (20,30,260,230)

function dibujarpeon (xC, yC, r) {
    ctx.beginPath ()
    ctx.strokeStyle = 'black'
    ctx.fillStyle ='black'

    ctx.moveTo (xC, yC)
    ctx.lineTo (xC-20,yC+35)
    ctx.lineTo (xC+20, yC+35)
    ctx.lineTo (xC, yC)

    ctx.stroke ()
    ctx.fill ()

    ctx.beginPath ()
    ctx.arc (xC, yC, r, 0,2*Math.PI)

    ctx.stroke ()
    ctx.fill ()
}
for (let x=40; x<260; x=x+40) {
    dibujarpeon (x,40,10)
}
for (let x=40; x<260; x=x+40) {
    dibujarpeon (x,200,10)
}