//
// Wygeneruj n potęg liczby k
//
// n = 2, k = 7
// 2, 4, 8, 16, 32, 64, 128
// 
// n = 3, k = 4
// 3, 9, 27, 81
//

// const n = 2, k = 7;
// let finalResult = "";
// for(let i = 1; i <= k; i = i + 1) {
//     const result = n ** i;
//     finalResult = finalResult + `${result} `;
// }
// console.log(finalResult)

// n = 2, k = 7
// 40320
// gdyz 2 * 3 * 4 * 5 * 6 * 7 * 8 = 40320
// 
// n = 5, k = 4
// 1680
// gdyz 5 * 6 * 7 * 8 = 1680

const n = 5, k = 4;
let finalResult = 1;

for (let i = n; i < n + k; i = i + 1) { // i++
    finalResult = finalResult * i;
}
console.log(finalResult);