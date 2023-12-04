
//
// temporary commented to demonstrate how does it work using node
// uncomment prompt if you want to run the code in a browser
//
const numStr = 123; //prompt("Get a number"); // num is string when prompt is uncommented, e.g. "34.12"
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

