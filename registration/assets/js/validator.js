'use strict';


class Validator {

    constructor() {
        this._loginIsValid = false;
        this._pass1IsValid = false;
        this._pass2IsValid = false;
        this._emailIsValid = false;
        console.log('Validator is working');


        
    }
    get _loginIsValid() {
        return this._loginIsValid;
    }

    get _pass1IsValid() {
        return this._pass1IsValid;
    }

    get _pass2IsValid() {
        return this._pass2IsValid;
    }

    get _emailIsValid() {
        return this._emailIsValid;
    }

    checkLogin(loginValue) {
        let regular_expression = /^[a-z,A-Z,0-9\_\-\.]{6,16}$/;
        if (regular_expression.test(loginValue)){
            this._loginIsValid = true;

        } else{
            this._loginIsValid = false;
        }
    }
}