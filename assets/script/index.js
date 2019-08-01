$(function() {

    /***********************************
     ************** SCROLL *************
     ***********************************/

    $(window).scroll(function(event) {
        // A chaque fois que l'utilisateur va scroller (descendre la page)
        var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical

        //si cette valeur > à 200 on ajouter la class
        if (y >= 0) {
            $('.nav').addClass('fixed');
            $('.sub-nav').addClass('sub-nav-fixed');
        } else {
            // sinon, on l'enlève
            $('.nav').removeClass('fixed');
            $('.sub-nav"').removeClass('sub-nav-fixed');

        }
    });


    /************************************
     ************ SLIDE-BOX *************
     ************************************/

    var timer = setInterval(animeSlideBox, 3500);

    function animeSlideBox() {
        $(".light-box ul").animate({
            "marginLeft": "-800"
        }, 800, function() {
            $(this).css({ "marginLeft": "0" })
                .find("li:last")
                .after($(this).find("li:first"));
        });
    }

    $('.light-box').hover(function(e) {
        clearInterval(timer);
    }, function(e) {
        timer = setInterval(animeSlideBox, 3500);
    });

    $('.light-box').click(function() {
        animeSlideBox();
    });


    /***********************************
     ************** LOGIN *************
     ***********************************/

    // LOGIN-BUTTON
    $('#nav-button-login').click(function() {
        $("#nodal-login").show(function() {
            $("#nodal-login").css("top", "70px");
            $("#nodal-login").animate({
                "opacity": 1
            }, 200, "swing");
            $('#log-email').val('');
            $('#login-password').val('');
        });
    });


    /***********************************
     ************** BASKET *************
     ***********************************/

    $("#nav-basket").on('click', function() {
        window.location.href = './basket.html';
    });
});