const boxes = document.querySelectorAll('.cuadro');
const body = document.querySelector('body');
var i = 0;
boxes.forEach(box => {
    box.addEventListener('click', function() {
        box.classList.toggle('full');
    });
    box.addEventListener('mouseover', function() {
        
        if(box.classList.contains('uno')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-cinco');
        } else if (box.classList.contains('dos')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-cuatro');
        } else if (box.classList.contains('tres')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-dos');
        } else if (box.classList.contains('cuatro')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-seis');
        } else if (box.classList.contains('cinco')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-uno');
        } else if (box.classList.contains('seis')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-siete');
        } else if (box.classList.contains('siete')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-nueve');
        } else if (box.classList.contains('ocho')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-tres');
        } else if (box.classList.contains('nueve')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-ocho');
        } else if (box.classList.contains('diez')){
            body.classList.remove('bg-uno','bg-dos','bg-tres','bg-cuatro','bg-cinco','bg-seis','bg-siete','bg-ocho','bg-nueve','bg-diez');
            body.classList.add('bg-diez');
        }
    });
})

