$(document).ready(function () {

    $("#mySidenav").css("left", "0px");
    $(".back-menu").css("display","block");

    $(".menu-open").click(function () {
        $("#mySidenav").css("left", "0px");
        $(".back-menu").css("display", "block");
        $(".back-menu").css("left", "0px");
        $(".back-menu").css("background","#000000b3");
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
        $(".back-menu").css("left", "-310px");
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

    $(".btn-logout").click(function () {
        $("#mySidenav").css("left", "-310px");
        $(".back-menu").css("display", "none");
        $(".menu-open").css("display", "block");
        $("body").css("overflow-y", "auto");
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

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("tipos-pagamento");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }