// const a = 20, b = 90, c = 120, d = -90;
// const maxVal = Math.max(a, b, c, d);
// console.log(maxVal);

const a = -3, b = 300, c = 5, d = -3, e = -3;
let max = a;
if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
if (d > max) {
    max = d;
}
if (e > max) {
    max = e;
}
console.log('maksymalna wartość:', max);


// if (a > b && a > c && a > d && a > e) {
//     console.log('maksymalna wartość:', a);
// }else {
//     if(/*a > b &&*/b > c && b > d && b > e) {
//         console.log('maksymalna wartość:', b);
//     } else {
//         if (c > d && c > e) {
//             console.log('maksymalna wartość:', c);
//         } else {
//             if (d > e) {
//                 console.log('maksymalna wartość:', d);
//             } else {
//                 console.log('maksymalna wartość:', e);
//             }
//         }
//     }
// }
