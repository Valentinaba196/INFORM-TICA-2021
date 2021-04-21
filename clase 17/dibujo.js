let canvas = document.querySelector ("#canvas")
let ctx = canvas.getContext("2d")
ctx.fillStyle = "Yellow"
ctx.strokeStyle = "black"

ctx.fillRect (370,220,200,55)
ctx.lineWidth = 1
ctx.strokeRect (370,220,200,55)

ctx.beginPath ()
ctx.moveTo (333,237.5)
ctx.lineTo (368,220)
ctx.lineTo (368,255)
ctx.closePath ()

ctx.lineWidth = 1
ctx.strokeStyle = "black" ;
ctx.stroke () ;
ctx.fillStyle = "lightyellow" ;
ctx.fill () ;

ctx.beginPath ()
ctx.moveTo (333,237.5)
ctx.lineTo (340,234)
ctx.lineTo (340,241)
ctx.closePath ()

ctx.lineWidth = 1 ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;
ctx.fillStyle = "black" ;
ctx.fill () ;

ctx.beginPath ()
ctx.moveTo (550,220)
ctx.lineTo (550,220)
ctx.arc (580,237.5,17,-Math.PI/2,Mth.PI/2)
ctx.lineTo(550,255)

ctx.lineWidth = 1.5 ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;
ctx.fillStyle = "withe" ;
ctx.fill () ;
ctx.endPath ()


ctx.fillRect (220,420,190,320)
ctx.strokeRect (220,420,190,320)
ctx.lineWidth = 1 ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;
ctx.fillStyle = "black" ;
ctx.fill () ;

ctx.fillRect (230,440,170,270)
ctx.strokeRect (230,440,170,270)
ctx.lineWidth = 1 ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;
ctx.fillStyle = "gray" ;
ctx.fill () ;

ctx.beginPath ()
ctx.arc (300,705,30,0,2*Math.PI) ;
ctx.lineWidth = 1.5 ;
ctx.fillStyle = "red" ;
ctx.fill () ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;

ctx.fillRect (240,455,44,44)
ctx.strokeRect (240,435,44,44)
ctx.lineWidth = 1.5 ;
ctx.fillStyle = "white" ;
ctx.fill () ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;

ctx.fillRect (275,455,44,44)
ctx.strokeRect (275,455,44,44)
ctx.lineWidth = 1.5 ;
ctx.fillStyle = "green" ;
ctx.fill () ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;

ctx.fillRect (345,455,44,44)
ctx.strokeRect (345,455,44,44)
ctx.lineWidth = 1.5 ;
ctx.fillStyle = "pink" ;
ctx.fill () ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;

ctx.fillRect (240,490,44,44)
ctx.strokeRect (240,490,44,44)
ctx.lineWidth = 1.5 ;
ctx.fillStyle = "lighblue" ;
ctx.fill () ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;

ctx.fillRect (275,490,44,44)
ctx.strokeRect (275,490,44,44)
ctx.lineWidth = 1.5 ;
ctx.fillStyle = "red" ;
ctx.fill () ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;

ctx.fillRect (310,490,44,44)
ctx.strokeRect (310,490,44,44)
ctx.lineWidth = 1.5 ;
ctx.fillStyle = "yellow" ;
ctx.fill () ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;

ctx.fillRect (345,490,44,44)
ctx.strokeRect (345,490,44,44)
ctx.lineWidth = 1.5 ;
ctx.fillStyle = "orange" ;
ctx.fill () ;
ctx.strokeStyle = "black" ;
ctx.stroke () ;

ctx.fillRect (240,525,44,44)
ctx.strokeRect (240,525,44,44)
ctx.lineWidth = 1.5 ;
ctx.fillStyle = "green" ;
ctx.fill ()
ctx.strokeStyle = "black" ;
ctx.stroke () ;

ctx.fillRect (310,525,44,44)
ctx.strokeRect (310,525,44,44)
 ctx.fillStyle = "white" ;
 ctx.fill () ;
 ctx.strokeStyle = "black" ;
 ctx.stroke () ;

 
