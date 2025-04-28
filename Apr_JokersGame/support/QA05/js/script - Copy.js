// Set up Fuse.js search options
const fuse = new Fuse(conversations, {
    keys: ['question'],
    threshold: 0.4,
    ignoreLocation: true
});

// Normalize the player's input
function normalizeInput(input) {
    return input
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\b(largest|biggest)\b/g, 'largest')
        .replace(/\b(ing|ed|s)\b/g, '');
}

// Handle player input
function handleInput(event) {
    if (event.key === 'Enter') {
        const inputField = event.target;
        const playerQuestion = inputField.value.trim();
        if (playerQuestion === '') return;
        
        addMessage(playerQuestion, 'player');
        inputField.value = '';
        
        const normalizedQuestion = normalizeInput(playerQuestion);
        const result = fuse.search(normalizedQuestion);

        if (result.length > 0) {
            const matched = result[0].item;
            const answer = getRandomAnswer(matched.answers);
            simulateJokerTyping(answer);
        } else {
            simulateJokerTyping("I don't understand your question.");
        }

        resetIdleTimer(); // Reset idle after user input
    }
}

// Simulate Joker typing
function simulateJokerTyping(reply) {
    addMessage("...", 'joker');
    setTimeout(() => {
        const chat = document.getElementById('chat');
        chat.removeChild(chat.lastChild);
        addMessage(reply, 'joker');
    }, 1000);
}

// Add message to chat
function addMessage(text, sender) {
    const chat = document.getElementById('chat');
    const message = document.createElement('div');
    message.className = sender;
    chat.appendChild(message);

    if (sender === 'joker') {
        let index = 0;
        const typing = setInterval(() => {
            message.textContent += text.charAt(index);
            index++;
            if (index === text.length) clearInterval(typing);
            chat.scrollTop = chat.scrollHeight;
        }, 40);
    } else {
        message.textContent = text;
        chat.scrollTop = chat.scrollHeight;
    }
}

// Start listening
document.getElementById('userInput').addEventListener('keydown', handleInput);
resetIdleTimer(); // Start idle tracking on page load
