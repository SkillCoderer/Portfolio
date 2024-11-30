// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
function charCount(myChar, str) {
  let split = str.split(myChar);
  console.debug(`split=${split}`);
  return split.length - 1;
}

// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

// let arr1 = ["a", "edabit"];
// let result1 = charCount(arr1);
// // ------------------------------------------
// let arr2 = ["c", "Chamber of secrets"];
// let result2 = charCount(arr2);
// // ------------------------------------------
// let arr3 = ["b", "big fat bubble"];
// let result3 = charCount(arr3);
// // ------------------------------------------
// console.log(`Results are equal to ${result1}, ${result2}, ${result3}`);
