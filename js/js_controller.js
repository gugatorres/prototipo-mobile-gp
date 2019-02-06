/* default Controller */
app.controller("defaultController", function ($scope) {

	$scope.titulo = "Home"
	angular.element(".open-modal-clientes").click(function () {
		angular.element(".overlay-add-customer").css("display", "block");
		angular.element(this).css("z-index", "999");
		angular.element("body").css("overflow-y", "hidden");
	});

	angular.element(".overlay-add-customer").click(function () {
		angular.element(this).css("display", "none");
		angular.element(".open-modal-clientes").css("z-index", "2");
		angular.element("body").css("overflow-y", "auto");
	});
	angular.element(".search, .cart").addClass("sync");
	angular.element(".sync").removeClass("cart");
	angular.element(".sync").removeClass("search");
	angular.element(".bar-customer-back").css("display", "none");
	angular.element(".sync img").attr("src", "images/cloud.svg");
	angular.element(".search, .sync, .cart").removeAttr("href");

	angular.element(".btn-novo-pedido").click(function () {
		angular.element(".overlay-modal").css("display", "block");
	});

	angular.element(".close-modal").click(function () {
		angular.element(".overlay-modal").css("display", "none");
	});

})

	/* minha Rota Controller */
	.controller("minhaRotaController", function ($scope) {

		$scope.titulo = "Minha Rota"
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");


	})

	/* meus Pedidos Controller */
	.controller("meusPedidosController", function ($scope) {

		$scope.titulo = "Meus Pedidos"
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");

		angular.element(".add-product").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".button-pedidos").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

	})

	/* Gerar Pedidos Controller */
	.controller("newPedidoController", function ($scope) {

		$scope.titulo = "Gerar Pedidos New"
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync").addClass("cart");
		angular.element(".cart").removeClass("search, sync");
		angular.element(".cart").attr("href", "#!carrinho");


		angular.element(".add-product").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".add-product-sum").click(function () {
			angular.element(".overlay-modal").css("display", "none");
			angular.element(".ind-number").css("display","block");
			angular.element(".ind-number").addClass("anima-circle");
			//angular.element(".total-box").css("bottom", "60px");
			//angular.element(".overlay-total").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element("body").addClass("close-total-sales");

		});

		angular.element(".overlay-total").click(function () {
			angular.element(this).css("display", "none");
			angular.element("body").addClass("close-total-sales");
			angular.element(".total-box").css("bottom", "-178px");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".total-box").addClass("open-total");
		});

		angular.element(".open-total").click(function () {
			angular.element(".total-box").css("bottom", "0px");
			angular.element(".total-box").removeClass("open-total");
		});

		angular.element(".btn-filter").click(function(){
			angular.element(".filter-products").css("right","0");
			angular.element(".overlay-filter").css("display","block");
			angular.element("body").css("overflow-y","hidden");
			angular.element(".filter-products .col-xs-6:nth-child(13)").css("margin-bottom","100px");
			angular.element(".total-box").css("z-index","9");
			angular.element(".brand-itaipava").removeAttr("href","");
			

		});
		
		angular.element(".overlay-filter").click(function(){
			angular.element(".filter-products").css("right","-250px");
			angular.element(this).css("display","none");
			angular.element("body").css("overflow-y","auto");
			angular.element(".filter-products .col-xs-6:last-child").css("margin-bottom","initial");
			angular.element(".total-box").css("z-index","999");
			angular.element(".brand-itaipava").attr("href","#!lp_itaipava");
		});


	})

	/* Meus Clientes Controller */
	.controller("meusClientesController", function ($scope) {

		$scope.titulo = "Meus Clientes"

		angular.element(".tab-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-1").css("display", "block");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-2").css("display", "block");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-3").css("display", "block");
		});

		angular.element(".tab-page-2 .card-customer").addClass("customer-pend");

		angular.element(".open-modal-clientes").click(function () {
			angular.element(".overlay-add-customer").css("display", "block");
			angular.element(this).css("z-index", "999");
			angular.element("body").css("overflow-y", "hidden");
		});

		angular.element(".overlay-add-customer").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".open-modal-clientes").css("z-index", "2");
			angular.element("body").css("overflow-y", "auto");
		});

		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".sync img, .cart img").attr("src", "images/search_w.svg");
		angular.element(".sync, .cart").addClass("search");
		angular.element(".sync").removeClass("sync, cart");

		angular.element(".btn-novo-pedido").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});


	})


	/* cep Cadastro Clientes Controller */
	.controller("cepCadastroClientesController", function ($scope) {

		$scope.titulo = "CEP Cadastro de Clientes"

		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");
		//angular.element(".search img").removeAttr("src");

	})


	/* detalhe Clientes Controller */
	.controller("detalheClientesController", function ($scope) {

		$scope.titulo = "Detalhe de Clientes"

		angular.element(".tab-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-1").css("display", "block");
			angular.element(".tab-page-2, .tab-page-3, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-1, .tab-page-3, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-1, .tab-page-2, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-4").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-3").removeClass("active");
			angular.element(".tab-page-4").css("display", "block");
			angular.element(".tab-page-1, .tab-page-2, .tab-page-3").css("display", "none");
		});

		angular.element(".menu-photo").click(function () {
			angular.element(".screen-photo").css("display", "block");
		});

		angular.element(".close-screen-photo").click(function () {
			angular.element(".screen-photo").css("display", "none");
		});

		angular.element(".bar-customer-back").css("display", "block");

	})


	/* cadastro Clientes Controller */
	.controller("cadastroClientesController", function ($scope) {

		$scope.titulo = "Cadastro de Clientes"

		angular.element(".tab-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-1").css("display", "block");
			angular.element(".tab-page-2, .tab-page-3, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-1, .tab-page-3, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-1, .tab-page-2, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-4").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-3").removeClass("active");
			angular.element(".tab-page-4").css("display", "block");
			angular.element(".tab-page-1, .tab-page-2, .tab-page-3").css("display", "none");
		});

		angular.element(".link-btn-tab2").click(function () {
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-2").addClass("active");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-1, .tab-page-3, .tab-page-4").css("display", "none");
		});

		angular.element(".link-btn-tab3").click(function () {
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-3").addClass("active");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-2, .tab-page-1, .tab-page-4").css("display", "none");
		});

		angular.element(".input-pj").click(function () {
			angular.element("body").addClass("pessoa-juridica");
			angular.element(this).addClass("active");
			angular.element(".input-pf").removeClass("active");
			angular.element("body").removeClass("pessoa-fisica");
			angular.element(".pessoa-juridica .tab-page-2 .link-btn-tab3").css("display", "none");
			angular.element(".pessoa-juridica .tab-page-2 .btn-finalizar").css("display", "block");
			angular.element(".txt-cnpj-cpf").text("CNPJ");
			angular.element(".razao-nome").text("Razão Social");
			angular.element(".inscri-rg").text("Inscrição Estadual");
		});

		angular.element(".input-pf").click(function () {
			angular.element("body").addClass("pessoa-fisica");
			angular.element(this).addClass("active");
			angular.element(".input-pj").removeClass("active");
			angular.element("body").removeClass("pessoa-juridica");
			angular.element(".pessoa-fisica .tab-page-2 .link-btn-tab3").css("display", "block");
			angular.element(".pessoa-fisica .tab-page-2 .btn-finalizar").css("display", "none");
			angular.element(".txt-cnpj-cpf").text("CPF");
			angular.element(".razao-nome").text("Nome Completo");
			angular.element(".inscri-rg").text("RG");

		});


		angular.element(".btn-finalizar").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".overlay-modal").click(function () {
			angular.element(this).css("display", "none");
		});

		angular.element(".bar-customer-back").css("display", "block");

		angular.element(".menu-photo").click(function () {
			angular.element(".screen-photo").css("display", "block");
		});

		angular.element(".close-screen-photo").click(function () {
			angular.element(".screen-photo").css("display", "none");
		});

	})


	/* catalogo Produtos Controller */
	.controller("catalogoProdutosController", function ($scope) {

		$scope.titulo = "Catalogo de Produtos"
		angular.element(".sync img, .cart img").attr("src", "images/search_w.svg");
		angular.element(".sync, .cart").addClass("search");
		angular.element(".sync").removeClass("sync, cart");

		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".float-button-grid").addClass("image-grid");

		angular.element(".float-button-grid").click(function () {
			angular.element(this).toggleClass("image-list");
			angular.element(".box-product").toggleClass("product-grid");
		});

	})


	/* estoque Precos Controller */
	.controller("estoquePrecosController", function ($scope) {

		$scope.titulo = "Estoque Preços"

	})

	/* Carrinho Controller */
	.controller("carrinhoController", function ($scope) {

		$scope.titulo = "Carrinho de Compras"
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".menu-photo img, .search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync, .menu-photo").addClass("cart");
		angular.element(".cart").removeClass("search, sync, menu-photo");
		angular.element(".cart").attr("href", "");
		angular.element(".cart").append("<span class='ind-number'></span>");

		angular.element(".delete-product").click(function () {
			angular.element(".overlay-modal-delete").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".btn-actions a").click(function () {
			angular.element(".overlay-modal-delete").css("display", "none");
		})



	})

	/* Formas de Pagamento Controller */
	.controller("formasPagamentoController", function ($scope) {

		$scope.titulo = "Formas de Pagamento"
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".menu-photo img, .search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync, .menu-photo").addClass("cart");
		angular.element(".cart").removeClass("search, sync, menu-photo");
		angular.element(".cart").attr("href", "");
		angular.element(".cart").append("<span class='ind-number'></span>");
	})

	/* Detalhes Fechamento Pedido Controller */
	.controller("detalhesFechamentoPedidoController", function ($scope) {

		$scope.titulo = "Detalhes Fechamento Pedido"

		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".menu-photo img, .search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync, .menu-photo").addClass("cart");
		angular.element(".cart").removeClass("search, sync, menu-photo");
		angular.element(".cart").attr("href", "");
		angular.element(".cart").append("<span class='ind-number'></span>");

		angular.element(".btn-finalizar-pedido").click(function () {
			angular.element(".overlay-finalizar-pedido").css("display", "block");
		});

		angular.element(".overlay-finalizar-pedido").click(function () {
			angular.element(this).css("display", "none");
		});

	})

	/* relatorios Controller */
	.controller("relatoriosController", function ($scope) {

		$scope.titulo = "Relatórios"

	})

	/* Questionario Controller */
	.controller("questionarioController", function ($scope) {

		$scope.titulo = "questionario"
		angular.element(".sync img, .menu-photo img").attr("src","");
		angular.element(".bar-customer-back").css("display", "block");		

		angular.element(".btn-sim").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-nao").removeClass("active");
		});

		angular.element(".btn-nao").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-sim").removeClass("active");
		});

		angular.element(".page-pesquisa01 .btn-resposta").click(function(){
			angular.element(".page-pesquisa01 .btn-default").removeAttr("disabled");
		});

		angular.element(".page-pesquisa02 .btn-resposta").click(function(){
			angular.element(".page-pesquisa02 .btn-default").removeAttr("disabled");
		});

		angular.element(".page-pesquisa03 .btn-resposta").click(function(){
			angular.element(".page-pesquisa03 .btn-default").removeAttr("disabled");
		});
			

		angular.element(".page-pesquisa01 .cam-produto").click(function () {
			angular.element(".page-pesquisa01 .img-produto-photo").attr("src", "images/caixa-itaipava.jpg").css("display", "block").css("width", "50%").css("margin", "auto");
		});

		angular.element(".page-pesquisa02 .cam-produto").click(function () {
			angular.element(".page-pesquisa02 .img-produto-photo").attr("src", "images/caixa-itaipava.jpg").css("display", "block").css("width", "50%").css("margin", "auto");
		});

		angular.element(".page-pesquisa03 .cam-produto").click(function () {
			angular.element(".page-pesquisa03 .img-produto-photo").attr("src", "images/caixa-itaipava.jpg").css("display", "block").css("width", "50%").css("margin", "auto");
		});

		angular.element(".page-pesquisa01 .btn-default").click(function () {
			angular.element(".page-pesquisa02").css("display", "block");
			angular.element(".page-pesquisa01, .page-pesquisa03").css("display", "none");
		});

		angular.element(".page-pesquisa02 .btn-default").click(function () {
			angular.element(".page-pesquisa03").css("display", "block");
			angular.element(".page-pesquisa02, .page-pesquisa01").css("display", "none");
		});

		angular.element(".page-pesquisa03 .btn-default").click(function () {
			angular.element(".page-pesquisa03").css("display", "block");
			angular.element(".page-pesquisa01, .page-pesquisa02").css("display", "none");
		});

		angular.element(".finalizar-questionario").click(function () {
			angular.element(".overlay-finalizar-questionario").css("display", "block");
		});

		angular.element(".overlay-finalizar-questionario").click(function () {
			angular.element(this).css("display", "none");
		});

	})

	/* agendar Visita Controller */
	.controller("agendarVisitaController", function ($scope) {

		$scope.titulo = "Agendar Visita"

	})

	/* Splash Controller */
	.controller("splashController", function ($scope) {

		$scope.titulo = "Splash"

	})

	/* Login Controller */
	.controller("loginController", function ($scope) {

		$scope.titulo = "Login"

	})

	/* lp Itaipava Controller */
	.controller("lpItaipavaController", function ($scope) {

		$scope.titulo = "lp Itaipava Controller"
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");

		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".float-button-grid").addClass("image-grid");
		angular.element(".float-button-grid").css('display', 'none');

		angular.element(".float-button-grid").click(function () {
			angular.element(this).toggleClass("image-list");
			angular.element(".box-product").toggleClass("product-grid");

		})

		angular.element(function () {
			var floatbutton = $(".float-button-grid");
			angular.element(window).scroll(function () {
				var scroll = angular.element(window).scrollTop();

				if (scroll >= 1100) {
					floatbutton.css('display', 'block');
				} else {
					floatbutton.css('display', 'none');
				}
			});
		});


	})