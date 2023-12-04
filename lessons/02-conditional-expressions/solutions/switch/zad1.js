const polishMonth = "styczen";
const polishMonthLowerCase = polishMonth.toLowerCase();
const polishMonthLowerCaseNoWhiteSpace = polishMonthLowerCase.trim();
// const polishMonthLowerCaseNoWhiteSpace = polishMonth.toLowerCase().trim();

let englishMonth; // undefined

switch(polishMonthLowerCaseNoWhiteSpace) {
    case "styczen":
    case "styczeń":
        englishMonth = "January";
        break;
    case "luty":
        englishMonth = "February";
        break;
    case "marzec":
        englishMonth = "March";
        break;
    case "kwiecien":
    case "kwiecień":
        englishMonth = "April";
        break;
    case "maj":
        englishMonth = "May";
        break;
    case "czerwiec":
        englishMonth = "June";
        break;
    case "lipiec":
        englishMonth = "July";
        break;
    case "sierpien":
    case "sierpień":
        englishMonth = "August";
        break;   
    case "wrzesien":
    case "wrzesień":
        englishMonth = "September";
        break;
    case "pazdziernik":
    case "październik":
        englishMonth = "October";
        break;
    case "listopad":
        englishMonth = "November";
        break;
    case "grudzien":
    case "grudzień":
        englishMonth = "December";
        break;
}

//
// if (englishMonth === undefined) {
//     console.log("Nie rozpoznałem miesiąca");
// } else {
//     console.log(englishMonth);
// }
//

//
// const response = englishMonth === undefined ? "Nie rozpoznałem miesiąca" : englishMonth;
// englishMonth => {null, undefined, "", 0} => englishMonth is evaluated to falsy, truthy otherwise
//
const response = englishMonth ? englishMonth : "Nie rozpoznałem miesiąca";
console.log(response);
