let a = 451, b = 90;
let operation = "*";

const code = `${a} ${operation} ${b}`; // "45 + 90"
const result = eval(code);

console.log(result);
