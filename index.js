var button = document.querySelector('.questionnaire');
var modal = document.getElementById('modal_dad_formulario');
var modal_ch = document.getElementById('modal_ch');
var cierre_modal = document.getElementById('cierreModal');
var boton_menu_mobile = document.getElementById('boton_menu_mobile');
var menu_mobile = document.getElementById('menuMobile');
button.addEventListener("click", function(e){
    console.log(e.target);
    if(e.target.getAttribute('id') == 'cuentanos'){
        modal.classList.add('modal-dad-formulario--active');
        modal_ch.classList.add('modal-ch--active');
    }
})
modal.addEventListener("click", function(e){
    if(e.target.getAttribute('id') == 'cierreModal'){
        console.log(e.target);
        setTimeout(function(){modal.classList.remove('modal-dad-formulario--active');},200);
        modal_ch.classList.remove('modal-ch--active');
    }
})
boton_menu_mobile.addEventListener("click",function(){
    menu_mobile.classList.toggle('mega-menu-dad-active');
})