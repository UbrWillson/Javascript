class Slider {

    constructor(boxid, boxwidth, boxheight, images) {
        this.box = $(`#${boxid}`);
        this._width = boxwidth;
        this._height = boxheight;
        this._images = images;
        //
        this._box.css('width', this._width);
        this._box.css('height', this._height);
        this._box.show(1000);
        //
        this._slideId = 0;
        console.log(`constructor is working is working`);
    }

}