var count = -10;

console.log("between 1 and 10")
while (count < 20) {
    console.log(count);
    count++;
}

count = 10;

console.log("even numbers between 10 and 40")
while (count <= 40) {
    if (count % 2 === 0) {
        console.log(count);
    }
    count++;
}

count = 300

console.log("odd numbers between 1 and 10")
while (count <= 333) {
    if (count % 2 !== 0) {
        console.log(count);
    }
    count++;
}

count = 5

console.log("numbers divisible by 5")
while (count <= 50) {
    if (count % 5 === 0 && count % 3 === 0) {
        console.log(count);
    }
    count++;
}