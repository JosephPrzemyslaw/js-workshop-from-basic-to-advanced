// const fruits = ['pearl', 'cherry', 'apple', 'plum', 'kiwi', 'grapefruit', 'blackberry', 'pearl'];
// a) Znajdź pierwszy i drugi indeks wystąpienia gruszki korzystając z Array.prototype.indexOf

// b) Zapoznaj się z działaniem Array.prototype.lastIndexOf

// c) korzystając z funkcji Array.prototype.includes sprawdź wystąpienie w tablicy jabłka oraz melona

const fruits = ['pearl', 'cherry', 'apple', 'plum', 'kiwi', 'grapefruit', 'blackberry', 'pearl'];

const pearlIndex = fruits.indexOf("pearl");

const lastPearlIndex = fruits.lastIndexOf("pearl");

const isWatermelon = fruits.includes("watermelon");


const txt = "Ala ma kota, kot ma się dobrze";
const isCat = txt.includes("kot");

debugger