let nombre;
let correo;
let contraseña;
let textarea=document.querySelector("#imprimir")
let objeto={};
let jason;

document.querySelector("#boton").addEventListener("click",(e)=>{
    nombre=document.querySelector("#name").value;
    correo=document.querySelector("#correo").value;
    contraseña=document.querySelector("#password").value;
    objeto = {name:nombre, mail:correo, password:contraseña};
    jason = JSON.stringify(objeto);
    textarea.textContent=jason;

});

document.querySelector("#convertir").addEventListener("click",(e)=>{
objeto=JSON.parse(textarea.value);
document.querySelector("#name").value=objeto.name;
document.querySelector("#correo").value=objeto.mail;
document.querySelector("#password").value=objeto.password;
});