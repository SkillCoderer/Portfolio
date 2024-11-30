// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function getDistinctElements(inputArr) {
  let resultArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (isUnique(inputArr, i)) resultArr.push(inputArr[i]);
  }

  return resultArr;
}

function isUnique(inputArr, i) {
  for (let j = 0; j < i; ++j) {
    if (inputArr[j] == inputArr[i]) return false;
  }
  return true;
}

let input1 = [1, 2, 5, 2];

// Output: 1, 2, 5
let result1 = getDistinctElements(input1);
console.log(`result are: ${result1}`);
