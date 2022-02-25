
console.log("jeg er i fruits");

const fruits = ["apple", "orange", "cherry", "strawberry"];

function fillDropDown(item, index) {
  const el = document.createElement("option");
  el.textContent = item;
  el.value = index; //important value follows the key.
  ddFruits.appendChild(el);
}

function addFruits(btn) {
  fruits.forEach(fillDropDown);
}

function selectFruit(btn) {
  ddFruits.value;
  const selindex = ddFruits.selectedIndex;
  const selectedFruit = ddFruits.options[selindex];
  console.log(selindex);
  console.log(selectedFruit);
  console.log(selectedFruit.innerText);
  console.log(selectedFruit.value);
}


const ddFruits = document.getElementById("ddFruits");
const pbFillDropDown = document.getElementById("pbFillDropDown");
pbFillDropDown.addEventListener('click', addFruits);
ddFruits.addEventListener('change', selectFruit);



