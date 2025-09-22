let rolls = parseInt(prompt("How many dice would you like to roll?"));

let result = document.querySelector("#result");

if (isNaN(rolls) || rolls <= 0) {
    result.textContent = "Please enter a valid positive number of dice.";
} else {
    let sum = 0;

    for (let i = 0; i < rolls; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    result.textContent = "You rolled " + rolls + " dice. The sum is " + sum + ".";
}