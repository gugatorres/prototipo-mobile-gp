$(function() {
    $("#home").swipe({
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            if($('#mySidenav').css('display') == 'block')
            {
                $("#mySidenav").css("left", "0px");
                $(".back-menu").css("display", "block");
                $(".back-menu").css("left", "0px");
                $(".back-menu").css("background","#000000b3");
            }
        }
    });
})

$(function() {
    $("#home").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $("#mySidenav").css("left", "-310px");
            $(".back-menu").css("display", "none");
            $(".menu-open").css("display", "block");
            $("body").css("overflow-y", "auto");
        }
    });
})