
function areEven(a, b, c) {
    if (a % 2 === 0 && b % 2 === 0  && c % 2 === 0) {
        return true;
    }

    return false;
}

const a = 90, b = 100, c = 200;
console.log(areEven(a, b, c));

const e = 9, f = 10, g = 20
console.log(areEven(e, f, g));