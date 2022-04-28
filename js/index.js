if(window.innerWidth <= 779){
    
    let imgHeight = document.querySelector('.view-img').offsetWidth;
    
    imgHeight = imgHeight * 0.6; 
    
    document.querySelector(".height-js1").style.height = imgHeight + 'px';
    document.querySelector(".height-js2").style.height = imgHeight + 'px';
    document.querySelector(".height-js3").style.height = imgHeight + 'px';
    document.querySelector(".height-js4").style.height = imgHeight + 'px';
    document.querySelector(".height-js5").style.height = imgHeight + 'px';
}