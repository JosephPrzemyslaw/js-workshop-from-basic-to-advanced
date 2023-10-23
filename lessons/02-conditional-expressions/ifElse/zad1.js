const x = prompt("Podaj liczbe:");
const xParsed = parseFloat(x);
const isNaN = Number.isNaN(xParsed)


if (!isNaN) {
  if (xParsed < 0) {
    console.log("Ujemna");
  } else {
    // czy jest dodatnia
    const square = xParsed * xParsed;
    if (xParsed % 2 === 0) {
      // liczba parzysta
      console.log("Dodatnia, parzysta liczba. Kwadrat wynosi", square);
    } else {
      console.log("Dodatnia, nieparzysta liczba. Kwadrat wynosi", square);
    }
  }
} else {
  console.error("Podałeś niewłaściwą liczbę lub wcisnąłeś cancel");
}
