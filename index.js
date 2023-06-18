// Write your code here!
const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "John Carges is the champion";

const body = document.getElementsByTagName("body")[0];
body.append(newHeader);