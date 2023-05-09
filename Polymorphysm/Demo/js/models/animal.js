class Animal {
    constructor(type){
        this._type = type;
    }

    moving_type(){
        return 'якось рухається!';
    }

    toString() {
      return `Тваринка типу - ${this._type}. Вона - ${this.moving_type()}`;
    }
}