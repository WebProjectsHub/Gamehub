// Initialize variables
const chatbox = document.getElementById("chatbox");
const playerQuestionInput = document.getElementById("playerQuestion");
const askButton = document.getElementById("askButton");
const eerieLaughAudio = document.getElementById("eerieLaughAudio");
let wrongAnswersCount = 0;
let previousQuestions = [];

// Define Joker's responses
const jokerResponses = {
    "who are you": ["I'm the Joker. Nice to meet you, Detective.", "I'm the one pulling the strings, nothing more."],
    "what is your real name": ["Does it matter? Names are so... boring.", "Why does a name matter, when all you need is a game?"],
    "why are you doing this": ["Because it's fun, Detective. You're the real entertainment here.", "For revenge. For the thrill."],
    "where is the victim": ["Do you think I'd just tell you? That'd be too easy.", "The victim's somewhere you'll never find them in time."],
    "are they still alive": ["Alive? Does it matter? Not everyone deserves to live.", "You’ll find out soon enough, won’t you?"],
    "what do you want from us": ["I want you to play, Detective. Play with me.", "I want to see you squirm."],
    "how do we save them": ["Save them? You have to be quicker than that, Detective.", "Maybe if you were smarter, you'd figure it out."],
    "why leave clues": ["Because you’ll never find me without them. It's all part of the game.", "The clues are for my amusement... and yours."],
    "what do the joker cards mean": ["They mean nothing and everything. What do you think they mean?", "A symbol of chaos. A reminder that I’m always watching."],
    "how many victims are there": ["How many do you think there are? Guess right, and I might let you know.", "That depends on how long you last."],
    "what is your endgame": ["To see you fail, Detective. That's all.", "My endgame? It's already begun. You're too late to stop it."],
    "why target the police": ["Because you think you're above me. But I’ll always be one step ahead.", "You're the ones who ruined me. Now I'm just returning the favor."],
    "are you watching us": ["Always. You think you're alone? I'm everywhere.", "I never stop watching. Never stop playing."],
    "are you in the building right now": ["Maybe... Or maybe I'm just a ghost in the system.", "Why do you think I’m right there? Too obvious, Detective."],
    "can we negotiate": ["Negotiate? Oh, Detective, this isn’t a negotiation. This is a game.", "You can try. But no one negotiates with the Joker."],
    "do you want to be caught": ["Does it matter if I want it? I'll never be caught.", "You think you can catch me? That's adorable."],
    "why did you target the journalist": ["The journalist got too close to the truth. And I can’t let that happen.", "Because they made me a villain. Now, I’m just returning the favor."],
    "are you working alone": ["Why would I tell you that? It’s not like you can stop me either way.", "That’s a question you should ask yourself, Detective."],
    "how do you choose your victims": ["They’re not chosen. They’re part of the game. Everyone is a pawn.", "The victims? They're just the unlucky ones."],
    "how can we trust you’re telling the truth": ["Trust? A little late for that, don’t you think?", "You don’t trust me. You never will. But I’ll tell you what I want you to know."],
    "where is the next clue": ["Why would I tell you that? It’s part of the chase.", "The next clue is closer than you think, Detective."],
    "is there a way to stop you": ["No. There’s no stopping me.", "You can try, but you’ll never succeed."],
    "are we just pawns in your game": ["You’re more than pawns. You’re entertainment.", "You’re not pawns. You’re the players."],
    "did you plan this for months": ["Months? No, I planned this for years. Time is irrelevant.", "Planning this game was the easy part."],
    "are we too late": ["Too late? You were never on time, Detective.", "You’re right on time... for failure."],
    "why leave riddles instead of just killing": ["Because where’s the fun in just killing? The puzzle is what makes it interesting.", "I want to see how far you'll go. Can you solve it?"],
    "is this personal": ["Everything I do is personal. Especially when you’re involved.", "Is it personal? You tell me, Detective."],
    "were you someone we once knew": ["Maybe... but I’m not who you think I am.", "Who I was doesn’t matter. Who I am matters."],
    "is there a way to end this peacefully": ["Peace? There’s no peace in a game like this.", "You think this ends peacefully? How sweet."],
    "are you playing by rules": ["Rules? I make the rules, Detective.", "I make my own rules. You just follow them."],
    "what happens to those who refuse to play": ["They get left behind. Forgotten. Just like everyone else.", "Those who refuse to play... don’t survive."],
    "what is the significance of the joker card": ["The joker card is me. It’s everything. It's chaos.", "The joker card is the key. It's my signature. My game."],
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

// Get Joker's response based on fuzzy matching
function getJokerResponse(question) {
    let response = { text: "Hmm... interesting question. But not what I wanted. Try again.", isWrong: true };
    const lowerQuestion = question.toLowerCase();
    const keywords = Object.keys(jokerResponses);

    // Fuzzy matching
    for (let i = 0; i < keywords.length; i++) {
        const keyword = keywords[i];
        if (lowerQuestion.includes(keyword)) {
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

