$(document).ready(function(){
    var $nav = $('.navbar');
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > previousScroll && scroll > 200){
           $nav.addClass('bg__scroll');
       } else {
           $nav.removeClass('bg__scroll');
       }
       previousScroll = scroll;    
    });
 
});
// function autosize(multiplier) {
//     let imgHeight = document.querySelector('.view-img').offsetWidth;
    
//     imgHeight = imgHeight * multiplier; 

//     for(let i = 1; i <= 5; i++) {
//         document.querySelector(`.height-js${i}`).style.height = imgHeight + 'px';    
//     }
// }

// function sizeAjust(){
// if(window.innerWidth <= 332){
//     autosize(2.5);
// }else if(window.innerWidth <= 437){
//     autosize(1.8);
//  }else if(window.innerWidth <= 472){
//      autosize(1.5);
//   }else if(window.innerWidth <= 557){
//      autosize(1.1);  
//    }else if(window.innerWidth <= 779){
//       autosize(0.85);
//     }
// }
// sizeAjust();