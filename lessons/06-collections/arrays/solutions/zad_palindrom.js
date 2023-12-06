function reverse(txt) {
    const txtArr = Array.from(txt);
    txtArr.reverse();
  
    const reversedTxt = txtArr.join("");
    return reversedTxt;
}
  
/**
 * Sprawdza czy tekst jest palindromem
 *
 * @param {string} txt - dane źródłowe
 * @return {boolean} - true gdy jest palindromem, false w przeciwnym razie
 */
function isPalindrom(str) {
    // const reversedStr = reverse(str);
    // return reversedStr === str;
  return reverse(str) === str;
}



const result1 = isPalindrom("radar"); //true
const result2 = isPalindrom("zebra"); // false
