const target=document.getElementById("target");
const firstName=document.createElement("li");
firstName.textContent="First item";
target.appendChild(firstName);  

const secondName=document.createElement("li");
secondName.textContent="Second item";
secondName.classList.add("my-item");
target.appendChild(secondName);

const thirdName=document.createElement("li");
thirdName.textContent="Third item";
target.appendChild(thirdName);
target.className="my-list";