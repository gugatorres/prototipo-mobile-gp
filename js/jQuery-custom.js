$(document).ready(function () {

    $(".menu-open").click(function () {
        $("#mySidenav").css("left", "0px");
        $(".back-menu").css("display", "block");
        $(this).css("display", "none");
        $("body").css("overflow-y", "hidden");
    });

    $(".menu-close").click(function () {
        $("#mySidenav").css("left", "-310px");
        $(".back-menu").css("display", "none");
        $(".menu-open").css("display", "block");
        $("body").css("overflow-y", "auto");
    });

    $(".back-menu").click(function () {
        $("#mySidenav").css("left", "-310px");
        $(this).css("display", "none");
        $(".menu-open").css("display", "block");
        $("body").css("overflow-y", "auto");
    });

    $(".menu-principal a").click(function () {
        $("#mySidenav").css("left", "-310px");
        $(".menu-open").css("display", "block");
        $(".back-menu").css("display", "none");
        $("body").css("overflow-y", "auto");
    });

    /*$(".float-button-clientes").click(function(){
        $(".overlay-add-customer").css("display","block");
    });
    
    $(".overlay-add-customer").click(function(){
        $(this).css("display","none");
    });*/


    /* Tabs Detail Customer 
    
    $(".tab-1").click(function(){
        $(this).addClass("active");
        $(this).css("display","inline-block");
        $(".tab-2,.tab-3,.tab-4").removeClass("active");
        $(".tab-page-1").css("display","block");
        $(".tab-page-2").css("display","none");
        $(".tab-page-3").css("display","none");
        $(".tab-page-4").css("display","none");
    });
    
    $(".tab-2").click(function(){
        $(this).addClass("active");
        $(this).css("display","inline-block");
        $(".tab-1,.tab-3,.tab-4").removeClass("active");
        $(".tab-page-2").css("display","block");
        $(".tab-page-1").css("display","none");
        $(".tab-page-3").css("display","none");
        $(".tab-page-4").css("display","none");
    });
    
    $(".tab-3").click(function(){
        $(this).addClass("active");
        $(this).css("display","inline-block");
        $(".tab-1,.tab-2,.tab-4").removeClass("active");
        $(".tab-page-3").css("display","block");
        $(".tab-page-1").css("display","none");
        $(".tab-page-2").css("display","none");
        $(".tab-page-4").css("display","none");
    });
    
    $(".tab-4").click(function(){
        $(this).addClass("active");
        $(this).css("display","inline-block");
        $(".tab-1,.tab-2,.tab-3").removeClass("active");
        $(".tab-page-4").css("display","block");
        $(".tab-page-1").css("display","none");
        $(".tab-page-2").css("display","none");
        $(".tab-page-3").css("display","none");
    });
    */

    $(".search").click(function () {
        $(".box-search").css("display", "block");
        $(".box-search input").focus();

    });

    $(".close-search").click(function () {

        $(".box-search").css("display", "none");

    });
});

function goBack() {
    window.history.back();
}

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("mydiv")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("mydiv").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}