const m = 66;
const h = 1.75;

const bmi = m / (h * h);
if (bmi < 18.5) {
  console.log("Masz niedowagę");
} else {
    if (bmi > 24.9) {
        console.log("Masz potencjalną nadwagę");
    } else {
        console.log("Waga normalna");
    }
}

// if (cos tam cos tam) {
//     //...
// } else if (cos tam cos tam innego) {
//     //...
// } else if (cos tam cos tam innego 2) {
//     //...
// }

// if (cos tam cos tam) {
//     //...
// } else {
//     if (cos tam cos tam innego) {
//         //...
//     } else {
//         if (cos tam cos tam innego 2) {
//             //...
//         }
//     }
// }