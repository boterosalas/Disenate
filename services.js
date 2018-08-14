window.addEventListener('load',function(){
    var pos = 0;
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
        console.log(alto);
    }
})