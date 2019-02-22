$(function() {	
    $("#quest").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $("#quest").addClass("anim-swipe-left");
            window.location.href = "#!quest_detalhe_2";
        }
    });
})

$(function() {
    $("#quest2").swipe({
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            $("#quest2").addClass("anim-swipe-right");
            window.location.href = "#!quest_detalhe";
        }
    });
})