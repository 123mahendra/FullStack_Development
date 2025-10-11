function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const list = document.getElementById("diceResults");
let roll;

do {
    roll = rollDice();
    const listItem = document.createElement("li");
    listItem.textContent = `You rolled: ${roll}`;
    list.appendChild(listItem);

} while (roll !== 6);