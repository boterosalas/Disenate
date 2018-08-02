var button = document.querySelector('.questionnaire');
var modal = document.getElementById('modal-dad');
var modal_ch = document.getElementById('modal-ch');
var cierre_modal = document.getElementById('cierre-modal');
var boton_menu_mobile = document.getElementById('boton-menu-mobile');
var menu_mobile = document.getElementById('menu-mobile');
button.addEventListener("click", function(e){
    console.log(e.target);
    if(e.target.getAttribute('id') == 'maintenance-button'){
        modal.classList.add('modal-dad--active');
        modal_ch.classList.add('modal-ch--active');
    }
    else if(e.target.getAttribute('id') == 'design-button'){
        modal.classList.add('modal-dad--active');
        modal_ch.classList.add('modal-ch--active');
    }
})
modal.addEventListener("click", function(e){
    if(e.target.getAttribute('id') == 'cierre-modal'){
        console.log(e.target);
        setTimeout(function(){modal.classList.remove('modal-dad--active');},200);
        //modal.classList.remove('modal-dad--active');
        modal_ch.classList.remove('modal-ch--active');
    }
})
boton_menu_mobile.addEventListener("click",function(){
    menu_mobile.classList.toggle('mega-menu-dad-active');
})