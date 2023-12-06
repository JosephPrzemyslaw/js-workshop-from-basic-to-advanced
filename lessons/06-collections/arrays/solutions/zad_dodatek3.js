// Input
// const nums = [10, 20, -10, -20, 30];
// 
// Cel: stwórz tablicę o podwojonych wartościach

function multiplyByTwo(num) {
    return 2 * num;
}
const nums = [10, 20, -10, -20, 30];
const doubleNums = nums.map(multiplyByTwo);
doubleNums.push(100);
console.log(doubleNums);

// const doubleNums = [];
// doubleNums[0] = multiplyByTwo(10); // 20
// doubleNums[1] = multiplyByTwo(20); // 40
// doubleNums[2] = multiplyByTwo(-10); // -20
// doubleNums[3] = multiplyByTwo(-20); // -40
// doubleNums[4] = multiplyByTwo(30); // 60
// doubleNums => [20, 40,-20, -40, 60]