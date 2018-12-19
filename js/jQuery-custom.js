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


});