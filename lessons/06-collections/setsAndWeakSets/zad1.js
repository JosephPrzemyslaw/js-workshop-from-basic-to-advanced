const fs = require('fs');

const data = fs.readFileSync('./users.txt', 'utf8');

const nameArr = data.split("\n");
const set = new Set;
for (let i = 0; i < nameArr.length; i ++) {
    set.add(nameArr[i]);
}
console.log(...set.keys())
// debugger