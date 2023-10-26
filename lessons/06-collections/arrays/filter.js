// Stwórz tablicę wartości dodatnich
const nums = [10, 20, -30, 40, -50, 60];
const numsPos = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        numsPos.push(nums[i]);
    }
}
// ALTERNATYWA
function checkIfPositive(el) {
    return el > 0;
}
const myNumsPos1 = nums.filter(checkIfPositive);
// checkIfPositive(10) => true => myNumsPos = [10];
// checkIfPositive(20) => true => myNumsPos = [10, 20];
// checkIfPositive(-30) => false => myNumsPos = [10, 20];
// checkIfPositive(40) => true => myNumsPos = [10, 20, 40];
// checkIfPositive(-50) => false => myNumsPos = [10, 20, 40];
// checkIfPositive(60) => true => myNumsPos = [10, 20, 40, 60];

const myNumsPos2 = nums.filter(function checkIfPositive(el) { // funkcja "zwyczajna"
    return el > 0;
});

const myNumsPos3 = nums.filter(function (el) { // funkcja anonimowa
    return el > 0;
});

const myNumsPos4 = nums.filter(el => el > 0); //  funkcja strzałkowa
