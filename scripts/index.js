let lb_sound = document.querySelector('#lb_sound'); 
    let btn = document.querySelector('.btn');
    let Name = document.querySelector('#name');
    let gravity = document.querySelector('#gravity');
    let climate = document.querySelector('#climate');
    let terrain = document.querySelector('#terrain');

document.addEventListener('DOMContentLoaded', function() {
    
    btn.addEventListener('click', function() { 
        lb_sound.play();
    });
});

function getData(){
    let randomPlanets = Math.floor((Math.random() *61) +1)
    let swapi = 'https://swapi.dev/api/planets' + randomPlanets;
}


