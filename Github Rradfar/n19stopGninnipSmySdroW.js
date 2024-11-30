/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. */

//disable console.debug
console.debug = () => {};

const spinWords = (str) => {
  let strWords = str.split(" ");
  console.debug(`strWords = ${strWords}`); // Debugging

  let result = [];
  for (let i = 0; i < strWords.length; i++) {
    console.debug(`i = ${i}, strWords[i] = ${strWords[i]}`); // Debugging

    if (strWords[i].length >= 5) {
      let reversedWord = [];
      for (let j = strWords[i].length - 1; j >= 0; j--) {
        reversedWord += strWords[i][j];
      }
      console.debug(`pushing revsered word: ${reversedWord}`); // Debugging
      result.push(reversedWord);
    } else {
        console.debug(`pushing as is word: ${strWords[i]}`); // Debugging
      result.push(strWords[i]);
    }
  }
  console.debug(`-------------> result is ${result}`); // Debugging
  return result.join(" ");
};

console.log(spinWords("This is a test")); // 'This is a test'
console.log(spinWords("Hey fellow warriors")); // 'Hey wollef sroirraw'
console.log(spinWords("This is another test")); // 'This is rehtona test'
