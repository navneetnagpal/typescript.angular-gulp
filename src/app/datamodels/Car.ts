interface ICar {
    currentSpeed: number;
    accelerate(d: number):void;
    brake(d: number):void;
}

class Car implements ICar  {
    currentSpeed: number=0;
    accelerate(d: number) {
        this.currentSpeed += d;
    }
    brake(d: number) {
        this.currentSpeed -= d;
    }
    constructor() { }
}


new Car().accelerate(12);