// initial section
var secretNumber = 4; 

var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
    alert("You got it right!");
} else if (guess < secretNumber) {
    alert("Too low, guess again");
} else {
    alert("Too high, guess again");
}

