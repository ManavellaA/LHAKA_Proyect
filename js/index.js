if(window.innerHeight > 780){
    let imgHeight = document.querySelector('.view-img').offsetWidth;
    
    imgHeight = imgHeight * 0.6; 
    
    document.querySelector('.view-div1').style.height = imgHeight + 'px';
    document.querySelector('.view-div2').style.height = imgHeight + 'px';
    document.querySelector('.view-div3').style.height = imgHeight + 'px';
}