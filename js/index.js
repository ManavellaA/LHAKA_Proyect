$(document).ready(function(){
    let $nav = $('.navbar');
    $(window).scroll(function(event){
       let scroll = $(this).scrollTop();
       if (scroll > 50){
            $nav.addClass('bg__scroll');    
        } else {
           $nav.removeClass('bg__scroll');
        }  
    });

    $('.a__nav').click(function(){ 
        $('#navbarNav').removeClass('show')     
    });
});