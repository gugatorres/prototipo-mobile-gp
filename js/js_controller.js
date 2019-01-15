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
		angular.element("body").css("overflow-y", "hidden");
	});
	angular.element(".search").addClass("sync");
	angular.element(".sync").removeClass("search");
	angular.element(".bar-customer-back").css("display", "none");
	angular.element(".sync img").attr("src", "images/cloud.svg");

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

		angular.element(".add-product").click(function() {
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
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");
		
	
		angular.element(".add-product").click(function() {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".add-product-sum").click(function(){
			angular.element(".overlay-modal").css("display","none");
			angular.element(".total-box").css("bottom","0");
			angular.element(".overlay-total").css("display","block");	
			});

			angular.element(".overlay-total").click(function(){
				angular.element(this).css("display","none");
				angular.element(".total-box").css("bottom","-53px");	
				})	
	
	
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
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");

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
			angular.element(".tab-page-2").css("display", "none");
			angular.element(".tab-page-3").css("display", "none");
			angular.element(".tab-page-4").css("display", "none");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-1").css("display", "none");
			angular.element(".tab-page-3").css("display", "none");
			angular.element(".tab-page-4").css("display", "none");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-1").css("display", "none");
			angular.element(".tab-page-2").css("display", "none");
			angular.element(".tab-page-4").css("display", "none");
		});

		angular.element(".tab-4").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-3").removeClass("active");
			angular.element(".tab-page-4").css("display", "block");
			angular.element(".tab-page-1").css("display", "none");
			angular.element(".tab-page-2").css("display", "none");
			angular.element(".tab-page-3").css("display", "none");
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
			angular.element(".tab-page-2").css("display", "none");
			angular.element(".tab-page-3").css("display", "none");
			angular.element(".tab-page-4").css("display", "none");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-1").css("display", "none");
			angular.element(".tab-page-3").css("display", "none");
			angular.element(".tab-page-4").css("display", "none");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-1").css("display", "none");
			angular.element(".tab-page-2").css("display", "none");
			angular.element(".tab-page-4").css("display", "none");
		});

		angular.element(".tab-4").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-3").removeClass("active");
			angular.element(".tab-page-4").css("display", "block");
			angular.element(".tab-page-1").css("display", "none");
			angular.element(".tab-page-2").css("display", "none");
			angular.element(".tab-page-3").css("display", "none");
		});

		angular.element(".link-btn-tab2").click(function () {
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-2").addClass("active");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-1").css("display", "none");
			angular.element(".tab-page-3").css("display", "none");
			angular.element(".tab-page-4").css("display", "none");
		});

		angular.element(".link-btn-tab3").click(function () {
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-3").addClass("active");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-2").css("display", "none");
			angular.element(".tab-page-1").css("display", "none");
			angular.element(".tab-page-4").css("display", "none");
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
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");

		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".float-button-grid").addClass("image-grid");

		angular.element(".float-button-grid").click(function () {
			angular.element(this).toggleClass("image-list");
			angular.element(".box-product").toggleClass("product-grid");

		})

	})


	/* estoque Precos Controller */
	.controller("estoquePrecosController", function ($scope) {

		$scope.titulo = "Estoque Preços"

	})

	/* relatorios Controller */
	.controller("relatoriosController", function ($scope) {

		$scope.titulo = "Relatórios"

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