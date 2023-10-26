// Stwórz tablicę wartości przemnozonych przez 2
const nums = [10, 20, -30, 40];
const numsPos = []; // [20, 40, -60, 80];
for (let i = 0; i < nums.length; i++) {
    numsPos.push(2 * nums[i]);
}

// Alternatywa
function double(el) {
    return el * 2;
}
const doubleNums1 = nums.map(double);
// double(10) => 20 => doubleNums = [20]
// double(20) => 40 => doubleNums = [20, 40]
// double(-60) => -120 => doubleNums = [20, 40, -120]
// double(80) => 160 => doubleNums = [20, 40, -120, 160]

const doubleNums2 = nums.map(function double(el) {
    return el * 2;
});

const doubleNums3 = nums.map(function (el) {
    return el * 2;
});

const doubleNums4 = nums.map(el => el * 2);
debugger