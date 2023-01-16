const inputText = document.querySelector('#validation-input');
const dataLength = Number(inputText.dataset.length);
const cls = ["valid", "invalid"];

const boarderColorDepText = (event) => {
    let inputTextLength = inputText.value.trim().length;
    inputText.classList.remove(...cls);
    // console.log(inputTextLength);

    if (inputTextLength === dataLength) {
        inputText.classList.add('valid');
        // console.log("true");
    } else {
        inputText.classList.add('invalid');
        // console.log("false");
    }
};

inputText.addEventListener('blur', boarderColorDepText);