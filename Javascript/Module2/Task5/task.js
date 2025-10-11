let numbers = [];

while (true) {
    let userInput = parseFloat(prompt("Enter a number:"));

    if (isNaN(userInput)) {
        alert("Please enter a valid number!");
        continue;
    }

    if (numbers.includes(userInput)) {
        alert("This number has already been given. Stopping...");
        break;
    }

    numbers.push(userInput);
}
numbers.sort((a, b) => a - b);
console.log("Numbers in ascending order:");
numbers.forEach(number => console.log(number));