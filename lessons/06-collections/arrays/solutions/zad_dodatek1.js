//
// const fruits = ["watermelon", "pearl", "apple", "grapes", "peach", "cherry"];
//
// Wypisz elementy w formie:
// This is watermelon
// This is pearl
// This is apple
// This is grapes
// This is peach
// This is cherry

//
// 1st method
//
// const fruits = ["watermelon", "pearl", "apple", "grapes", "peach", "cherry"];
// for(let i = 0; i < fruits.length; i++) {
//     console.log(`This is ${fruits[i]}`);
// }

//
// 2nd method
//
// for(let fruit of fruits) {
//     console.log(`This is ${fruit}`);
// }

//
// 3nd method
//
// function showInConsole(fruit) {
//     console.log(fruit);
// }
const fruits = ["watermelon", "pearl", "apple", "grapes", "peach", "cherry"];
fruits.forEach(showInConsole);
// showInConsole(fruits[0]);
// showInConsole(fruits[1]);
// showInConsole(fruits[2]);
// showInConsole(fruits[3]);
// showInConsole(fruits[4]);
// showInConsole(fruits[5]);