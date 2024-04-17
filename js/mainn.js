const  typed = new Typed('.typed', {
	strings: [
	          '<i class="Disney">22</i>', 
	          '<i class="Disney">23.5</i>', 
	          '<i class="Disney">24</i>', 
	          '<i class="Disney">25.5</i>'
	          ],

    stringsElement: '#cadenas-texto', //llamar ID//
    typedSpeed: 80, 
    startDelay:300, //tiempo antes de iniciar la animación//
    backSpeed:80, //Va de regreso//
    smartBackspace: true,
    shuffle: true,
    backDelay:1800,
    loop: true, //Repite la cadena//
    loopCount: false, //False, sea infinito//
    showCursor: true,
    cursorChar: '/',
    contentType:'html', // texto sin formato//
});