/* Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed. */
const disemvowel = (str) => {
  return replacer(str);
};

function replacer(string) {
  string = string.toLowerCase();
  let resultArray = [];
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      resultArray.push(string[i]);
    }
  }

  return resultArray.join("");
}

console.log(disemvowel("This website is for losers LOL!")); // 'Ths wbst s fr lsrs LL!'
