// Opis
// Zapisz do tablicy "k" pierwszych liczb parzystych (rozpoczynając od zera) korzystając z pętli.

const k = 10;
const arr = [];
for (i = 0; i < k; i++) {
//   arr[i] = i * 2;
  arr.push(i * 2); // wrzuca na koniec
}

console.log(arr); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
