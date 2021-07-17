const colors = [
  "GREEN",
  "RED",
  "RGBA(133,122,200)",
  "#F15025",
  "#B523F1",
  "#30D5C8",
];

const btnRNG = document.getElementById("btn-rng");
const btnReset = document.getElementById("btn-reset");
const color = document.querySelector(".color");

// Button Event Listener (Change Background and Text)
btnRNG.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// RNG From Array
getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

// Reset Button
btnReset.addEventListener("click", function () {
  document.body.style.backgroundColor = "#FFFFFF";
  color.textContent = "#FFFFFF";
});
