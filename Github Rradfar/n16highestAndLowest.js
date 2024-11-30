/* s Given a string of space-separated numbers, write a function that returns the highest and lowest numbers. There will always be at least one number in the input string. */

const highAndLow = (numbers) => {
  let result = `${highestChecker(numbers)} ${lowestChecker(numbers)}`;
  return result;
};

function highestChecker(numArrayHighest) {
  numArrayHighest = numArrayHighest.split(" ");
  let highest = numArrayHighest[0];
  for (let i = 0; i < numArrayHighest.length; i++) {
    if (numArrayHighest[i] > highest) {
      highest = numArrayHighest[i];
    }
  }
  return highest;
}

function lowestChecker(numArrayLowest) {
  numArrayLowest = numArrayLowest.split(" ");
  let lowest = numArrayLowest[0];
  for (let j = 0; j < numArrayLowest.length; j++) {
    if (numArrayLowest[j] < lowest) {
      lowest = numArrayLowest[j];
    }
  }
  return lowest;
}

console.log(highAndLow("1 2 3 4 5")); // '5 1'
console.log(highAndLow("1 2 -3 4 5")); // '5 -3'
console.log(highAndLow("1 9 3 4 -5")); // '9 -5'
console.log(highAndLow("0 -214 542")); // '542 -214'
