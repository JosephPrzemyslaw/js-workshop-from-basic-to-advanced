// Zaproponuj implementację przeznaczoną do tworzenia artykułów

// const article = {
//     title: "JavaScript",
//     year: 2023,
//     author: {
//         name: "Jan",
//         surname: "Kowalski"
//     },
//     pageNo: 123,
//     getAuthor: function () {
//         return `An author of article ${this.title} is ${this.author.name} ` +
//             `${this.author.surname}`;
//     },
//     getPageNo() {
//         return `An article ${this.title} has ${this.pageNo} pages`;
//     },
// };

function createArticle(title, year, author, pageNo) {
    return {
        title: title, // in old JS
        year,
        author,
        pageNo,
        getAuthor: function () {
            return `An author of article ${this.title} is ${this.author.name} ` +
                `${this.author.surname}`;
        },
        getPageNo() {
            return `An article ${this.title} has ${this.pageNo} pages`;
        },
    };
}

const articleA = createArticle("JavaScript", 2023, {name: "Jan", surname: "Kowalski"}, 123);
const articleB = createArticle("Java", 2023, {name: "Sebastian", surname: "Piech"}, 231);