// jokerMocking.js

// Track how many "wrong" questions the player asked
let wrongQuestionCount = 0;

// Mocking messages after multiple wrong questions
const mockingMessages = [
    { text: "Are you even trying, detective?", audio: "mocking_trying.mp3" },
    { text: "You're making this too easy for me!", audio:  "mocking_too-easy.mp3" },
    { text: "Come on, a child could solve this faster!", audio: "mocking_come-on.mp3" },
    { text: "Maybe detective work isn't your calling!", audio: "mocking_maybe-detective.mp3" },
    { text: "At this rate, I'll get bored before you catch me!", audio: "mocking_at-this-rate.mp3" },
];

// Call this when a wrong question is detected
function trackWrongQuestion() {
    wrongQuestionCount++;

    if (wrongQuestionCount >= 3) {
        wrongQuestionCount = 0; // Reset counter after mocking
        const randomMock = mockingMessages[Math.floor(Math.random() * mockingMessages.length)];
        simulateJokerTyping(randomMock.text, randomMock.audio);
    }
}

// Call this when a correct question is asked
function resetWrongQuestionCount() {
    wrongQuestionCount = 0;
}
