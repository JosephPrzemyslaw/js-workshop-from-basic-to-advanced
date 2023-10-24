
const USD_RATE = 4.19;
const EUR_RATE = 4.48;
const BGN_RATE = 2.29;
const DKK_RATE = 0.6;
const HKD_RATE = 0.54;

const amount = 100; // zl
const currency = "EUR";
let target; // undefined

switch(currency) {
    case "USD":
        target = (amount / USD_RATE).toFixed(2);
        break;
    case "EUR":
        target = (amount / EUR_RATE).toFixed(2);
        break;
    case "BGN":
        target = (amount / BGN_RATE).toFixed(2);
        break;
    case "DKK":
        target = (amount / DKK_RATE).toFixed(2);
        break;
    case "HKD":
        target = (amount / HKD_RATE).toFixed(2);
        break;
}

if (target !== undefined) {
    console.log(`${target} ${currency}`);
} else {
    console.log("Kantor nie obsługuje tej waluty");
}
