window.addEventListener('load',function(){
    var pos = 0;
    var galeria_mantenimiento = document.querySelectorAll('#mantenimiento-dad .galeria-mini');
    var galeria_diseno = document.querySelectorAll('#diseno-dad .galeria-mini');
    var galeria_jardineria = document.querySelectorAll('#jardineria-dad .galeria-mini');
    var foto_principal_mantenimiento = document.querySelector('#mantenimiento-dad .foto-principal-ch');
    var foto_principal_diseno = document.querySelector('#diseno-dad .foto-principal-ch');
    var foto_principal_jardineria = document.querySelector('#jardineria-dad .foto-principal-ch');

    function descripcion(){
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("CLICK ME");
        btn.appendChild(t);
    }

    for(let i = 0; i < galeria_mantenimiento.length; i++){
        galeria_mantenimiento[i].addEventListener('click',function(){
            let color = this.style.background;
            foto_principal_mantenimiento.style.background = color;
        })
    }
    for(let i = 0; i < galeria_diseno.length; i++){
        galeria_diseno[i].addEventListener('click',function(){
            let color = this.style.background;
            foto_principal_diseno.style.background = color;
        })
    }
    for(let i = 0; i < galeria_jardineria.length; i++){
        galeria_jardineria[i].addEventListener('click',function(){
            let color = this.style.background;
            foto_principal_jardineria.style.background = color;
        })
    }

    function animacion_scroll(y){
        var comienzo = setInterval(frame, 5);
        function frame() {
            if (pos >= y) {
                clearInterval(comienzo);
            } else {
                window.scrollBy(0,10);
            }
            pos+=10;
        }
    }
    if(sessionStorage.getItem('service')){
        var seccion = sessionStorage.getItem('service');
        var alto = document.getElementById(seccion).offsetTop-60;
        animacion_scroll(alto);
    } 
})