'use strict';

const form = document.querySelector('#source');
const target = document.querySelector('#target');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const firstName = document.querySelector('input[name="firstname"]');
    const lastName = document.querySelector('input[name="lastname"]');

    target.textContent = "Your name is " + firstName.value + " " + lastName.value + '.';
});