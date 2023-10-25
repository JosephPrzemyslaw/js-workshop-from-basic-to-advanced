/**
 * Zwraca liczbę losową z przedziału <min, max>
 * min = 0, max = 100 gdy parametry nie zostaną przesłane
 * 
 * @param {number} min - wartość minimalna
 * @param {number} max - wartość maksymalna
 * @return {number} - liczba z przedziału <min, max>
 */
function getRandom(min = 0, max = 100) {
    if (min > max) {
        // const temp = min;
        // min = max;
        // max = temp;
        [min, max] = [max, min];
    }

    // Math.random() * (max - min + 1) => <0; max - min + 1)
    // Math.floor(Math.random() * (max - min + 1)) // => <0; max - min>
    // Math.floor(Math.random() * (max - min + 1)) + min // => <min; max>
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rand1 = getRandom(5, 10); // 7
const rand2 = getRandom(10, 5); // 7
const rand3 = getRandom(); // 54
console.log(rand1)
console.log(rand2)
console.log(rand3)