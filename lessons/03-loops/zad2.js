
// const args = process.argv;
// const x = args[2]; // string
// const xParsed = x.replace("-", "");

// let sum = 0;
// for(let i = 0; i < xParsed.length; i++) {
//     const digit = parseInt(xParsed[i]);
//     if (Number.isNaN(digit)) {
//         throw new Error ("Wrong input");
//     }
//     sum = sum + digit;
// }

const args = process.argv;
const x = args[2]; // string
const xParsed = x.replace("-", "");
let xNumParsed = parseInt(xParsed);

let sum = 0;
while(xNumParsed !== 0) {
    const digit = xNumParsed % 10;
    sum = sum + digit;

    xNumParsed = Math.floor(xNumParsed / 10);
}

console.log(sum);

//const number = process.argv[2];
// const number = '-78243';
// const numberPositive = number.replace('-','');
// const numberPositiveArr = numberPositive.split("");
// const numberExpr = numberPositiveArr.join("+");

// console.log(eval(numberExpr));