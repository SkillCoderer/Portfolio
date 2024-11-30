/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The input string can contain any character. */

const XO = (str) => {
  str = str.toLowerCase();
  let countOfX = 0;
  let countOfO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      countOfX++;
    } else if (str[i] === "o") {
      countOfO++;
    }
  }

  return countOfX === countOfO;
};

console.log(XO("xo")); // true
console.log(XO("Oo")); // false
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("ooom")); // false
console.log(XO("ty")); // true (when no 'x' and 'o' is present should return true)
