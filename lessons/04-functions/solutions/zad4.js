/**
 * Liczy pierwiastki paraboli danej wzorem
 * y = ax^2 + bx + c
 * 
 * @param {number} a - pierwszy pierwiastek
 * @param {number} b - drugi pierwiastek
 * @param {number} c - trzeci pierwiastek
 * 
 * @return {Array} - zero, jedno lub dwuelementowa tablica pierwiastków 
*/
function getRoots(a, b, c) {
    const delta = b * b -  4 * a * c;
    if (delta > 0) {
        const x1 = (-b - Math.sqrt(delta)) / (2 * a);
        const x2 = (-b + Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    } else {
        if (delta === 0) {
            const x0 = -b / (2 *a);
            return [x0];
        } else {
            return [];
        }
    }
}

const roots1 = getRoots(1, -2, 1); // [1]
const roots2 = getRoots(1, 0, -1);// [1, -1]
const roots3 = getRoots(10, 1, 10); // []

