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
 * Sprawdza czy tekst jest palindromem
 * 
 * @param {string} txt - dane źródłowe
 * @return {boolean} - true gdy jest palindromem, false w przeciwnym razie
 */
function isPalindrom(str) {
    const reversedTxt = reverse(str);
    if (reversedTxt === str) {
        return true;
    } else {
        return false;
    }
}

function isPalindrom(str) {
    if (reverse(str) === str) {
        return true;
    } else {
        return false;
    }
}

function isPalindrom(str) {
    if (reverse(str) === str) {
        return true;
    }
    return false;
}

function isPalindrom(str) {
    return reverse(str) === str ? true : false;
}

function isPalindrom(str) {
    return reverse(str) === str;
}


const out1 = isPalindrom("radar"); // true
const out2 = isPalindrom("zebra"); // false
debugger