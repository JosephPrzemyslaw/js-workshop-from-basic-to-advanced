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

const heavyObj1 = {/*...*/} // 100MB
const heavyObj2 = {/*...*/} // 100MB

const result1 = heavyCalculation(heavyObj1); // 2h
const result2 = heavyCalculation(heavyObj1); // 1ms

const result3 = heavyCalculation(heavyObj2); // 2h
const result4 = heavyCalculation(heavyObj2); // 1ms
const result5 = heavyCalculation(heavyObj2); // 1ms
const result6 = heavyCalculation(heavyObj1); // 1ms


//..
heavyObj1 = null;
heavyObj2 = null;