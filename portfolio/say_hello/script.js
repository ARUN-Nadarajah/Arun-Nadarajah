const numInput = document.getElementById('number');
const mail = document.getElementById('mail');
const submit = document.getElementById('submit');

let confirmer;


numInput.addEventListener('input', validateNumberInputs);
mail.addEventListener('change', validateEmail); 
submit.addEventListener('click', finalValidation);



function validateNumberInputs(event) {
    const input = event.target;
    const value = input.value;

    if (value === '' || isNaN(value)) {
        input.value = ''; // Set value to empty if not a number or empty
    }
}

function validateEmail(event) {
    const mailValue = mail.value;
    
    const regex = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
    
    if (regex.test(mailValue)) {
        return true;
    } else {
        alert("Invalid email");
        return false;
    }
}

function finalValidation(event){
    event.preventDefault();


    if(validateEmail()){
        document.querySelector('form').submit();
        console.log("hell");
    }else{
        alert("plese check the email adress again")
    }
}