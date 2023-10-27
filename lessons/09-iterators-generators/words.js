
// nadpisz domyslne działanie iteratora tak aby petla for of
// drukowała po wyrazach zamiast po literkach

const txt = new String("Ala ma kota");

// przy uzyciu zwyklej funkcji
// txt[Symbol.iterator] = function () {
//     let i = 0;
//     let words = this.split(" "); // ["Ala", "ma", "kota"]
//     return {
//         next() {
//             return {
//                 value: words[i++],
//                 done: i > words.length,
//             };
//         }
//     };
// }

// przy uzyciu generatora
txt[Symbol.iterator] = function* () {
    let words = this.split(" "); // ["Ala", "ma", "kota"]
    for(let word of words) {
        yield word;
    }
}


console.log(txt.version);