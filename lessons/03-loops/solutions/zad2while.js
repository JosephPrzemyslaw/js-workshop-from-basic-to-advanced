//
// 1234    -> 10
// -78     -> 15
// 5       -> 5
// 99999   -> 45
// 0       -> 0
//
const num = 3.1234;
const numAbs = Math.abs(num);
const numStr = numAbs.toString();

let sum = 0;
let i = 0;
while(i < numStr.length) {
    if (numStr[i] === ".") {
        i = i + 1;
        continue;
    }
    sum = sum + parseInt(numStr[i]); // numStr.charAt(i)
    i = i + 1;
}

console.log(`Sum of digits for ${num} is ${sum}`);
