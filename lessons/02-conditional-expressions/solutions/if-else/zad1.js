// Pobierz liczbę (prompt, parseFloat) i wyświetl informację czy jest ujemna lub dodatnia. W przypadku tej drugiej, policz jej kwadrat oraz sprawdź parzystość

// Przykład
//  input: x = 8
//  output: Dodatnia, parzysta liczba. Kwadrat wynosi 64

//  input: x = -90
//  output: Ujemna

const numStr = 123; //prompt("Get a number"); // num is string, e.g. "34.12"
const num = parseFloat(numStr); // now => 34.12

// const increasedByTwo1 = numStr + 2; // "34.12" + 2 => "34.12" + "2" => "34.122"
// const increasedByTwo2 = num + 2; // 34.12 + 2 => 36.12

if (num >= 0 ) {
    const square = num * num; // num ** 2
    if (num % 2 === 0) {
        console.log("Dodatnia, jest parzysta. Kwadrat wynosi", square);
    } else {
        console.log("Dodatnia, jest nieparzysta. Kwadrat wynosi", square);
    }
} else {
    console.log("Ujemna");
}

