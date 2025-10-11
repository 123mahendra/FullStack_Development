let numbers = [];
let userinput = parseFloat(prompt("Enter a number (0 to stop):"));

while (userinput !== 0) {
    if (!isNaN(userinput)) {
        numbers.push(userinput);
    }
    userinput = parseFloat(prompt("Enter a number (0 to stop):"));
}

numbers.sort((a, b) => b - a);
console.log("From largest to smallest numbers:");
numbers.forEach(number => console.log(number));