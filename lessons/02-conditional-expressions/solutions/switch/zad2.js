
const USD_RATE = 4.02;
const GBP_RATE = 5.07;
const CHF_RATE = 4.60;

const amount = 123;
const currency = "CHF";
let targetAmount, targetAmountFormatted;
let targetRate; // undefined

switch(currency) {
    case "USD":
        targetRate = USD_RATE;
        break;
    case "GBP":
        targetRate = GBP_RATE;
        break;
    case "CHF":
        targetRate = CHF_RATE;
        break;
}

if (targetRate) { // targetRate = falsy => {null, undefined, 0, ""}
    targetAmount = amount / targetRate;
    targetAmountFormatted = targetAmount.toFixed(2);
    console.log(`${targetAmountFormatted} ${currency}`);
} else {
    console.error("This currency is not supported");
}