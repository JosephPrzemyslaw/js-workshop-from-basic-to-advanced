const NIEDOWAGA = 18.5;
const NADWAGA = 24.9;

const weight = 78;
const height = 1.8;

const BMI = weight / (height ** 2);
console.log('Wskaźnik BMI wynosi:', BMI.toFixed(3));

if (BMI > NADWAGA) {
    console.log('Potencjalna nadwaga');
} else if (BMI < NIEDOWAGA) {
    console.log('Niedowaga');
} else {
    console.log('Normalna');
}




// const waga=80;
// const wzrost=2;
// const BMI = waga / (wzrost ** 2);
// let text = "";

// if (BMI < 18.500)                { text="Niedowaga - opcja 1"}
// if (BMI > 18.500 && BMI < 24.901)  { text="w normie"}
// if (BMI > 24.901)                { text="możliwa nadwaga"}
// console.log ("BMI ",BMI," ",text)


// const weight = 80.676;
// const height = 1.8;

// const BMI = weight / (height ** 2); // 'height' do kwadratu
// console.log(BMI)
// if (BMI < 18.5) {
//     console.log("Niedowaga")
// }
// else if (BMI > 24.9) {
//     console.log("Potencjalna nadwaga")
// }
// else {
//     console.log("Normalna")
// }


// const waga = 66
// const wrost = 1.75
// const BMI = waga / (wzrost ** 2)

// if(BMI < 18.5){
//     console.log("Niedowaga");
// } else {
//     if(BMI >= 18.5 && BMI <= 24.9){
// 		console.log("Normalna");
//     } else {
//         console.log("Nadwaga");
//     }
// };