// input: a = 0.5, h = 10
// output: Pole trójkąta wynosi 2.5

// const a = parseFloat(prompt("Get a:")); // a is the number data type
// const h = parseFloat(prompt("Get h:")); // h is the number data type

// double check if a and h are different than NaN
// Number.isNaN(a) === false && Number.isNaN(h) === false
// if (!Number.isNaN(a) && !Number.isNaN(h)) {
//     const area = 0.5 * a * h;
//     // console.log("The triangle area is", area);
//     console.log(`The triangle area is ${area}`);
// } else {
//     console.error("Enter data in the desired format");
// }

const a = parseFloat(prompt("Get a:")); // a is the number data type
const h = parseFloat(prompt("Get h:")); // h is the number data type

const isAnyNaN = Number.isNaN(a) || Number.isNaN(h);
const isAnyNegativeOrZero = a <= 0 || h <= 0;

if (isAnyNaN || isAnyNegativeOrZero) {
    console.error("Enter data in the desired format");
} else {
    const area = 0.5 * a * h;
    // console.log("The triangle area is", area);
    console.log(`The triangle area is ${area}`);
}
