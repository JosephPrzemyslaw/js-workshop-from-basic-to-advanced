
const arr = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
}

// ALTERNATYWA
//-----------------------------------------
function displayElMultByTwo(el) {
    console.log(el * 2);
}
arr.forEach(displayElMultByTwo)
// displayElMultByTwo(10) => loguje 20
// displayElMultByTwo(20) => loguje 40
// displayElMultByTwo(30) => loguje 60
// displayElMultByTwo(40) => loguje 80
// displayElMultByTwo(50) => loguje 100
// displayElMultByTwo(60) => loguje 120
//-----------------------------------------
