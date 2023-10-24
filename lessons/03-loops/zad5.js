const n = 10;
let line = "";
let number = 1;

for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line = line + " " + number;
        number++;
    }
    console.log(line);
}