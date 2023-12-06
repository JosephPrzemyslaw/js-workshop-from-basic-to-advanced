const cache = new WeakMap;

function heavyCalculation(heavyObj) {
    if (cache.has(heavyObj)) {
        return cache.get(heavyObj);
    };
    let result;
    //...
    // perform long lasting calculation
    cache.set(heavyObj, result);

    return result;
}

let heavyObj = {
    //...
    age: 40,
    name: "Joseph",
    //...
};

const result = heavyCalculation(heavyObj);
//..
heavyObj = null;
// ... 