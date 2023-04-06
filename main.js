// Global Variables
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var messageButton = document.querySelector('#message-button');
var deleteButton = document.querySelector('.delete-button');

var bellImage = document.querySelector('.bell');
var message = document.querySelector('#message');

// Event Listeners
messageButton.addEventListener('click', receiveMessage);
deleteButton.addEventListener('click', deleteMessage);

// Event Handlers
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function receiveMessage() {
    if (affirmationButton.checked) {
        bellImage.classList.add('hidden');
        message.innerText = affirmations[getRandomIndex(affirmations)];
        deleteButton.classList.remove('hidden');
    } else if (mantraButton.checked) {
        bellImage.classList.add('hidden');
        message.innerText = mantras[getRandomIndex(mantras)];
        deleteButton.classList.remove('hidden');
    } else {
        alert('Please select a category.');
    }
}

function deleteMessage() {
    var response = confirm('Would you like to delete this message?');
    if (response) {
        if (affirmationButton.checked) {
            affirmations.splice(affirmations.indexOf(message), 1);
        } else {
            mantras.splice(mantras.indexOf(message), 1);
        }
        alert('Message deleted.');
        receiveMessage();
    }
}