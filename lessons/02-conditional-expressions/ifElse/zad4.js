const a = 2;
const b = 3;
const c = 4;

if (a > 0 && b > 0 && c > 0
    && a + b > c && a + c > b && b + c > a) {
  console.log("Tak");
} else {
  console.log("Nie");
}

// if (a > 0 && b > 0 && c > 0) {
//   if (a + b > c && a + c > b && b + c > a) {
//     console.log("Tak");
//   } else {
//     console.log("Nie");
//   }
// } else {
//   console.log("Nie");
// }

// let a = 13;
// let b = 15;
// let c = 22;
// let text = "";
// // a+b>c; a+c>b ; c+b>a
// if (a > 0 && b > 0 && c > 0) {
//   if (a + b > c && a + c > b && c + b > a) {
//     console.log("Tak");
//   } else {
//     console.log("Nie");
//   }
// } else {
//   console.error("błędne dane");
// }
