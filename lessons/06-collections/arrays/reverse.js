"use strict";
// Napisz funkcję odwracającą string

/**
 * Odwraca ciąg znaków
 * 
 * @param {string} txt - dane źródłowe
 * @return {string} - odwrócony ciąg znaków
 */
function reverse(txt) {
    let reversed = ""; 
    for (let i = txt.length - 1; i >= 0; i = i - 1) {
        reversed = reversed + txt[i];
    }

    return reversed;
}

/**
 * Odwraca ciąg znaków
 * 
 * @param {string} txt - dane źródłowe
 * @return {string} - odwrócony ciąg znaków
 */
function reverse2(txt) {
    // const txtArr = txt.split("");
    // const reversedTxtArr = txtArr.reverse();
    // const reversedTxt = reversedTxtArr.join("");

    // return reversedTxt;

    return txt.split("").reverse().join("");
}

reverse2("domek"); // kemod