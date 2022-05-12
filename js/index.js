$(document).ready(function(){
    let $nav = $('.navbar');
    let $a__nav = $('.a__nav');
    $(window).scroll(function(event){
       let scroll = $(this).scrollTop();
       if (scroll > 200){
            $nav.addClass('bg__scroll');
            $a__nav.addClass('a__nav__scroll');       
        } else {
           $nav.removeClass('bg__scroll');
           $a__nav.removeClass('a__nav__scroll');
        }  
    });
});