// Input
const fruits = ["watermelon", "pearl", "apple", "grapes", "peach", "cherry"];
const empty = [];
const el = fruits[4]; // peach

// Function
function getLastEl(arr) { // arr = fruits
    if (arr.length > 0 ) {
        return arr.at(-1);
    } else {
        // arr is empty
        throw new Error("The passed array cannot be empty");
    }
}


// Application
const lastFruitEl = getLastEl(fruits);
const lastEmptyEl = getLastEl(empty);


// function init() {
//     if (checkInternetConnection()) {
//         startModuleA();
//         startModuleB();
//     } else {
//         throw new Error("Cannot initialize the application");
//     }
// }
