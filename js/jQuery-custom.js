$(document).ready(function(){

$(".menu-open").click(function(){
    $("#mySidenav").css("left","0px");
    $(".back-menu").css("display","block");
    $(this).css("display","none");
});

$(".menu-close").click(function(){
	$("#mySidenav").css("left","-330px");
    $(".back-menu").css("display","none");
    $(".menu-open").css("display","block");
});

$(".back-menu").click(function(){
	$("#mySidenav").css("left","-330px");
    $(this).css("display","none");
    $(".menu-open").css("display","block");
});

$(".menu-principal a").click(function(){
    $("#mySidenav").css("left","-330px");
    $(".menu-open").css("display","block");
    $(".back-menu").css("display","none");
});

$(".float-button-clientes").click(function(){
	$(".overlay-add-customer").css("display","block");
});

$(".overlay-add-customer").click(function(){
	$(this).css("display","none");
});

});