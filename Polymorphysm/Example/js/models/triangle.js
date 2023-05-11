class Trinagle extends Shape {

    #height;
    #triangle_side;


    constructor(height, triangle_side){
        super("трикутник");
        this.#height = height;
        this.#triangle_side = triangle_side;
    }



    calc_square(){
        return this.#triangle_side * this.#height / 2;
    }

    toString(){
        return `${super.toString()}; Висота яка опущена на відому нам сторону: ${this.#height} см; сторона: ${this.#triangle_side} см;`
    }
}

// Homework practice