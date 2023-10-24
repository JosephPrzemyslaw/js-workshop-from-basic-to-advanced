// a ą e ę i o u ó, y
// Ala mam kota -> 5

const argv = process.argv;
const txt = argv[2];
const txtParsed = txt.toLowerCase();
let sum = 0;

for (let j = 0; j < txtParsed.length; j++) {
  if (
    txtParsed[j] === "a" ||
    txtParsed[j] === "ą" ||
    txtParsed[j] === "e" ||
    txtParsed[j] === "ę" ||
    txtParsed[j] === "i" ||
    txtParsed[j] === "o" ||
    txtParsed[j] === "u" ||
    txtParsed[j] === "ó" ||
    txtParsed[j] === "y" 
  ) {
    sum = sum + 1;
  }
}
console.log(sum);
console.log(`Liczba samogłosek: ${sum}`);
