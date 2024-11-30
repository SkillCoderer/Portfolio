/* Given a non-empty string of words, return the length of the shortest word(s). */

//disable console.debug
console.debug = () => {};

const findShort = (str) => { //"lets all go"
  let words = str.split(" ");
  console.debug(`words = ${words}`); // lets, all, go

  let shortestLength = words[0].length; // 4
  console.debug(`words[0] = ${words[0]}: shortestLength = ${shortestLength}`);

  for (let i = 1; i < words.length; i++) { // i = 1, 2
    console.debug(`i = ${i}, words[i]= ${words[i]}`);

    if (words[i].length < shortestLength) { // 3 < 4, 2 < 3
      shortestLength = words[i].length; // 3, 2
      console.debug(
        `updating shortestLength: shortestLength = ${shortestLength}`
      );
    }

  }

  return shortestLength;
};

console.log(findShort("Test where final words shortest see")); // 3
console.log(findShort("Lets all go on holiday somewhere very cold")); // 2
console.log(findShort("i want to travel the world writing code one day")); // 1
