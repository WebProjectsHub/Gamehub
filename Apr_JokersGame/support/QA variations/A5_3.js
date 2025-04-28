// Initialize variables
const chatbox = document.getElementById("chatbox");
const playerQuestionInput = document.getElementById("playerQuestion");
const askButton = document.getElementById("askButton");
const eerieLaughAudio = document.getElementById("eerieLaughAudio");
let wrongAnswersCount = 0;
let previousQuestions = [];

// Define Joker's responses with variations of questions
const jokerResponses = {
    "who are you": [
        "I'm the Joker. Nice to meet you, Detective.",
        "I'm the one pulling the strings, nothing more.",
        "Guess who, Detective? You've been playing my game.",
    ],
    "what is your real name": [
        "Does it matter? Names are so... boring.",
        "Why does a name matter, when all you need is a game?",
        "The name’s irrelevant, detective. It's the game that matters."
    ],
    "why are you doing this": [
        "Because it's fun, Detective. You're the real entertainment here.",
        "For revenge. For the thrill.",
        "Why? Because I can, detective. It’s the only thing that excites me."
    ],
    "where is the victim": [
        "Do you think I'd just tell you? That'd be too easy.",
        "The victim's somewhere you'll never find them in time.",
        "Oh, the victim? You're not ready for that answer."
    ],
    "are they still alive": [
        "Alive? Does it matter? Not everyone deserves to live.",
        "You’ll find out soon enough, won’t you?",
        "That’s something you’ll discover when it’s too late."
    ],
    // More questions and their variations can be added here...
};

// Functions to process the player's input and provide responses
askButton.addEventListener("click", () => {
    const playerQuestion = playerQuestionInput.value.toLowerCase().trim();
    playerQuestionInput.value = "";  // Clear the input field
    handleQuestion(playerQuestion);
});

// Handle player's question
function handleQuestion(question) {
    const response = getJokerResponse(question);
    displayResponse(response);
    if (response.isWrong) {
        wrongAnswersCount++;
        playEerieLaugh();
        if (wrongAnswersCount >= 5) {
            displayTaunt("That's five wrong questions in a row. You’re really testing my patience.");
        }
    } else {
        wrongAnswersCount = 0;  // Reset if the answer was correct
    }
}

// Get Joker's response based on fuzzy or variation matching
function getJokerResponse(question) {
    let response = { text: "Hmm... interesting question. But not what I wanted. Try again.", isWrong: true };
    const lowerQuestion = question.toLowerCase();
    const keywords = Object.keys(jokerResponses);

    // Fuzzy matching with regex
    for (let i = 0; i < keywords.length; i++) {
        const keyword = keywords[i];

        // Check if the question contains a key phrase or matches with regular expressions
        const regex = new RegExp("\\b" + keyword.split(' ').join('\\b|\\b') + "\\b", 'i'); // Basic fuzzy matching
        if (regex.test(lowerQuestion)) {
            const randomResponse = jokerResponses[keyword][Math.floor(Math.random() * jokerResponses[keyword].length)];
            response = { text: randomResponse, isWrong: false };
            break;
        }
    }

    return response;
}

// Display Joker's response
function displayResponse(response) {
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("message");
    chatMessage.textContent = response.text;
    chatbox.appendChild(chatMessage);
    chatbox.scrollTop = chatbox.scrollHeight;  // Auto scroll to latest message

    if (response.isWrong) {
        displayTaunt("Try again, little detective.");
    }
}

// Play the eerie laugh sound
function playEerieLaugh() {
    eerieLaughAudio.play();
}

// Display a taunt message
function displayTaunt(tauntMessage) {
    const taunt = document.createElement("div");
    taunt.classList.add("taunt");
    taunt.textContent = tauntMessage;
    chatbox.appendChild(taunt);
    chatbox.scrollTop = chatbox.scrollHeight;  // Auto scroll to latest message
}
