
const fahrenTemp1 = convertTemp(30);
const fahrenTemp2 = convertTemp(-20);

console.log(fahrenTemp1);
console.log(fahrenTemp2);

function convertTemp(a) {
    return a * 9 / 5 + 32;
}



function createHTMLform() {

    function createHTML() {
        //...
    }

    function addListeners() {
        //...
    }

    function addFromToTree() {
        //...
    }

    createHTML();
    addListeners();
    addFromToTree();
}




function presentPerson(person) {
    person.name = "Tobiasz";
}


const joseph = {
    age: 40,
    name: "Joseph",
    surname: "Mackowiak",
    children: ["Sergiusz", "Michasia"],
}

//-----------------------
// joseph => |0x32ABC34|
//-----------------------

const copy = joseph;

//-----------------------
// copy => |0x32ABC34|
//-----------------------


presentPerson(joseph);

const trueCopy = {
    age: joseph.age,
    name: joseph.name,
    surname: joseph.surname,
    children: joseph.children.slice(),
}