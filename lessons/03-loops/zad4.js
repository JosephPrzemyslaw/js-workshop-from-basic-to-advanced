
const n = 7;
let line = "";

for (let i = 1; i <= n; i++) {
    let line = "";
    for(let j = 1; j <= i; j++) {
        line = line + " " + j;
    }
    console.log(line);
}
