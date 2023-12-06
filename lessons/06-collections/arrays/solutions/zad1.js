// Napisz funkcję, która sumuje elementy tablicy a wynik loguje do konsoli.

// a) sumuje wszystkie liczby.

// b) tylko elementy o wartościach mniejszych od zera.

const nums = [10, -10, 20, -20, 30, 40];

function getSum(arr) {
  let partialSum = 0;
  for (let num of arr) {
    partialSum = partialSum + num;
  }

  return partialSum;
}

const result = getSum(nums);

// b)

function getNegativeSum(arr) {
  let partialSum = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (arr[i] < 0) {
      partialSum = partialSum + arr[i];
    }
  }
  return partialSum;
}

const resultNegative = getNegativeSum(nums);