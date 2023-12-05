/**
 * Sprawdza czy przesłane liczby są parzyste
 * @param {number} a - pierwsza liczba
 * @param {number} b - druga liczba
 * @param {number} c - trzecia liczba
 * @return {boolean} - true jeżeli wszystkie są
 */
// function areEven(a, b, c) {
//     if (a % 2 === 0) {
//         if (b % 2 === 0) {
//             if (c % 2 === 0) {
//                 return true;
//             }
//         }
//     }

//     return false;
// }

// function areEven(a, b, c) {
//     if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// function areEven(a, b, c) {
//     const trueOrFalse = a % 2 === 0 && b % 2 === 0 && c % 2 === 0;

//     return trueOrFalse;
// }

function areEven(a, b, c) {
    return a % 2 === 0 && b % 2 === 0 && c % 2 === 0;
}

console.log(areEven(10, 20, 30));
console.log(areEven(10, 20, 35));