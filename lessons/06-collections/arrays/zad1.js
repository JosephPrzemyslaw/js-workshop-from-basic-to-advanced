// Opis
// Napisz funkcję, która sumuje elementy tablicy a wynik loguje do konsoli.

// a) sumuje wszystkie liczby.

// b) tylko elementy o wartościach mniejszych od zera

const arr1 = [24, 12, 12, 0, 0, -1, -24];

function getTotalSum(table) {
    let sum = 0;
    for(let i = 0; i < table.length; i = i + 1) {
        const currEl = table[i];
        sum = sum + currEl;
    }
    return sum;
}

const sum1 = getTotalSum(arr1); // table = arr1
const sum2 = getTotalSum([0, 0, 0, 0, 1, 1, 1, 0]); // table = [0, 0, 0, 0, 1, 1, 1, 0]


/**
 * Funkcja liczy sumę elementów mniejszych od zera
 * 
 * @param {Array} table - tablica wejściowa z liczbami
 * @return {number} - wyjściowa suma
 */
function getNegativeSum(table) {
    // ponizszy if potrzebny tylko gdy chcemy rzucic wyjatkiem
    // if (table.length === 0) { // !table.length
        // throw new Error("Sorry, tablica pusta !");
    // }

    let sum = 0;
    for(let i = 0; i < table.length; i = i + 1) {
        const currEl = table[i];
        if (currEl < 0) {
            sum = sum + currEl;
        }
    }
    return sum;
}

const negativeSum1 = getNegativeSum([]);



debugger