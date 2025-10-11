'use strict';
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('start');
const result = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    const operation = operationSelect.value;
    const resultParagraph = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultParagraph.textContent = 'Please enter valid numbers.';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                resultParagraph.textContent = 'Cannot divide by zero.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultParagraph.textContent = 'Please select an operation.';
            return;
    }
    resultParagraph.textContent = `Result: ${result}`;
});