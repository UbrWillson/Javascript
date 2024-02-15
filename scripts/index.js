let doc = document;
let btn = doc.querySelector(".btn");
let btnB = doc.querySelector(".btn-breed")
let img = doc.querySelector("#img");
let inpt = doc.querySelector("#text_inpt");
let input = doc.querySelector("#text_input");

btn.onclick = function get_dog() {
    let url = `https://dog.ceo/api/breed/${inpt.value}/images/random`; 

    fetch(url)
        .then(response => response.json())
        .then(data => {
            img.src = data.message; 
        })
        .catch(error => {
            console.error("Помилка при отриманні зображення собаки:", error);
        });
};

btnB.onclick = function dog_list() {
    let url = `https://dog.ceo/api/breed/hound/${input.value}/images`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.message.length); 
            img.src = data.message[randomIndex]; 
        })
        .catch(error => {
            console.error("Помилка при отриманні зображення собаки:", error);
        });
}
