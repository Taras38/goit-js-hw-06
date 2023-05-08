const input = document.querySelector('#validation-input');
const validLength = input.dataset.length;

function handleInputBlur(event) {
const inputValue = event.target.value;
if (inputValue.length === Number(validLength)) {
input.classList.add('valid');
input.classList.remove('invalid');
} else {
input.classList.add('invalid');
input.classList.remove('valid');
}
}

input.addEventListener('blur', handleInputBlur);