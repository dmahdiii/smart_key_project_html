$(function() {


    /**********************************
     ************** SUB-NAV ***********
     **********************************/


    /*********** CLICK ON CATEGORY  ************/

    $(".sub-nav-category>div").click(function() {
        $(this).attr('id', 'sub-nav-category-active');

        var subCatPosX = $(this).position().left;
        var catWidth = $(this).width();
        var subCat = $('.sub-' + this.className);

        subCat.css('width', catWidth + 14 + 'px');
        subCat.css('left', subCatPosX + 'px');
        subCat.slideDown(350);
    });

    /********* MOUSSE LEAVE CATEGORY  *********/

    $('.sub-nav-category>div').mouseleave(function() {
        var subCat = $('.sub-' + this.className);
        if (subCat.is(":visible") && subCat.is(":hover")) {
            $(this).attr('id', 'sub-nav-category-active-down');
        } else {
            subCat.slideUp(150);
            $(this).attr('id', '');
        }
    });

    /******* MOUSSE LEAVE SUB-CATEGORY  ******/

    $('div[class*="sub-cat"]').mouseleave(function() {
        $(this).slideUp(150);
        $('.sub-nav-category>div').attr('id', '');
    });


    /****** MOUSSE CLICK ON SUB-CATEGORY  ******/


    $('div[class*="sub-cat"] .container').click(function() {
        // hide all products
        $('.main-section .product').removeClass('visible');
        // display 'div' according to sub-cat
        var item = $(this).children().attr('id');

        // temporaire pour la présentation
        if (item != 'pack-a' && item != 'silicone') {
            item = 'empty';
        }

        $('.main-section .' + item).addClass('visible');
        $(window).scrollTop($('.main-section .' + item).offset().top);
    });

    /*  on click on sub-cat => open load page
    $('div[class*="sub-cat"] .container').on('click', function() {
        window.location.href = './packs.html';
    });
    */


    /* auto adjust when sub-nav-caetgory is display Row
    
    var mimDistBorder = 150;
    $(".sub-nav-category>div").click(function() {
        $(this).attr('id', 'sub-nav-category-active');
        var docWidth = $(document).width() // width of document

        var catPosX = $(this).position().left; // position X of category
        var catWidth = $(this).width(); // width of category

        var subCat = $('.sub-' + this.className);
        var subCatWidth = subCat.width(); // width of sub-category
        var subCatPosX;

        subCatPosX = catPosX - (subCatWidth / 2) + catWidth;
        console.log("docWidth/2: ", docWidth / 2, ", catPosX: ", catPosX, ", catWidth: ", catWidth, ", subCatWidth: ", subCatWidth, ", subCatPosX: ", subCatPosX)
        if ((catPosX + (catWidth / 2) > docWidth / 2) && (subCatPosX + subCatWidth) > mimDistBorder) {

            //console.log("dépasse à drotie")

            subCatPosX = docWidth - mimDistBorder - subCatWidth;
        }
        if ((catPosX + (catWidth / 2) < docWidth / 2) && (subCatPosX < mimDistBorder)) {

            //console.log("dépasse à gauche")

            subCatPosX = mimDistBorder;
        }
        subCat.css('max-width', docWidth - (mimDistBorder * 2) + 'px');
        subCat.css('left', subCatPosX + 'px');
        subCat.slideDown(350);
    });
    */
});