// Stwórz obiekt opisujący przykładowy artykuł. Dodaj funkcje takie jak getAuthor oraz getPageNo. Ta druga zwraca string ”An article articleTitle has pageNo” a pierwsza: ”An author of an article articleTitle is articleAuthor”. Jakie inne funkcje byłyby przydatne ?

const article = {
    articleTitle: "JavaScript",
    articleYear: 2023,
    articleAuthor: {
        authorName: "Jan",
        authorSurname: "Kowalski"
    },
    articlePageNo: 123,
    getAuthor: function () {
        return `An author of article ${this.articleTitle} is ${this.articleAuthor.authorName} ` +
            `${this.articleAuthor.authorSurname}`;
    },
    getPageNo() {
        return `An article ${this.articleTitle} has ${this.articlePageNo} pages`;
    },
};

console.log(article.getAuthor());
console.log(article.getPageNo());

console.log(article.getAuthor());
console.log(article.getPageNo());
