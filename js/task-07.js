const inputFontSise = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeTextFontSize = (event) => {
  let currentFontSize = inputFontSise.value;
  text.style.fontSize = `${currentFontSize}px`;
// console.log(currentFontSize);
};

text.style.fontSize = `${inputFontSise.value}px`;
inputFontSise.addEventListener('input', changeTextFontSize);
