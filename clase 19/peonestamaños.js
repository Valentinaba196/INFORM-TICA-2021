let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")


function dibujarPeon(x, y, r, color){
    ctx.strokeStyle = color
    ctx.fillStyle = color

    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x-r, y+r*2.0)
    ctx.lineTo(x+r, y+r*2.0)
    ctx.lineTo(x,y)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.rect(x-1.1*r, y+r*2.0, r*2.2, r/3)
    ctx.stroke()
    ctx.fill()
}



for(let x = 35; x < 440; x= x+60){
    dibujarPeon(x, 125, 20, "black")
}

for(let x = 70; x < 1050; x= x+160){
    dibujarPeon(x, 280, 65, "blue")
}

for(let x = 30; x < 275; x= x+30){
    dibujarPeon(x, 45, 10, "red")
}