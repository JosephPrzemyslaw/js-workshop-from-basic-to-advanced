let a = 45, b = 0;
let operacja = "+";
let errorMsg;
let result;

switch (operacja) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if(b === 0) {
            errorMsg = "Nie dzielimy przez 0";
        } else {
            result = a / b;
        }
        break;
    case "**":
        result = a ** b;
        break;
    default:
        errorMsg = "Niewlasciwa operacja";
}

if(errorMsg) { 
    console.error(errorMsg);
} else {
    console.log(`Wynik: ${a} ${operacja} ${b} = ${result}`);
}
