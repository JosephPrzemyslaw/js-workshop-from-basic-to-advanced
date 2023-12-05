//
// n = 200
// 0, 2, 4, 6, 8, 10, ... 396, 398, 
//

const N = 200;
for(let i = 0; i < 2 * N; i = i + 2) {
    console.log(i);
}

for(let i = 0; i < N; i = i + 1) {
    console.log(2 * i);
}

// as one string
let repr = "";
for(let i = 0; i < 2 * N; i = i + 2) {
    repr = reprOld + `${i}, `; // repr += `${i}, `;
}
console.log(repr);

// "",
// "" + "1, " => "1, "
// "1, " + "2, " => "1, 2, "
// "1, 2, " + "3, " => "1, 2, 3, "
// "1, 2, 3, " + "4, " =? "1, 2, 3, 4 "
// ...


// INITIALIZATION -> let i = 0
// CHECK IF FOR MAY RUN
//
// "RUN"
// PERFORM CODE WITHIN FOR
// INCREMENT INDEX
// CHECK IF FOR MAY RUN, IF SO, JUMP TO "RUN"
//