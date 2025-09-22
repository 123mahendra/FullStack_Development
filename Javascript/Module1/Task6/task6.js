let option = confirm("Should I calculate the square root?");

let result = document.querySelector("#result");

if (option) {
    let num = parseFloat(prompt("Enter a number:"));

    if (isNaN(num)) {
        result.textContent = "That is not a valid number.";
    } else if (num < 0) {
        result.textContent = "The square root of a negative number is not defined.";
    } else {
        result.textContent = "The square root of " + num + " is " + Math.sqrt(num) + ".";
    }
} else {
    result.textContent = "The square root is not calculated.";
}