$(document).ready(function(){

$(".menu-open").click(function(){
    $("#mySidenav").css("left","0px");
    $(".back-menu").css("display","block");
    $(this).css("display","none");
    $("body").css("overflow-y", "hidden");
});

$(".menu-close").click(function(){
	$("#mySidenav").css("left","-310px");
    $(".back-menu").css("display","none");
    $(".menu-open").css("display","block");
    $("body").css("overflow-y", "auto");
});

$(".back-menu").click(function(){
	$("#mySidenav").css("left","-310px");
    $(this).css("display","none");
    $(".menu-open").css("display","block");
    $("body").css("overflow-y", "auto");
});

$(".menu-principal a").click(function(){
    $("#mySidenav").css("left","-310px");
    $(".menu-open").css("display","block");
    $(".back-menu").css("display","none");
    $("body").css("overflow-y", "auto");
});

$(".float-button-clientes").click(function(){
	$(".overlay-add-customer").css("display","block");
});

$(".overlay-add-customer").click(function(){
	$(this).css("display","none");
});

});