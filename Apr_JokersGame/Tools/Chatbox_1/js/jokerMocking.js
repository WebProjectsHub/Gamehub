// jokerMocking.js

// Track how many "wrong" questions the player asked
let wrongQuestionCount = 0;

// Mocking messages after multiple wrong questions
const mockingMessages = [
    "Are you even trying, detective?",
    "You're making this too easy for me!",
    "Come on, a child could solve this faster!",
    "Maybe detective work isn't your calling!",
    "At this rate, I'll get bored before you catch me!"
];

// Call this when a wrong question is detected
function trackWrongQuestion() {
    wrongQuestionCount++;

    if (wrongQuestionCount >= 3) {
        wrongQuestionCount = 0; // Reset counter after mocking
        const randomMock = mockingMessages[Math.floor(Math.random() * mockingMessages.length)];
        simulateJokerTyping(randomMock);
    }
}

// Call this when a correct question is asked
function resetWrongQuestionCount() {
    wrongQuestionCount = 0;
}
