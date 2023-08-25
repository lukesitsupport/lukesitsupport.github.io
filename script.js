// Establish a WebSocket connection
const socket = new WebSocket('ws://localhost:3000');

// Elements
const messagesContainer = document.getElementById('messages');
const inputField = document.getElementById('input');
const sendButton = document.getElementById('send');

// Event listener for sending messages
sendButton.addEventListener('click', () => {
    const message = inputField.value;
    if (message.trim() !== '') {
        socket.send(message);
        inputField.value = '';
    }
});

// Event listener for receiving messages
socket.addEventListener('message', (event) => {
    const message = event.data;
    const messageElement = document.createElement('li');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
});

