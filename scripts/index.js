let doc = document;
let btn = doc.querySelector(".btn");
let img = doc.querySelector("#img");
let inpt = doc.querySelector("#text_inpt");

btn.onclick = function get_dog() {
    let url = `https://dog.ceo/api/breed/${inpt.value}/images/random`;

    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            img.src = data.message;
        })
        .catch(error => {
            console.error("Помилка при отриманні зображення собаки:", error);
        });
};