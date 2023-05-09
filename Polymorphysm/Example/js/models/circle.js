class Circle extends Shape {

  #radius;

 constructor(radius) {
    super('коло');
    this.#radius = radius;
 }

 calc_square() {
    return Math.PI * this.#radius ** 2;
 }

 toString() {
    return `${super.toString()}; радіус: ${this.#radius} см`;
 }

}
