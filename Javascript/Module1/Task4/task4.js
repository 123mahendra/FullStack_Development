let studentName = prompt("What's your name?");

if (!studentName) studentName = "Student";

const drawValue = Math.floor(Math.random() * 4) + 1;

let x;
switch (drawValue) {
    case 1:
      x = "Gryffindor";
      break;
    case 2:
      x = "Slytherin";
      break;
    case 3:
      x = "Hufflepuff";
      break;
    default:
      x = "Ravenclaw";
  }

document.querySelector("#student").textContent = studentName+", you are " + x + ".";