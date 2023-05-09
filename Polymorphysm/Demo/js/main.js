"use strict";

// ============================================================================================================================
// Поліморфізм це різноманіття способів перевизначення у похідних класах певних методів базового класу, який вони успадковують.
// ============================================================================================================================
// 1 = має бути базовий клас та декілька його нащадків
// 2 - У нащадках має бути метод який вже визначений у базовому класі
// ============================================================================================================================

window.addEventListener("load", () => {
  console.log("Main_script => Start");
  // 1 - Визначення дискрипторів елементів:
  const displayBox = document.getElementById("display_box");
  const start_button = document.getElementById("start_button");

  // 2 - Створюємо ключові події:
  start_button.addEventListener("click", () => {
    console.log("start_button -> click");
    // 1
    let animal = new Animal("якась тваринка");
    console.log(animal);
    displayBox.innerHTML = `${animal}<br>`;
    // 2
    let animals = [new Bird(), new Dog(), new Fish(), new Frog()];
    // 3
    for (let a of animals) {
      displayBox.innerHTML += `${a}<br>`;
    }
  });
});
