// Create a function that takes in an array of numbers and returns the sum of its cubes.
function sumOfCubes(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Math.pow(nums[i], 3);
    // https://www.w3schools.com/jsref/jsref_pow.asp (Math.pow())
  }
  return sum;
}

// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([3, 4, 5]) ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0

// let arr1 = [1, 5, 9];
// let result1 = sumOfCubes(arr1);
// // ------------------------------------------
// let arr2 = [3, 4, 5];
// let result2 = sumOfCubes(arr2);
// // ------------------------------------------
// let arr3 = [2];
// let result3 = sumOfCubes(arr3);
// // ------------------------------------------
// let arr4 = [];
// let result4 = sumOfCubes(arr4);
// // ------------------------------------------
// console.log(
//   `Results are equal to ${result1}, ${result2}, ${result3}, ${result4}`
// );
