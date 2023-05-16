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
        let regular_expression = /^[a-z,A-Z,0-9\_]{6,16}$/;
        this._loginIsValid = regular_expression.test(loginValue);
    }

    checkPass1(pass1Value) {
        let regular_expression = /^(?=.*[a-z])(?=.*[A-Z](?=.*[0-9]))[a-z,A-Z,0-9\_]{8,}$/;
        this._pass1IsValid = regular_expression.test(pass1Value);
    }

    checkPass2(pass1Value, pass2Value) {
        this._pass2IsValid = (pass1Value === pass2Value);
    }

    checkEmail(emailValue) {
        let regular_expression = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        this._emailIsValid = regular_expression.test(emailValue);
    }

    checkAll() {
        return (this._loginIsValid && this._pass1IsValid && this._pass2IsValid && this._emailIsValid);
    }
}