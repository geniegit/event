$(document).ready(function(){

    /*mobile menu*/
    $('.mobile-btn').on('click',function(){
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('open');
        $('body').toggleClass('mobile-menu-open')
    })

    /*tab menu (일정,연사)*/
    $('ul.tab01 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tab01 li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    /*tab menu2 (오시는 길)*/
    $('ul.tab02 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tab02 li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
});
