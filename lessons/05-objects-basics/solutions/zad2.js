const baseKowalski = {
  name: "Jan",
  surname: "Kowalski",
  age: 65,
  occupation: "worker",
};

// 1 metoda
const baseKowalskiCopy1 = {
    name: baseKowalski.name,
    surname: baseKowalski.surname,
    age: baseKowalski.age,
    occupation: baseKowalski.occupation,
};

// 2 metoda
const baseKowalskiCopy2 = {...baseKowalskiCopy};

baseKowalskiCopy2.name = "Agnes";
// 3 metoda
const baseKowalskiCopy3 = Object.assign({}, baseKowalski);

const baseKowalskiCopy4 = baseKowalski; // nie jest tworzona kopia
// NADAL JEDEN OBIEKT A NIE DWA !!!
baseKowalskiCopy4.name = "Przemyslaw";
baseKowalski.name; // "Przemyslaw"

let box = 90;
const box2 = box; // tworzona jest kopia
box = 100;

// Dodatek
// merging 
const placeWorkKowalski = {
    company: "Samsung",
    role: "UX designer",
    experience: "3 years",
};

const wholeKowalski = Object.assign({}, baseKowalski, placeWorkKowalski);


