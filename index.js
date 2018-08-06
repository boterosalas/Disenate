var button_questionarie = document.getElementById('cuentanos');
var modal = document.getElementById('modal_dad_formulario');
var modal_ch = document.getElementById('modal_ch');
var cierre_modal = document.getElementById('cierreModal');
var boton_menu_mobile = document.getElementById('boton_menu_mobile');
var menu_mobile = document.getElementById('menuMobile');
var pasos_formulario = document.getElementById('pasos_formulario');
var linea_number = document.getElementById('linea_number');
var hoja_preguntas_dad = document.getElementById('hoja_preguntas_dad');
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
});
modal.addEventListener("click", function(e){
    if(e.target.getAttribute('id') == 'cierreModal'){
        console.log(e.target);
        setTimeout(function(){modal.classList.remove('modal-dad-formulario--active');},200);
        modal_ch.classList.remove('modal-ch--active');
    }
    else if(e.target.getAttribute('id') == 'number_1'){
        document.getElementById('number_1').classList.add('number--grande');
        document.getElementById('number_1').classList.add('number--active');
        hoja_preguntas_dad.style.marginLeft = "0%";
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
        hoja_preguntas_dad.style.marginLeft = "-200%";
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
        hoja_preguntas_dad.style.marginLeft = "-400%";
        animacion_number(linea_number,100);
    }
})
boton_menu_mobile.addEventListener("click",function(){
    menu_mobile.classList.toggle('mega-menu-dad-active');
})