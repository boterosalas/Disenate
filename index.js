window.addEventListener('load',function(){
    var button = document.querySelector('.questionnaire');
    var modal = document.getElementById('modal-dad');
    var modal_ch = document.getElementById('modal-ch');
    var cierre_modal = document.getElementById('cierre-modal');
    var padre_servicios = document.getElementById('what-dad');
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
            modal_ch.classList.remove('modal-ch--active');
        }
    });
    padre_servicios.addEventListener('click', function(e){
        let servicio_hijo = e.target.getAttribute('id');
        sessionStorage.setItem('servicio-hijo',servicio_hijo);
        location.href="./servicios.html";
    })
});