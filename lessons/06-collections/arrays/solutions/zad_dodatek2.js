// Input:
// const nums = [10, 20, -10, -20, 30];
//
// Cel: wydruk  postaci
// 20
// 40,
// -20,
// -40,
// 60

// const nums = [10, 20, -10, -20, 30];

// for(let i = 0; i < nums.length; i++) {
//     console.log(2 * nums[i]);
// }

// for(let num of nums) {
//     console.log(2 * num);
// }

function showDouble(num) {
    console.log(2 * num);
}

const nums = [10, 20, -10, -20, 30];
nums.forEach(showDouble);
// showDouble(10);
// showDouble(20);
// showDouble(-10);
// showDouble(-20);
// showDouble(30);