function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColorized = document.querySelector("body");
const btnBodyColorChange = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");

const changeBgrCol = (event) => {
  let currentColor = getRandomHexColor();
  console.log(currentColor);

  bodyColorized.style.backgroundColor = currentColor;
  nameOfColor.textContent = currentColor;
};

btnBodyColorChange.addEventListener('click', changeBgrCol);


