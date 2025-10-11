function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = parseInt(prompt("Enter the number of sides on the dice:"), 10);

if (isNaN(sides) || sides < 2) {
    alert("Please enter a valid number greater than 1.");
} else {
    const list = document.getElementById("diceResults");
    let roll;

    do {
        roll = rollDice(sides);
        const listItem = document.createElement("li");
        listItem.textContent = `You rolled: ${roll}`;
        list.appendChild(listItem);

    } while (roll !== sides);
}
