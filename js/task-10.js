function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createDives = document.querySelector('[data-create]');
const destroyDives = document.querySelector('[data-destroy]');
const placeDives = document.getElementById("boxes");

const amounControl = () => {
  const amountDives = document.querySelector("input").value;
 
  if (!amountDives) {
    return console.log("Enter amount from 1 to 100");
  };

  createBoxes(amountDives);
};

function createBoxes(amount) {
  console.log(amount);

  let side = 30;
  let arrDiv = [];
  for (let i = 1; i <= amount; i +=1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${side}px`;
    divEl.style.height = `${side}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    arrDiv.push(divEl);
    side += 10;
  };

  placeDives.append(...arrDiv);
};

function destroyBoxes() {
  placeDives.innerHTML = "";
};

createDives.addEventListener('click', amounControl);
destroyDives.addEventListener('click', destroyBoxes);







// ------------------------1st
// const createBoxes = (amount) => {
// console.log(amount);
// };
// createDives.addEventListener('click', () => {
//   const amountDives = document.querySelector("input").value;
//   createBoxes(amountDives);
// });
