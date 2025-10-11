let dogs = [];

for(let i = 0; i < 6; i++) {
    let name = prompt(`Enter name of dog ${i + 1} :`);
    dogs.push(name);
}

dogs.sort().reverse();
let nameList = "";

for (let i = 0; i < dogs.length; i++) {
    nameList += `<li>${dogs[i]}</li>`;
}

document.querySelector(".names").innerHTML = nameList;