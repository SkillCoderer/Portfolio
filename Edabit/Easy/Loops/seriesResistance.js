// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum <= 1 ? sum + " ohm" : sum + " ohms";
}

// seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"
// seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"
// seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"

// let arr1 = [1, 5, 6, 3];
// let result1 = seriesResistance(arr1);
// // ------------------------------------------
// let arr2 = [16, 3.5, 6];
// let result2 = seriesResistance(arr2);
// // ------------------------------------------
// let arr3 = [0.5, 0.5];
// let result3 = seriesResistance(arr3);
// // ------------------------------------------
// console.log(`Results are equal to ${result1}, ${result2}, ${result3}`);
