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
    const delta = b * b  - 4 * a * c;
    const roots = [];
    if (delta > 0) {
        const stRoot = (-b - Math.sqrt(delta)) / (2 * a);
        const ndRoot = (-b + Math.sqrt(delta)) / (2 * a);
        roots[0] = stRoot;
        roots[1] = ndRoot;

        return roots;
    } else {
        if (delta === 0) {
            const root = -b / (2 * a);
            roots[0] = root;

            return roots;
        } else {
            // delta < 0
            return roots;
        }
    }
}

const myRoots2 = getRoots(1, -3, 2); // [1, 2]
const myRoots1 = getRoots(1, -2, 1); // [1]
const myRoots0 = getRoots(1, -2, 100); // []
debugger;






// // Question 1
// // expr = 5 > 1;

// if (expr) {
//     console.log("A");
//     console.log("B");
// }
// console.log("C");

// A B C 

// // Question 2
// // expr = 5 > 10;

// if (expr) {
//     console.log("A");
//     console.log("B");
// }
// console.log("C");

// C 


// // Question 3
// // expr = 5 > 1;

// if (expr)
//     console.log("A");
//     console.log("B");

// console.log("C");

// A B C 


// // Question 4
// // expr = 5 > 10;

// if (expr)
//     console.log("A");
//     console.log("B");

// console.log("C");

// B C 
