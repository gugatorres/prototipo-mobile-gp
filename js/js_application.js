var app = angular.module("appDash", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "/templates/home.html",
        controller: "defaultController"
    })
    .when("/minha_rota", {
        templateUrl : "/templates/minha_rota.html",
        controller:   "minhaRotaController"
    })
    .when("/meus_clientes", {
        templateUrl : "/templates/meus_clientes.html",
        controller:   "meusClientesController"
    })
    .when("/catalogo_produtos", {
        templateUrl : "/templates/catalogo_produtos.html",
        controller:   "catalogoProdutosController"
    })
    .when("/estoque_precos", {
        templateUrl : "/templates/estoque_precos.html",
        controller:   "estoquePrecosController"
    })
    .when("/relatorios", {
        templateUrl : "/templates/relatorios.html",
        controller:   "relatoriosController"
    })
    .when("/agendar_visita", {
        templateUrl : "/templates/agendar_visita.html",
        controller:   "agendarVisitaController"
    })
    .otherwise({redirectTo:"/home"});
});