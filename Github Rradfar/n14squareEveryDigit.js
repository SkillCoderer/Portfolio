/* Given an integer, your task is to square every digit of it and concatenate them to produce a new integer. */

const squareDigits = (num) => {
  let num2Str = num + "";
  let result = [];
  for (let i = 0; i < num2Str.length; i++) {
    let digit = num2Str[i];
    let squared = digit * digit;
    result.push(squared);
  }
  return result;
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
