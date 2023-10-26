// napisz kod, ktory łączy tablice

const arr1 = ["apple", "watermelon", "kiwi", "cherry"];
const arr2 = ["banana", "pearl", "grapes"];

function join(stArr, ndArr) {
    return stArr.concat(ndArr);
}

const joinedArr1 = join(arr1, arr1); // ["apple", "watermelon", "kiwi", "cherry", "banana", "pearl", "grapes"];
const joinedArr2 = join(arr1, arr1);

debugger