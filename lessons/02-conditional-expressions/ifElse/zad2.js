
let a = 0.5;
let h = 10;

if (a > 0 && h > 0) { // AND
    let area  = 0.5 * a * h;
    console.log("Pole trójkąta wynosi", area);
} else {
    console.error("Podaj wartosci wieksze od 0");
}

// if (a > 0 || h < 0) { // LUB
//     console.error("Podaj wartosci wieksze od 0");
// } else {
//     let area  = 0.5 * a * h;
//     console.log("Pole trójkąta wynosi", area);
// }

