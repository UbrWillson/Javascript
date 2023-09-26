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

    function getData() {
        generateDataLoading();
        let randomPlanet = Math.floor(Math.random() * 61) + 1;
        let swApi = `https://swapi.dev/api/planets/${randomPlanet}/`;
    
        fetch(swApi)
            .then(response => response.json())
            .then(data => generateData(data))
            .catch(e => generateDataFail());
    }
    
    function generateData(data) {
        Name.innerText = "Name of the planet: " + data.name;
        gravity.innerText = "Gravity of the planet: " + data.gravity;
        climate.innerText = "Climate of the planet: " + data.climate;
        terrain.innerText = "Terrain of the planet: " + data.terrain;
    }
    
    function generateDataFail() {
        Name.innerText = 'not working'
        gravity.innerText = ''
        climate.innerText = ''
        terrain.innerText = ''
    }
    
    function generateDataLoading() {
        Name.innerHTML = ''
        gravity.innerText = ''
        climate.innerText = ''
        terrain.innerText = ''
    }
    
    btn.addEventListener('click', getData);

});





