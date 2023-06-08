import { Controller } from "./controller.js";


$(document).ready(() => {


    //1
    console.log('Jquery is working');
    const controller = new Controller();
    //2
    controller.activateLoadButton();
    controller.activateResetButton();
    controller.activateRectButton();
    controller.activateCircleButton();
})