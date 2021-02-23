
let masa;
do {
    masa = parseFloat(prompt("Ingrese su masa en Kg"));
} while (isNaN(masa) || masa<0);
let altura;
do {
    altura = parseFloat(prompt("Ingrese su altura m2"));
} while (isNaN(altura)|| altura<0)

   let Bim = masa/(altura*altura) 
   alert (Bim)

   if(18.5>Bim) 
       alert("La persona está por debajo del peso ");
    else if (Bim<24.99) 
       alert("La persona está en su peso normal");
    else if( Bim<29.99 ) 
        alert ("La persona tiene sobre peso");
  else if (30<Bim) 
       alert("La persona es obesa")
   


