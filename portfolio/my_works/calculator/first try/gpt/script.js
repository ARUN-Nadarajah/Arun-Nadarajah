// JavaScript

// Get reference to the display
const display = document.getElementById('display');

// Get reference to all number buttons
const numbers = document.querySelectorAll('.num input[type="button"]');

// Get reference to clear button
const clear = document.getElementById('clear');

// Get reference to delete button
const del = document.getElementById('del');

// Get reference to the equals button
const eql = document.getElementById('eql');

// Add event listener to clear button
clear.addEventListener('click', () => {
    display.value = ''; // Clear the display
});

// Add event listener to delete button
del.addEventListener('click', () => {
    display.value = display.value.slice(0, -1); // Delete last character from display
});

// Add event listener to number buttons
numbers.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.value; // Append clicked number to display
    });
});

// Add event listener to equals button
eql.addEventListener('click', () => {
    try {
        display.value = eval(display.value); // Evaluate the expression and display result
    } catch (error) {
        display.value = 'Error'; // Handle error if occurred during evaluation
    }
});
