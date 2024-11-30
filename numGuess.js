let randomNumber = Math.floor(Math.random() * 100);
let count = 0;

//what's this?
function guessCheck() {
  let guess = parseFloat(document.querySelector("#guessInput").value);
  count++;

  if (guess === randomNumber) {
    alert(`Congratulations! You guessed the number in ${count} count.`);
  } else if (guess > randomNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Too low! Try again.");
  }
}
