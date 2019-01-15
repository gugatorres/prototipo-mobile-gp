var app = angular.module("appDash", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "./templates/home.html",
            controller: "defaultController"
        })
        .when("/minha_rota", {
            templateUrl: "./templates/minha_rota.html",
            controller: "minhaRotaController"
        })
        .when("/meus_clientes", {
            templateUrl: "./templates/meus_clientes.html",
            controller: "meusClientesController"
        })
        .when("/detalhe_clientes", {
            templateUrl: "./templates/detalhe_clientes.html",
            controller: "detalheClientesController"
        })
        .when("/cadastro_clientes", {
            templateUrl: "./templates/cadastro_clientes.html",
            controller: "cadastroClientesController"
        })
        .when("/cep_cadastro_clientes", {
            templateUrl: "./templates/cep_cadastro_clientes.html",
            controller: "cepCadastroClientesController"
        })
        .when("/catalogo_produtos", {
            templateUrl: "./templates/catalogo_produtos.html",
            controller: "catalogoProdutosController"
        })
        .when("/lp_itaipava", {
            templateUrl: "./templates/lp_itaipava.html",
            controller: "lpItaipavaController"
        })
        .when("/estoque_precos", {
            templateUrl: "./templates/estoque_precos.html",
            controller: "estoquePrecosController"
        })
        .when("/relatorios", {
            templateUrl: "./templates/relatorios.html",
            controller: "relatoriosController"
        })
        .when("/agendar_visita", {
            templateUrl: "./templates/agendar_visita.html",
            controller: "agendarVisitaController"
        })
        .when("/splash", {
            templateUrl: "./templates/splash.html",
            controller: "splashController"
        })
        .when("/login", {
            templateUrl: "./templates/login.html",
            controller: "loginController"
        })
        .when("/meus_pedidos", {
            templateUrl: "./templates/meus_pedidos.html",
            controller: "meusPedidosController"
        })
        .when("/gerar_pedidos", {
            templateUrl: "./templates/gerar_pedidos.html",
            controller: "gerarPedidosController"
        })
        .otherwise({ redirectTo: "/home" });
});