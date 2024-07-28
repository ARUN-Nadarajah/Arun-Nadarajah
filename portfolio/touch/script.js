const numInput = document.getElementById('number');


numInput.addEventListener('input',validateNumberInputs);


function validateNumberInputs(event) {
    const input = event.target;
    const value = input.value;


    if (value === '' || isNaN(value)) {
        input.value = ' ';
    }
}