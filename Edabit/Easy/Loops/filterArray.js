// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
function filterArray(arr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "0" && arr[i] <= "9") {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

// let arr1 = [1, 2, "a", "b"];
// let result1 = filterArray(arr1);
// // ------------------------------------------
// let arr2 = [1, "a", "b", 0, 15];
// let result2 = filterArray(arr2);
// // ------------------------------------------
// let arr3 = [1, 2, "aasf", "1", "123", 123];
// let result3 = filterArray(arr3);
// // ------------------------------------------
// console.log(`Results are equal to ${result1}, ${result2}, ${result3}`);
