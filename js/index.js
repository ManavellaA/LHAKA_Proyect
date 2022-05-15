$(document).ready(function(){
    let $nav = $('.navbar');
    $(window).scroll(function(){
       let scroll = $(this).scrollTop();
       if (scroll > 200){
            $nav.addClass('bg__scroll');
        } else {
           $nav.removeClass('bg__scroll');
        }  
    });
});