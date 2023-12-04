const a = parseFloat(prompt('a= '));
const b = parseFloat(prompt('b= '));
const c = parseFloat(prompt('c= '));

// if (a > b && b > c) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

const yesOrNo = a > b && b > c ? "yes" : "no";
console.log(yesOrNo);
