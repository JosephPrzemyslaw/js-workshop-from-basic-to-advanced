
//
// Przyklad jak uzywac mapy do cachowania wynikow funkcji
//

// const cache = new Map;
// function computeHash(num) {
//     if (cache.has(num)) {
//         return cache.get(num);
//     }
//     //...
//     let result = "asdfhasfh$@$@$@#sfdsdf@#$@#$"; // dla num = 100
//     cache.set(num, result);
// }

// const result1 = computeHash(100); // 10s
// const result2 = computeHash(100); // 0s
// const result3 = computeHash(100); // 0s
// const result4 = computeHash(100); // 0s
// const result5 = computeHash(100); // 0s

// Przyklad uzycia zbioru

const people = new Set;
people.add("Agnes");
people.add("Joseph");
people.add("Anny");
people.add("Chris");
people.add("Agnes");
people.add("Agnes");
people.add("Chris");

