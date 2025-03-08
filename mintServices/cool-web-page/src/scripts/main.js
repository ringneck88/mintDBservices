// This file contains the JavaScript code for the web page. It handles interactivity and dynamic behavior of the page.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to the Cool Web Page!';
    
    const button = document.getElementById('clickMe');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});