// SUMMARY

// ARRAY
const fruits = ["Apple", "Cherry", "Pearl"];
// fruits[0] => Apple

// MAP (see Associative Arrays in PHP)
const fruitMap = new Map;
fruitMap.set("Apple", {price: "2zl", amount: "1kg"});
fruitMap.set("Cherry", {price: "20zl", amount: "1kg"});
fruitMap.set("Pearl", {price: "3zl", amount: "1 sztuka"});
// fruitMap.get("Cherry") => {price: "20zl", amount: "1kg"}
// fruitMap.get("Cherry").price => "20zl"

// SET
const fruitDuplicates = ["Apple", "Cherry", "Pearl", "Apple", "Cherry", "Pearl"];
const fruitSet = new Set(fruitDuplicates); // "Apple", "Cherry", "Pearl"
