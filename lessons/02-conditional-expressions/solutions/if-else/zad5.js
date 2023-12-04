//
// Method A
//
// const a = 3, b = 23, c = 100, d = 12, e = -90;
// const a = -3, b = -23, c = -100, d = -12, e = -90;

// if (a > b && a > c && a > d && a > e) {
//   console.log("Value a");
// } else if (/*b > a &&*/ b > c && b > d && b > e) {
//   console.log("Value b");
// } else if (/*c > a && c > b && */c > d && c > e) {
//   console.log("Value c");
// } else if (/*d > a && d > b && d > c && */d > e) {
//   console.log("Value d");
// } else {
//     console.log("Value e");
// }

//
// Method B
//
const a = 3, b = 23, c = 100, d = 12, e = -90;
let max = a;
if (b > max) {
  max = b; // max = 23
}
if (c > max) {
  max = c; // max = 100
}
if (d > max) {
  max = d; 
}
if (e > max) {
  max = e;
}
console.log(`Największa liczba to: ${max}`);

//
// Method C
//
// const a = 3, b = 23, c = 100, d = 12, e = -90;
// const max = Math.max(a, b, c, d, e);
// console.log(`Największa liczba to ${max}`);