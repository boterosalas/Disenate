window.addEventListener('load',function(){
    if(sessionStorage.getItem('servicio-hijo')){
        var servicio_hijo = sessionStorage.getItem('servicio-hijo');
        var largo = servicio_hijo.length;
        var seccion = servicio_hijo.slice(4,largo)+'-dad';
    }else{var servicio_hijo = 0;}
    console.log(seccion);
    setTimeout(function(){alert();document.getElementById(seccion).scrollIntoView()},200);
})