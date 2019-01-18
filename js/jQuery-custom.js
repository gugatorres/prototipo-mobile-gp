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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}