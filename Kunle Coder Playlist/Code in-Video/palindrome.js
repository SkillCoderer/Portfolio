// Solution #1
const Palindrome = (str) => {
  const isPlaindrome = str.split("").reverse().join("");
  console.log(str === isPlaindrome);
};

Palindrome("abba");
// Solution #2

(function (str) {
  let reversed = "";
  for (let x of str) {
    reversed = x + reversed;
  }
  console.log(str === reversed);
})("hannah");
