'use strict';

class Controller {
    constructor() {
        this._login = document.getElementById('login');
        this._pass1 = document.getElementById('pass1');
        this._pass2 = document.getElementById('pass2');
        this._email = document.getElementById('email');

        this._loginMess = document.getElementById('login-mess');
        this._pass1Mess = document.getElementById('pass1-mess');
        this._pass2Mess = document.getElementById('pass2-mess');
        this._emailMess = document.getElementById('email-mess');

        this._form = document.getElementById('reg-form');
        this._validator = new Validator();               
        console.log("controller is working");
        

    }
    activate_login() {
        console.log('login_activator func');
        this._login.addEventListener('blur', () => {
        this._validator.checkLogin(this._login.value);
          if (this._validator._loginIsValid) {
            this._login.style.boxShadow = '0px 0px 10px green';
            this._loginMess.innerText = '';
          } else {
            this._login.style.boxShadow = '0px 0px 10px red';
            this._loginMess.innerText = '\
                Login should have lenght from 6 to 16 symbols,\
                which can include small and big letters\
                or numbers, and symbol _\
            ';
          }
        });
    }
          activate_pass1() {
            console.log('pass1_activator func');
            this._pass1.addEventListener('blur', () => {
            this._validator.checkPass1(this._pass1.value);
              if (this._validator._pass1IsValid) {
                this._pass1.style.boxShadow = '0px 0px 10px green';
                this._pass1Mess.innerText = '';
              } else {
                this._pass1.style.boxShadow = '0px 0px 10px red';
                this._pass1Mess.innerText = '\
                    Password should have lenght from 8 symbols,\
                    which can include small and big letters\
                    or numbers, and symbol _, also must be\
                    added small and big letter\
                    and 1 number\
                ';

              }
            });
        }

            activate_pass2() {
                console.log('pass2_activator func');
                this._pass2.addEventListener('blur', () => {
                this._validator.checkPass1(this._pass1.value, this._pass2.value);
                  if (this._validator._pass1IsValid) {
                    this._pass2.style.boxShadow = '0px 0px 10px green';
                    this._pass2Mess.innerText = '';
                  } else {
                    this._pass2.style.boxShadow = '0px 0px 10px red';
                    this._pass2Mess.innerText = '\
                password should be the reference to password 1';
                  
                  }
                });

            }
       activate_email() {
                console.log('pass2_activator func');
                this._email.addEventListener('blur', () => {
                this._validator.checkPass1(this._email.value);
                  if (this._validator._pass1IsValid) {
                    this._email.style.boxShadow = '0px 0px 10px green';
                    this._emailMess.innerText = '';
                  } else {
                    this._email.style.boxShadow = '0px 0px 10px red';
                    this._emailMess.innerText = '\
                        Password should have lenght from 8 symbols,\
                        which can include small and big letters\
                        or numbers, and symbol _, also must be\
                        added small and big letter\
                        and 1 number\
                    ';
                  
                  }
                });
                
            }
        
    }

    activate_submit() {
        console.log('submit_activator func');
        this._form.addEventListener('submit', () => {
            console.log('submit clicker is working');


            if (this._validator.checkAll()) {
                this._form.submit();
            }
            else {
                alert ('Sending is blocked by validator!');
            }
        });
    }

