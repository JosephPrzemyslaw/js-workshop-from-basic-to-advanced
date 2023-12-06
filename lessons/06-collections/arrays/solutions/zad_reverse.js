/**
 * Odwraca ciąg znaków
 * 
 * @param {string} txt - dane źródłowe
 * @return {string} - odwrócony ciąg znaków
 */

function reverse(txt) {
    const txtArr = Array.from(txt);
    txtArr.reverse();

    const reversedTxt = txtArr.join("");
    return reversedTxt;
}

const revStr1 = reverse("alpha"); // ahpla
const revStr2 = reverse("a b"); // b a
const revStr3 = reverse(""); //