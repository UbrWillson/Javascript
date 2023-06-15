import { Validator } from "./validator.js";
import { CookiesManager } from "./cookies_manager.js";

export class Controller {

    constructor() {

        console.log('controller is working');


    }
    activateCreateButton() {
        $('#b1').click(() => {
            console.log('#b1 is working')
            // next
            let key = $('#key').val();
            let val = $('#val').val();
            let exp = $('#exp').val();
            // next
            if(Validator.validateFields(key, val, exp)) {
                CookiesManager.setCookie(key, val, exp);
                $('tbody').html(CookiesManager)
            }
        });
    }

    activateDisplayButton() {
        $('#b2').click(() => {
            console.log('#b2 is working')
            $('tbody').html(CookiesManager.getCookies());
        });
    }

    activateSearchButton() {
        $('#b3').click(() => {
            console.log('#b3 is working')
        });
    }

    activateChangeButton() {
        $('#b4').click(() => {
            console.log('#b4 is working')
        });
    }

    activateDeleteButton() {
        $('#b5').click(() => {
            console.log('#b5 is working')
        });
    }

    activateResetButton() {
        $('#b6').click(() => {
            console.log('#b6 is working')
        });
    }
}
