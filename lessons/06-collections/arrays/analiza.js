const N = 100;
const MAX_VALUE = 1000;
// const nums = new Array(N).fill().map(() => Math.random() * MAX_VALUE);

const nums = new Array(N); // 100 * empty
const numsFilled = nums.fill(); // 100 * undefined 
const randomVal1 = numsFilled.map(() => Math.random() * MAX_VALUE);

// function getRandomVal() {
//     return Math.random() * MAX_VALUE;
// }
// const randomVal2 = numsFilled.map(getRandomVal);
// getRandomVal(undefined); => 0.456 => randomVal2 = [0.456]
// getRandomVal(undefined); => 0.156 => randomVal2 = [0.456, 0.156]
//... x97
// getRandomVal(undefined); => 15.6 => randomVal2 = [0.456, 0.156, 15.6]

// const randomVal3 = numsFilled.map(function getRandomVal() {
//     return Math.random() * MAX_VALUE;
// });

// const randomVal4 = numsFilled.map(function () {
//     return Math.random() * MAX_VALUE;
// });

// const randomVal5 = numsFilled.map(() => Math.random() * MAX_VALUE)
