let start = parseInt(prompt("Enter the start year:"));
let end = parseInt(prompt("Enter the end year:"));

let result = document.querySelector("#leapYears");
let items = "";

if (isNaN(start) || isNaN(end) || start > end) {
    result.innerHTML = "<li>Invalid input. Please refresh and try again.</li>";
} else {
    for (let year = start; year <= end; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
             items += `<li>${year}</li>`;
        }
    }
    result.innerHTML = items;
}