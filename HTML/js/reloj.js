function actualiza(){
    let now=new Date()
    let tiempoHorario;
    let tipodeTiempo;
    if(now.getHours()>12){
        tiempoHorario=now.getHours()%12
        tipodeTiempo="P.M"
    }else{
        tiempoHorario=now.getHours();
        tipodeTiempo="A.M"
    }

    document.querySelector("#reloj").textContent=tiempoHorario+" : "+now.getMinutes()+" :"+now.getSeconds()+" "+tipodeTiempo;
    setTimeout(actualiza,1000)
}

actualiza();