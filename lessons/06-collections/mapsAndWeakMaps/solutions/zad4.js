// const polishJan = months.get('january'); // styczeń

const months = new Map;
months.set(1, "styczen");
months.set("january", "styczen");
months.set("february", "luty");
months.set("march", "marzec");
months.set("april", "kwiecień");
// ...

const polishMonth1 = months.get("april"); // kwiecien
const polishMonth2 = months.get(1); // styczen
