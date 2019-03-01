$(function() {
    angular.element(".carrinho-bonificacao").swipe({
        longTap:function(event, target) {
            $("#overlay").css('display','block');
            $("#buttons").css('display','block');
            $("#buttons").addClass("menu-bonificacao");
            $(".menu-bonificacao").appendTo(".box-product");
        }
    });
    $("#overlay").click(function(){
        $("#overlay").css('display','none');
        $("#buttons").css('display','none');
    })
    $("#buttons").click(function(){
        $("#overlay").css('display','none');
        $("#buttons").css('display','none');
		angular.element(".ind-number").css("display", "block");
		angular.element(".ind-number").addClass("anima-circle");
    })
})