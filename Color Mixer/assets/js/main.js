import { Controller } from "./controller.js"

$(document).ready(() => {


    console.log('color mixer is working')
    let controller = new Controller();




    // 2
    controller.redInit();
    controller.greenInit();
    controller.blueInit();


    // 3
    controller.mixColors();
})