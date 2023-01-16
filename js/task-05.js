const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

const onBtnNameChange = (event) => {
    event.currentTarget.value.trim() === "" ?
    userNameOutput.textContent = "Anonymous" :
    userNameOutput.textContent = event.currentTarget.value.trim();
};

userNameInput.addEventListener('input', onBtnNameChange);

