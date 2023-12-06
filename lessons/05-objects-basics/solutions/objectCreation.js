let article = {
    journal: "IEEE Engineering",
    title: "About the Math",
    year: 2023,
    showDescription () {
        console.log(`Journal: ${this.journal}\nTitle: ${this.title}\nYear: ${this.year}`);
    },
    getDescription () {
        return `Journal: ${this.journal}\nTitle: ${this.title}\nYear: ${this.year}`;
    },
    setTitle(newTitle) {
        if (typeof newTitle === "string") {
            this.title = newTitle;
        } else {
            console.error("Not set, wrong data type");
        }
    }
};

const articleJournal = article.journal;
article.showDescription();
const description = article.getDescription();
//...
article.title = "About the Bees";
article.setTitle(34);
article.showDescription();


function createArticle(journal, title, year) {
    return {
        journal, // journal: journal
        title, // title: title
        year, // year: year
        showDescription () {
            console.log(`Journal: ${this.journal}\nTitle: ${this.title}\nYear: ${this.year}`);
        },
        getDescription () {
            return `Journal: ${this.journal}\nTitle: ${this.title}\nYear: ${this.year}`;
        },
        setTitle(newTitle) {
            if (typeof newTitle === "string") {
                this.title = newTitle;
            } else {
                console.error("Not set, wrong data type");
            }
        }
    };
}

const article1 = createArticle("IEEE Engineering", "About the Math", 2023);
const article2 = createArticle("Kobieta i zycie", "Szydełkowanie", 1986);


class Article {
    constructor(journal, title, year) {
        this.journal = journal;
        this.title = title;
        this.year = year;
    }
    showDescription () {
        console.log(`Journal: ${this.journal}\nTitle: ${this.title}\nYear: ${this.year}`);
    }
    getDescription () {
        return `Journal: ${this.journal}\nTitle: ${this.title}\nYear: ${this.year}`;
    }
    setTitle(newTitle) {
        if (typeof newTitle === "string") {
            this.title = newTitle;
        } else {
            console.error("Not set, wrong data type");
        }
    }
}

const article3 = new Article("Zrób to sam", "Jak zbudowac statek", 1973);
const article4 = new Article("Zrób to sam", "Jak zbudowac okno", 1983);

