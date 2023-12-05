const month = "   LUty ";
const polishMonthLowerCase = month.toLowerCase();
const polishMonthLowerCaseNoWhiteSpace = polishMonthLowerCase.trim();

let season;
switch (polishMonthLowerCaseNoWhiteSpace) {
  case "grudzień":
  case "grudzien":
  case "styczeń":
  case "styczen":
  case "luty":
    season = "zima";
    break;
  case "marzec":
  case "kwiecień":
  case "kwiecien":
  case "maj":
    season = "wiosna";
    break;
  case "czerwiec":
  case "lipiec":
  case "sierpień":
  case "sierpien":
    season = "lato";
    break;
  case "wrzesień":
  case "wrzesien":
  case "październik":
  case "pazdziernik":
  case "listopad":
    season = "jesień";
    break;
  default:
    season = "Nieprawidłowy miesiąc";
    break;
}
console.log(season);