let article = {
   journal: 'Math Journal',
   year: 2020,
   title: 'Linear function',
   getDescr() {
      return `${this.journal}, ${this.title}, ${this.year}`;
   },
   displayYearInConsole() {
      //...
   }
}

const descr = article.getDescr(); // 'Math Journal, Linear function, 2020'
