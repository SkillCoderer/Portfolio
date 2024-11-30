// Calculate the sum of numbers from 1 to 10
function sum(n) {
  let sum = 0;
  let arr = [];
  for (i = 1; i <= n; i++) {
    sum += i;
    arr.push(i);
  }
  let result = arr.join(" + ");
  console.log(`${result} =`);
  return sum;
}

console.log(sum(3));
// Input => Output
// 3 => 1 + 2 + 3 = 6
// 10 => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
