export class Controller {

    constructor() {
        console.log('Controller is working');
    }
    mixColors() {

    }

    redInit() {
        console.log('redInit is working');
        $('#red-slider').slider({
            orientation: 'vertical',
            range: 'min',
            min: 0,
            max: 255,
            value: 150,
            width: 100,
            slide: function (event, ui) {
                $('#red-label').text(ui.value);
                // this.mixColors();
            }
        });
    }


    greenInit() {
        console.log('greenInit is working');
        $('#green-slider').slider({
            orientation: 'vertical',
            range: 'min',
            min: 0,
            max: 255,
            value: 150,
            width: 100,
            slide: function (event, ui) {
                $('#green-label').text(ui.value);
                // this.mixColors();
            }
        });
    }

    blueInit() {
        console.log('blueInit is working');
        $('#blue-slider').slider({
            orientation: 'vertical',
            range: 'min',
            min: 0,
            max: 255,
            value: 150,
            width: 100,
            slide: function (event, ui) {
                $('#blue-label').text(ui.value);
                // this.mixColors();
            }
        });
    }

}