// Global Variables
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var messageButton = document.querySelector('#message-button');
var bellImage = document.querySelector('.bell');
var message = document.querySelector('#message');

// Event Listeners
messageButton.addEventListener('click', receiveMessage);

// Event Handlers
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function receiveMessage() {
    if (affirmationButton.checked) {
        bellImage.classList.add('hidden');
        message.innerText = affirmations[getRandomIndex(affirmations)];
    } else if (mantraButton.checked) {
        bellImage.classList.add('hidden');
        message.innerText = mantras[getRandomIndex(mantras)];
    } else {
        alert('Please select a category.');
    }
}