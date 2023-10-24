
const args = process.argv;
const N = args[2];

// a)
console.time("petla");
for(let i = 0; i < N; i = i + 1) {
    console.log(i * 2);
}
console.timeEnd("petla");

// b)
console.time("petla");
let i = 0;
while(i < N) {
    console.log(i * 2);
    i = i + 1;
}
console.timeEnd("petla");

// c)
console.time("petla");
let j = 0;
do {
    console.log(j * 2);
    j = j + 1;
} while(j < N);
console.timeEnd("petla");