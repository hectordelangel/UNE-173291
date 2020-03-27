$("#btnHTML").on("click", (e) => {
    $("#CSS").addClass("d-none");
    $("#JS").addClass("d-none");
    $("#Jquery").addClass("d-none");
    $("#HTML").removeClass("d-none");
})

$("#btnCSS").on("click", (e) => {
    $("#CSS").removeClass("d-none");
    $("#HTML").addClass("d-none");
    $("#JS").addClass("d-none");
    $("#Jquery").addClass("d-none");
})

$("#btnJS").on("click", (e) => {
    $("#JS").removeClass("d-none");
    $("#CSS").addClass("d-none");
    $("#HTML").addClass("d-none");
    $("#Jquery").removeClass("d-none");
    
})

$("#btnAll").on("click", (e) => {
    $("#HTML").removeClass("d-none");
    $("#JS").removeClass("d-none");
    $("#CSS").removeClass("d-none");
    $("#Jquery").removeClass("d-none");
})