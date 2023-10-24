
const month = "kwiecień ";
const monthCorrected = month.toLowerCase().replaceAll(" ", "");
let translation;

switch(monthCorrected) {
    case "styczeń":
    case "styczen":
        translation = "January";
        break;
    case "luty":
        translation = "February";
        break;
    case "marzec":
        translation = "March";
        break;
    case "kwiecień":
    case "kwiecien":
        translation = "April";
        break;
    case "maj":
        translation = "May";
        break;
    case "czerwiec":
        translation = "June";
        break;
    default:
        console.error("brak miesiaca");
}
if (translation !== undefined) {
    console.log(translation);
}