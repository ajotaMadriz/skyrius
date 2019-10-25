AOS.init({
    offset: 200,
    duration: 2000,
});
//----------------------------CONTACTO-------------------------

$('.input').focus(function(){
    $(this).parent().addClass('focus');
}).blur(function(){
    if($(this).val() === ''){
        $(this).parent().removeClass('focus');
    }
});
// ---------- boton scrollTop-------------
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('.boton-top').fadeIn();
        }else{
            $('.boton-top').fadeOut();
        }
    });
    // ----- smooth scrolling to top---
        $('.boton-top').click(function(){
            $('html,body').animate({scrollTop: 0}, 500)
        })
});

// ----------------- Loader ---------------------

var Loader;
function loadNow(opacity){
    if(opacity <= 0){
        displayContect();
    }
    else{
        loader.style.opacity = opacity;
        window.setTimeout(function(){
            loadNow(opacity - 0.05)
        }, 50);
    }
}
function displayContect(){
    loader.style.display = 'none';
    document.getElementById('contenido-completo').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function(){
    loader = document.getElementById('loader');
    loadNow(1);
})