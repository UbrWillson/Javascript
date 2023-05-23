class Controller {

constructor() {
    this._nav = $('section > nav');
    this._gallery = $('#gallery');
    this._logo = $('#logo-img');
    this._buttons = $('.nav-img')
    console.log('Controller is working');
    }

    loadImages(dir, prefix) {
        this._nav.hide(1000);
        this._gallery.show(1000);
        for (let i = 1; i<= 5; i++) {
            $('<img>', { 
                src: `assets/img/cats/c_${i}.jpg`,
                class: 'mini'
             }).appendTo(this._gallery);
        }
    }

    activateNav() {
        console.log('nav can be activated')
        this._buttons.click(() => {
            console.log('buttons clicker is working');
            this.loadImages(0, 0);
        });
    }

}