console.log("second file");

const secondList = document.getElementById("second-list");

const li = document.createElement("li");
li.innerHTML = "My Dynamic Item";

secondList.appendChild(li);
