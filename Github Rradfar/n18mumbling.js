// Given a string which includes only letters, write a function that produces the outputs below.

const accum = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let firstLetterUpperCase = str[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      firstLetterUpperCase = firstLetterUpperCase + str[i].toLowerCase();
    }
    result.push(firstLetterUpperCase);
  }
  return result.join("-");
};

console.log(accum("abcd")); // 'A-Bb-Ccc-Dddd'
console.log(accum("cwAt")); // 'C-Ww-Aaa-Tttt'
console.log(accum("RqaEzty")); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
