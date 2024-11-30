// First function: returns the input number and the next number
function getNum(num) {
  return `${num}, ${num + 1}`;
}
// Second function: returns the input and the next number and the parameter of count says how many times to run it
function getNumCount(num, count) {
  let result = `${num}`;
  for (let i = 1; i < count; i++) {
    result += `, ${num + i}`;
  }
  return result;
}

function numCountSum(num, count) {
  let sum = 0;
  for (let j = 0; j < count; j++) {
    let cur = num + j;
    sum = sum + cur;
  }
  return sum;
}

// console.log(numCountSum(1, 3)); // Output: 1, 2, 3 = 6
console.log(numCountSum(10, 3)); // Output: 10, 11, 12 = 33
console.log(numCountSum(5, 5)); // Output: 5, 6, 7, 8, 9 = 35
console.log(numCountSum(3, 4)); // Output: 3, 4, 5, 6 = 18
