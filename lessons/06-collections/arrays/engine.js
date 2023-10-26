// W oparciu o Array.prototype.filter stwórz tablicę zawierająca tylko takie wpisy, dla których pojemność silnika jest większa niż 2.5l

const cars = [{
	type: 'Audi',
    motor: '3.0',
}, {
	type: 'Fiat',
    motor: '1.1',
}, {
	type: 'Citroen', 
    motor: '2.0',
}];

const MIN_VOLUME = 2.5
const carFiltered = [];
for (let i = 0; i < cars.length; i ++) {
    const car = cars[i];
    if (parseFloat(car.motor) > MIN_VOLUME) {
        carFiltered.push(car);
    }
}

function checkIfEngineIsMinimum(carObj) {
    return parseFloat(carObj.motor) > MIN_VOLUME;
}

const highVolCars1 = cars.filter(checkIfEngineIsMinimum);
// checkIfEngineIsMinimum({type: 'Audi', motor: '3.0',}) => true => highVolCars = [{type: 'Audi', motor: '3.0'}]
// checkIfEngineIsMinimum({type: 'Fiat', motor: '1.1',}) => false => highVolCars = [{type: 'Audi', motor: '3.0'}]
// checkIfEngineIsMinimum({type: 'Citroen', motor: '2.0',}) => false => highVolCars = [{type: 'Audi', motor: '3.0'}]


const highVolCars2 = cars.filter(function checkIfEngineIsMinimum(carObj) {
    return parseFloat(carObj.motor) > MIN_VOLUME;
});

const highVolCars3 = cars.filter(function (carObj) {
    return parseFloat(carObj.motor) > MIN_VOLUME;
});

const highVolCars4 = cars.filter(carObj => parseFloat(carObj.motor) > MIN_VOLUME);
debugger;