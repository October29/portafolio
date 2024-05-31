const boxes = document.querySelectorAll('.cuadro');
const body = document.querySelector('body');
var i = 0;
boxes.forEach(box => {
    box.addEventListener('click', function() {
        box.classList.toggle('full');
        if(box.classList.contains('uno')){
            body.classList.toggle('bg-cinco');
        } else if (box.classList.contains('dos')){
            body.classList.toggle('bg-dos');
        } else if (box.classList.contains('tres')){
            body.classList.toggle('bg-dos');
        } else if (box.classList.contains('cuatro')){
            body.classList.toggle('bg-seis');
        } else if (box.classList.contains('cinco')){
            body.classList.toggle('bg-uno');
        } else if (box.classList.contains('seis')){
            body.classList.toggle('bg-siete');
        } else if (box.classList.contains('siete')){
            body.classList.toggle('bg-nueve');
        } else if (box.classList.contains('ocho')){
            body.classList.toggle('bg-tres');
        } else if (box.classList.contains('nueve')){
            body.classList.toggle('bg-ocho');
        } else if (box.classList.contains('diez')){
            body.classList.toggle('bg-diez');
        }
    });
})

