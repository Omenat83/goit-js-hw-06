let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const result = document.querySelector("#value");

const decrement = () => {
    counterValue -= 1;
    result.innerHTML = `<span id="value">${counterValue}</span>`;
    console.log(counterValue);
};

const increment = () => {
    counterValue += 1;
    result.innerHTML = `<span id="value">${counterValue}</span>`;
    console.log(counterValue);
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);