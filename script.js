console.log("testar om det funkar");

const HEADER = document.getElementById("header");
const HEADERLOGGA = document.getElementById("logga");

const blomList = document.querySelectorAll(".blomList li");
const blom = document.querySelector(".blomList");

const newFlower = document.getElementById("newFlower");
const newFlowerButton = document.getElementById("newFlowerButton");

console.log(blomList[2]);//blomList om jag vill ha hela eller som här om man vill ha 3:e listItemet.
blom.insertAdjacentHTML("beforeend", "<li>Malwa</li>"); //Tar listan och lägger till ett listitem sist i listan med texten Malwa.

HEADER.style.backgroundColor = "grey";
HEADERLOGGA.innerHTML = "Att förändra i DOM med javascript"; 

newFlowerButton.addEventListener("click", function(){
    console.log("Klick på knapp");
    blom.insertAdjacentHTML("beforeend", "<li>" + newFlower.value + "</li>");  //Lägger till texten i textrutan som ett listitem sist i listan.
});

HEADER.addEventListener("click", function(){
    HEADER.classList.add("border");  //add, remove, toggle är vanliga här.
});