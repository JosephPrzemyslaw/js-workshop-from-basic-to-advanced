// Opis
// Zapisz do tablicy "k" pierwszych liczb parzystych (rozpoczynając od zera) korzystając z pętli.

const k = 4;
const nums = []; // [0, 2, 4, 6]

for(let i = 0; i < k; i++) {
    nums.push(2 * i);
}
console.log(nums);

