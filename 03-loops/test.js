
const n = 10;
let startNo = 1;
let counter = 0;
for (let row = 1; row <= n; row++) {
    startNo = startNo + counter;
    counter ++;
    let rowRepr = "";
    for(let col = 1; col <= row; col++) { 
        rowRepr += `${startNo + col}\t`;
    }
    console.log(rowRepr);
}
