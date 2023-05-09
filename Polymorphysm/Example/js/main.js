"use strict";

window.addEventListener("load", () => {
  //*
  console.log("MainScript -> Start");
  const display_box = document.getElementById("display_box");
  const start_button = document.getElementById("start_button");

  start_button.addEventListener("click", () => {
    let shapes = [
      new Circle(10),
      new Circle(30),
      new Rectangle(33, 64),
      new Rectangle(120, 93),
      new Rectangle(66, 74)
    ];

    let k = 0;
    let result = 0;

    for (let s of shapes) {
      let x = s.calc_square();
      result += x;
      display_box.innerHTML += `<br>${++k}. ${s}  >>> площа: ${x.toFixed(2)} кв.см`;
    }
    display_box.innerHTML += "<br>==================";
    display_box.innerHTML += `<br>Загальна площа: ${result.toFixed(2)} кв.см`;
  });
});
