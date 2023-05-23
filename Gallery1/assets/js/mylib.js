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

        this._gallery.html(`
        <img id="back" src="../Gallery1/assets/icons/left_arrow.ico" alt="arrow" title="Click for returning to navigation panel">
        <br>
        `);
        for (let i = 1; i <= 5; i++) {
            $('<img>', { 
                src: `assets/img/${dir}/${prefix}_${i}.jpg`,
                class: 'mini'
             }).appendTo(this._gallery);
        }
    }

    dispatch(logoUrl) {
        if (logoUrl === 'assets/logo/c_logo.png') {
            this.loadImages('cats', 'c');
        }
        else if (logoUrl === 'assets/logo/d_logo.png') {
            this.loadImages('dogs', 'd');
        }
        else if (logoUrl === 'assets/logo/fish_logo.png') {
            this.loadImages('fishes', 'f');
        }
    }

    activateNav() {
        console.log('nav can be activated')
        this._buttons.click((event) => {
            console.log('buttons clicker is working');
            let url = $(event.target).attr('src');
            console.log(`logo is working ${url}`);
            this.dispatch(url);
        });
    }
    activateBack() {
        $('#gallery').on('click', '#back',    () => {
            console.log('Back func is working');
            //
            this._nav.show(1000);
            this._gallery.hide(1000);
            //
            this._logo.animate({'width': '0%'}, 1);
            this._logo.attr('src', 'assets/logo/main_logo');
            this._logo.animate({'width': '50%'}, 1000);
        });
    }

    activateMini() {
        $('#gallery').on('click', '.mini',    (event) => { 
           console.log('click on mini is working');
            let miniUrl = $(event.target).attr('src');
            console.log(`miniUrl is working ${miniUrl}`);
            //
            this._logo.animate({'width': '0%'}, 1);
            this._logo.attr('src', miniUrl);
            this._logo.animate({'width': '100%'}, 500);
        });
}
  activateRotate() {
    this._buttons.hover(
        function() {
            $(this).css('transform', 'rotate(360deg)');
        },
        function() {
            $(this).css('transform', 'rotate(0deg)');
        }
    );
  }      

}


