// Basic if/else logic
if (age > 18) {
    console.log("Sorry you are not old enough to enter the venue");
} else if (age < 21) {
    console.log("You can enter but you cannot drink");
} else {
    console.log("You can come in and you can drink");
}

var age = Number(prompt("What is your age?"))

// more age logic
if (age < 0) {
    console.log("Error invalid age")
} else if (age === 21) {
    console.log("Happy 21st birthday!")
} else if (age % 2 === 1) {
    console.log("Your age is odd!")
} else if (age > 0 && Math.sqrt(age) % 1 === 0) {
    console.log("perfect square")
}

