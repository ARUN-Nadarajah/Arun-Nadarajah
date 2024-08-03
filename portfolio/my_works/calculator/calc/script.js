const num = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('.display');

num.forEach(button =>{
    button.addEventListener('click', ()=> {
        display.textContent += button.value;
    })
} )

// function displayval(button){
    // display.value += button.value;
// console.log("done");
// }

// num.forEach(button => {
    // button.addEventListener('click', () => {
        // display.textContent += button.value;
    // });
// });
// 