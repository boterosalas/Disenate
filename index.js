var button_questionarie = document.getElementById('cuentanos');
var modal = document.getElementById('modal_dad_formulario');
var fondo_modal = document.getElementById('fondo_modal');
var modal_ch = document.getElementById('modal_ch');
var cierre_modal = document.getElementById('cierreModal');
var boton_menu_mobile = document.getElementById('boton_menu_mobile');
var menu_mobile = document.getElementById('menuMobile');
var pasos_formulario = document.getElementById('pasos_formulario');
var linea_number = document.getElementById('linea_number');
var hoja_preguntas_dad = document.getElementById('hoja_preguntas_dad');
var img_service_dad = document.getElementsByClassName('img-service-dad');
var input_text = document.getElementsByClassName('input_text');
for(let i = 0; i < img_service_dad.length; i++){
    img_service_dad[i].addEventListener('click',function(e){
        sessionStorage.setItem('service',img_service_dad[i].getAttribute('id'));
    })
}
var pos = 0;
function animacion_number(elem,x){
    var comienzo = setInterval(frame, 5);
    function frame() {
        if (pos == x) {
            clearInterval(comienzo);
        } else if(pos < x){
            pos++;
            elem.style.width = pos+'%';
        } else {
            pos--; 
            elem.style.width = pos+'%';
        }
    }
}
button_questionarie.addEventListener("click", function(){
    modal.classList.add('modal-dad-formulario--active');
    modal_ch.classList.add('modal-ch--active');
    fondo_modal.classList.add('fondo-modal--active');
});
modal.addEventListener("click", function(e){
    if(e.target.getAttribute('id') == 'cierreModal'){
        console.log(e.target);
        setTimeout(function(){modal.classList.remove('modal-dad-formulario--active');fondo_modal.classList.remove('fondo-modal--active');},200);
        modal_ch.classList.remove('modal-ch--active');
        document.getElementById('number_1').classList.add('number--grande');
        document.getElementById('number_1').classList.add('number--active');
        hoja_preguntas_dad.style.transform = "translateX(0%)";
        animacion_number(linea_number,0);
        document.getElementById('number_2').classList.remove('number--active');
        document.getElementById('number_3').classList.remove('number--active');
        document.getElementById('number_2').classList.remove('number--grande');
        document.getElementById('number_3').classList.remove('number--grande');
    }
    else if(e.target.getAttribute('id') == 'number_1'){
        document.getElementById('number_1').classList.add('number--grande');
        document.getElementById('number_1').classList.add('number--active');
        hoja_preguntas_dad.style.transform = "translateX(0%)";
        animacion_number(linea_number,0);
        document.getElementById('number_2').classList.remove('number--active');
        document.getElementById('number_3').classList.remove('number--active');
        document.getElementById('number_2').classList.remove('number--grande');
        document.getElementById('number_3').classList.remove('number--grande');
    }
    else if(e.target.getAttribute('id') == 'number_2'){
        document.getElementById('number_2').classList.add('number--grande');
        document.getElementById('number_1').classList.add('number--active');
        document.getElementById('number_2').classList.add('number--active');
        hoja_preguntas_dad.style.transform = "translateX(-100%)";
        animacion_number(linea_number,50);
        document.getElementById('number_3').classList.remove('number--active');
        document.getElementById('number_1').classList.remove('number--grande');
        document.getElementById('number_3').classList.remove('number--grande');
    }
    else if(e.target.getAttribute('id') == 'number_3'){
        document.getElementById('number_3').classList.add('number--grande');
        document.getElementById('number_1').classList.add('number--active');
        document.getElementById('number_2').classList.add('number--active');
        document.getElementById('number_3').classList.add('number--active');
        document.getElementById('number_1').classList.remove('number--grande');
        document.getElementById('number_2').classList.remove('number--grande');
        hoja_preguntas_dad.style.transform = "translateX(-200%)";
        animacion_number(linea_number,100);
    }
})
boton_menu_mobile.addEventListener("click",function(){
    menu_mobile.classList.toggle('mega-menu-dad-active');
})
