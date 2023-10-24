const MULTIPLICATION = '*';
const ADDITION = '+';
const SUBTRACTION = '-';
const DIVISION = '/';
const EXPANSION = '**';

const a = 'jkghkj';
const b = '3,34';
const aParse = parseFloat(a);
const bParse = parseFloat(b); 
const operationSign = '/';

let result;
// Number.isNaN(aParse) || Number.isNaN(bParse) => case gdzie wystapil tekst => true
// Number.isNaN(aParse) || Number.isNaN(bParse) => case dla liczb => false
// !(A || B) => !A AND !B
// !(Number.isNaN(aParse) || Number.isNaN(bParse))
// !Number.isNaN(aParse) && !Number.isNaN(bParse)

if (!(Number.isNaN(aParse) || Number.isNaN(bParse))) {
    // case gdzie sa same liczby
    switch (operationSign){
        case MULTIPLICATION:
            result = aParse * bParse;
            break;
        case ADDITION:
            result = aParse + bParse;
            break;
        case SUBTRACTION:
            result = aParse - bParse;
            break;
        case DIVISION:
            if (bParse === 0) {
                console.error("Cannot divide by 0");   
            } else {
                result = aParse / bParse;
            }
            break;
        case EXPANSION:
            result = aParse ** bParse;
            break;
        default:
            console.error('Invalid operation');
            break;
    }
    if (result !== undefined) {
        console.log(`${aParse} ${operationSign} ${bParse} = ${result}`);
    }
} else {
    console.error(`A and B must be a number`);  
}