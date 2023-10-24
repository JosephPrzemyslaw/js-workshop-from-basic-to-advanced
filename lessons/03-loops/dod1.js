// 3 15
// 3, 6, 9, 12, 15

// 4, 22
// 4, 8, 12, 16, 20

// 5, 8
// 5

console.time("petla");
const divider = parseInt(process.argv[2]);
const range = parseInt(process.argv[3]);

for(let i = divider; i <= range; i++) { // i = i + 1
    if (i % divider === 0) {
        console.log(i);
    }
}
console.timeEnd("petla");

// const args = process.argv;
// let n1 = parseInt(args[2]);
// let n2 = parseInt(args[3]);
// console.log("Dane:", n1, n2);
// if (n1 === undefined || n1 < 0) {
//   n1 = 3;
// }
// if (n2 === undefined || n2 < 0) {
//   n2 = 20;
// }

// let i = n1;
// while (i <= n2) {
//   if (i % n1 === 0) {
//     console.log(i);
//   }
//   i = i + 1;
// }

// const a = 6;
// const N = 10;
// for (let i = 0; i <=N; i++){
//     if (i >0 && i % a === 0){
//         console.log(i)
//     }
// }
