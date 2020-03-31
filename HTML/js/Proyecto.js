$("#btnHTML").on("click", (e) => {
    window.setTimeout('FadeOutAll()',50); 
    window.setTimeout('HTMLFade()',1000); 
})

$("#btnCSS").on("click", (e) => {
    window.setTimeout('FadeOutAll()',50); 
    window.setTimeout('CSSFade()',1000); 
})

$("#btnJS").on("click", (e) => {
    window.setTimeout('FadeOutAll()',50); 
    window.setTimeout('JSFade()',1000); 
})

$("#btnAll").on("click", (e) => {
    window.setTimeout('FadeOutAll()',50); 
    window.setTimeout('FadeInAll()',1000); 
})

function HTMLFade(){
    $("#HTML").fadeIn();      // Function returns the product of a and b
  }
  function CSSFade(){
    $("#CSS").fadeIn();      // Function returns the product of a and b
  }
  function JSFade(){
    $("#JS").fadeIn();  
    $("#Jquery").fadeIn();     // Function returns the product of a and b
  }
 function FadeInAll(){
    $("#HTML").fadeIn();
    $("#JS").fadeIn();
    $("#CSS").fadeIn();
    $("#Jquery").fadeIn();
 }

 function FadeOutAll(){
    $("#HTML").fadeOut();
    $("#JS").fadeOut();
    $("#CSS").fadeOut();
    $("#Jquery").fadeOut();
 }