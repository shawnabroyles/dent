jQuery(document).ready(function($){
    $('.menu-trigger').click(function(e){
//         // $('.popout-menu').toggleClass('hide');
        $('.popout-menu').toggleClass('popout-is-open');
        $('.menu-trigger').toggleClass('fa-bars');
        $('.menu-trigger').toggleClass('fa-times');



    });


    $('.menu-item-has-children').click(function(e){
        $(this).children('.sub-menu').toggleClass("sub-menu-is-open");
        $('.sub-menu-back-target').toggleClass('sub-menu-back');

    })

    $('.sub-menu-back-target').click(function(e){
        $('.sub-menu').removeClass('sub-menu-is-open');
        $(this).removeClass('sub-menu-back');
        
    })
});