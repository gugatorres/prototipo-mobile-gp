var app = angular.module("appDash", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "./templates/home.html",
            controller: "defaultController"
        })
        .when("/sync", {
            templateUrl: "./templates/sync.html",
            controller: "syncController"
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
        .when("/lp_crystal", {
            templateUrl: "./templates/lp_crystal.html",
            controller: "lpCrystalController"
        })
        .when("/estoque_precos", {
            templateUrl: "./templates/estoque_precos.html",
            controller: "estoquePrecosController"
        })
        .when("/relatorios", {
            templateUrl: "./templates/relatorios.html",
            controller: "relatoriosController"
        })
        .when("/roteiro_visao", {
            templateUrl: "./templates/roteiro_visao.html",
            controller: "roteiroVisaoController"
        })
        .when("/roteiro_visao_detalhe", {
            templateUrl: "./templates/roteiro_visao_detalhe.html",
            controller: "roteiroVisaoDetalheController"
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
        .when("/new_pedido", {
            templateUrl: "./templates/new_pedido.html",
            controller: "newPedidoController"
        })
        .when("/detalhes_pedido", {
            templateUrl: "./templates/detalhes_pedido.html",
            controller: "DetalhesPedidoController"
        })
        .when("/detalhes_pedido_bloqueado", {
            templateUrl: "./templates/detalhes_pedido_bloqueado.html",
            controller: "DetalhesPedidoBloqueadoController"
        })
        .when("/detalhes_pedido_nao_sincronizado", {
            templateUrl: "./templates/detalhes_pedido_nao_sincronizado.html",
            controller: "DetalhesPedidoBloqueadoController"
        })
        .when("/carrinho", {
            templateUrl: "./templates/carrinho.html",
            controller: "carrinhoController"
        })
        .when("/carrinho_comodato", {
            templateUrl: "./templates/carrinho_comodato.html",
            controller: "carrinhoComodatoController"
        })
        .when("/formas_pagamento", {
            templateUrl: "./templates/formas_pagamento.html",
            controller: "formasPagamentoController"
        })
        .when("/detalhes_fechamento_pedido", {
            templateUrl: "./templates/detalhes_fechamento_pedido.html",
            controller: "detalhesFechamentoPedidoController"
        })
        .when("/pesquisa", {
            templateUrl: "./templates/pesquisa.html",
            controller: "pesquisaController"
        })
        .when("/questionario", {
            templateUrl: "./templates/questionario.html",
            controller: "questionarioController"
        })
        .when("/quest_detalhe", {
            templateUrl: "./templates/quest_detalhe.html",
            controller: "questDetalheController"
        })
        .when("/quest_detalhe_2", {
            templateUrl: "./templates/quest_detalhe_2.html",
            controller: "questDetalhe2Controller"
        })
        .when("/solicitar_alteracao_financ", {
            templateUrl: "./templates/solicitar_alteracao_financ.html",
            controller: "alteracaoFinancController"
        })
        .when("/solicitar_inativacao", {
            templateUrl: "./templates/solicitar_inativacao.html",
            controller: "inativacaoController"
        })
        .when("/bonificacao", {
            templateUrl: "./templates/tab_bonificacao.html",
            controller: "tabBonificacaoController"
        })
        .when("/bonificacao_avarias", {
            templateUrl: "./templates/tab_bonificacao_avarias.html",
            controller: "tabBonificacaoAvariasController"
        })
        .when("/combos", {
            templateUrl: "./templates/tab_combos.html",
            controller: "tabCombosController"
        })
        .when("/historico_pedidos", {
            templateUrl: "./templates/historico_pedidos.html",
            controller: "HistoricoPedidosController"
        })
        .when("/comodato", {
            templateUrl: "./templates/tab_comodato.html",
            controller: "tabComodatoController"
        })
        .when("/comodato_regularizacao", {
            templateUrl: "./templates/tab_comodato_regularizacao.html",
            controller: "tabComodatoRegularizacaoController"
        })
        .when("/venda_material_promo", {
            templateUrl: "./templates/tab_venda_promo.html",
            controller: "tabVendaPromoController"
        })
        .when("/lista_comodatos", {
            templateUrl: "./templates/comodatos.html",
            controller: "ComodatosController"
        })
        .when("/comodato_item_notes", {
            templateUrl: "./templates/comodato_item_notes.html",
            controller: "comodatoItemNotesController"
        })
        .when("/comodatos_contrato", {
            templateUrl: "./templates/comodatos_contrato.html",
            controller: "ComodatosContratoController"
        })
        .when("/comodatos_pendentes", {
            templateUrl: "./templates/comodatos_pendentes.html",
            controller: "ComodatosPendentesController"
        })
        .when("/comodatos_contrato_pend", {
            templateUrl: "./templates/comodatos_contrato_pend.html",
            controller: "ComodatosContratoPendentesController"
        })
        .when("/comodatos_barril", {
            templateUrl: "./templates/comodato_barril.html",
            controller: "ComodatosBarrilController"
        })
        .when("/acompanhar_pedido", {
            templateUrl: "./templates/acompanhar_pedido.html",
            controller: "AcompanharPedidoController"
        })
        .when("/consignacoes", {
            templateUrl: "./templates/consignacoes.html",
            controller: "listaConsignacoesController"
        })
        .when("/troca", {
            templateUrl: "./templates/tab_troca.html",
            controller: "trocaController"
        })
        .when("/lista_consignados", {
            templateUrl: "./templates/lista_consignados.html",
            controller: "listaConsignacoesController"
        })
        .when("/detalhe_consignados", {
            templateUrl: "./templates/detalhe_consignados.html",
            controller: "detalheConsignadosController"
        })
        .when("/fechamento_comodato", {
            templateUrl: "./templates/fechamento_comodato.html",
            controller: "fechamentoComodatoController"
        })
        .when("/remuneracao_variavel", {
            templateUrl: "./templates/remuneracao_variavel.html",
            controller: "remuneracaoVariavelController"
        })
        .when("/faq", {
            templateUrl: "./templates/faq.html",
            controller: "faqController"
        })
        .when("/clientes_ruptura", {
            templateUrl: "./templates/clientes_ruptura.html",
            controller: "clientesRupturaController"
        })
        .when("/inadimplencia", {
            templateUrl: "./templates/inadimplencia.html",
            controller: "inadimplenciaController"
        })
        .when("/comissao_recebida", {
            templateUrl: "./templates/comissao_recebida.html",
            controller: "comissaoRecebidaController"
        })
        .when("/giro_vasilhame", {
            templateUrl: "./templates/giro_vasilhame.html",
            controller: "giroVasilhameController"
        })
        .when("/giro_material_pesado", {
            templateUrl: "./templates/giro_vasilhame.html",
            controller: "materialPesadoController"
        })
        .when("/minha_variavel", {
            templateUrl: "./templates/minha_variavel.html",
            controller: "minhaVariavelController"
        })
        .when("/faturamento_meta", {
            templateUrl: "./templates/faturamento_meta.html",
            controller: "faturamentoMetaController"
        })
        .when("/revisao_rota", {
            templateUrl: "./templates/revisao_rota.html",
            controller: "revisaoRotaController"
        })
        .when("/diaria_comercial", {
            templateUrl: "./templates/diaria_comercial.html",
            controller: "diariaComercialController"
        })
        .when("/roteiro_visao_cliente", {
            templateUrl: "./templates/roteiro_visao_cliente.html",
            controller: "roteiroVisaoClienteController"
        })
        .when("/roteiro_visao_cliente_detalhe", {
            templateUrl: "./templates/roteiro_visao_cliente_detalhe.html",
            controller: "roteiroVisaoClienteDetalheController"
        })
        .when("/linha_sku_proxima_bater", {
            templateUrl: "./templates/linha_sku_proxima_bater.html",
            controller: "linhaSkuProximaBaterController"
        })
        .when("/positivacao_geral", {
            templateUrl: "./templates/positivacao_geral.html",
            controller: "positivacaoGeralController"
        })
        .when("/informacao_faturamento_prazo", {
            templateUrl: "./templates/informacao_faturamento_prazo.html",
            controller: "informacaoFaturamentoPrazoController"
        })
        .when("/hectolitro_geral", {
            templateUrl: "./templates/hectolitro_geral.html",
            controller: "hectolitroGeralController"
        })
        .otherwise({ redirectTo: "/meus_clientes" })
    
    })