const input=document.querySelector("#input");
const button=document.querySelector("#adivina");
const reiniciar=document.querySelector("#reinicia");

const body=document.querySelector("#body");
let intento=document.querySelector("#intentos");
let numIntento= document.createElement("p");
intento.appendChild(numIntento);

let divUsados=document.querySelector("#Usados");
let numUsado= document.createElement("p");
divUsados.appendChild(numUsado);




let aleatorio=Math.round(Math.random()*100)
let contador=0;
let usados=[];

button.addEventListener("click",(e)=>{
    usados.push(input.value);
    if(input.value<aleatorio){
        alert("Mas arriba")
        
    }
    else if(input.value>aleatorio){
       alert("Mas abajo");
       
    }
    else{
        // var audio=("");
        // audio.play();
        alert("¡Ganaste un iphone!");
        body.style.backgroundColor="blue";
    }
    numUsado.innerHTML="Números usados: "+usados;
    numIntento.innerHTML="Numero de intentos: "+contador++;
   



});

reiniciar.addEventListener("click",(e)=>{
    body.style.backgroundColor="white";
    input.value="";
    aleatorio=Math.round(Math.random()*100)
    usados.length=0;
    numUsado.innerHTML="";
    numIntento.innerHTML="";
});

