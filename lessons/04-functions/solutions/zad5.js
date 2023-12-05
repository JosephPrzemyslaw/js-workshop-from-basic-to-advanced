/**
 * Zwraca liczbę losową z przedziału <min, max>
 * min = 0, max = 100 gdy parametry nie zostaną przesłane
 * 
 * @param {number} min - wartość minimalna
 * @param {number} max - wartość maksymalna
 * @return {number} - liczba z przedziału <min, max>
 */
function getRandom(min = 0 , max = 100) {
    // 20 + Math.round(Math.random() * (300 - 20)) // => <20; 300>
    return min + Math.round(Math.random() * (max - min));
}

const result1 = getRandom(); // <0, 100>
const result2 = getRandom(10, 50); // <10, 50>
