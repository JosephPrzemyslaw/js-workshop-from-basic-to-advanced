let article = {
  journal: "Math Journal",
  year: 2020,
  title: "Linear function",
  author: "Jan Kowalski",
  pageNo: 123,
  getAuthor () {
    // return this.author;
    return `An author of an article ${this.title} is ${this.author}`;
  },
  getPageNo() {
    // return this.pageNo;
    return `A article ${this.title} has ${this.pageNo} page(s)`;
  }
};

const authorDescription = article.getAuthor();
const pageNoDescription = article.getPageNo();
