app.controller("defaultController", function($scope){
	
	$scope.titulo="Home"

	angular.element(".float-button-clientes").click(function(){
		angular.element(".overlay-add-customer").css("display","block");
	});
	
	angular.element(".overlay-add-customer").click(function(){
		angular.element(this).css("display","none");
	});
	

}).controller("minhaRotaController", function($scope){
	
	$scope.titulo="Minha Rota"

}).controller("meusClientesController", function($scope){
	
	$scope.titulo="Meus Clientes"

}).controller("detalheClientesController", function($scope){
	
	$scope.titulo="Detalhe de Clientes"

	angular.element(".tab-1").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
		angular.element(".tab-page-1").css("display","block");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-3").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});
	
	angular.element(".tab-2").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
		angular.element(".tab-page-2").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-3").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});
	
	angular.element(".tab-3").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
		angular.element(".tab-page-3").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-4").css("display","none");
	});
	
	angular.element(".tab-4").click(function(){
		angular.element(this).addClass("active");
		angular.element(this).css("display","inline-block");
		angular.element(".tab-1,.tab-2,.tab-3").removeClass("active");
		angular.element(".tab-page-4").css("display","block");
		angular.element(".tab-page-1").css("display","none");
		angular.element(".tab-page-2").css("display","none");
		angular.element(".tab-page-3").css("display","none");
	});
	



}).controller("catalogoProdutosController", function($scope){
	
	$scope.titulo="Catalogo de Produtos"

}).controller("estoquePrecosController", function($scope){
	
	$scope.titulo="Estoque Preços"

}).controller("relatoriosController", function($scope){
	
	$scope.titulo="Relatórios"

}).controller("agendarVisitaController", function($scope){
	
	$scope.titulo="Agendar Visita"

});