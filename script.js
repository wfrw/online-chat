function sendMessage() {
  const inputBox = document.getElementById('chat-input');
  const message = inputBox.value.trim();
  if (message) {
    displayMessage(message, 'user');
    inputBox.value = '';
    // Simulate a response from the "other person"
    setTimeout(() => {
      displayMessage("This is a simulated response.", 'bot');
    }, 1000);
  }
}

function displayMessage(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function checkEnter(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}
