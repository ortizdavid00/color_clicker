// Variables for Functions
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnRNG = document.getElementById("btn-rng");
const btnReset = document.getElementById("btn-reset");
const color = document.querySelector(".color");

// Button Event Listener (Change Background and Text)
btnRNG.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// RNG From Array
getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

// Reset Button
btnReset.addEventListener("click", function () {
  document.body.style.backgroundColor = "#FFFFFF";
  color.textContent = "#FFFFFF";
});
