class Car {
    constructor(model, engine){
        this.model = model;
        // this.engine = engine;
    }
}

const cars = [];
function createCars() {
    const N = 1_000_000;
    for(let i = 0; i < N; i++) {
        const newCar = new Car("Audi", "3.0");
        cars.push(newCar);
    }
}

createCars();

cars = null; // zacheta !

// o 20 MB mniej ?
