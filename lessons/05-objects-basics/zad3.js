
let article = {
    journal: 'Math Journal',
    year: 2020,
    title: 'Linear function',
    getDescr: function() {
       return `${this.journal}, ${article.title}, ${article.year}`;
    },
    displayYearInConsole: function() {
       console.log(this.year);
    }
 }
// Object.defineProperty(article, "getDescr", {
//     writable: false,
// });

// Object.freeze(article);
// article.getDescr = null; // does not work

const descr = article.getDescr(); // 'Math Journal, Linear function, 2020'
article.displayYearInConsole();
