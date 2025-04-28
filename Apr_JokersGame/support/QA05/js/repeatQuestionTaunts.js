// repeatQuestionTaunts.js

// Track previous questions
const askedQuestions = new Map();

// Mocking messages when a player repeats a question
const repeatTaunts = [
    "Déjà vu, detective?",
    "Asked that already... running out of ideas?",
    "I'm flattered you liked that question so much.",
    "Repeating yourself won't help you!",
    "Insanity is doing the same thing and expecting different results!"
];

// Normalize a question to avoid minor differences causing issues
function normalizeRepeatedQuestion(input) {
    return input
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .trim();
}

// Check for repeated questions
function checkRepeatedQuestion(playerQuestion) {
    const normalized = normalizeRepeatedQuestion(playerQuestion);

    if (askedQuestions.has(normalized)) {
        askedQuestions.set(normalized, askedQuestions.get(normalized) + 1);
        if (askedQuestions.get(normalized) >= 2) {
            const randomTaunt = repeatTaunts[Math.floor(Math.random() * repeatTaunts.length)];
            simulateJokerTyping(randomTaunt);
            return true; // We handled this repetition
        }
    } else {
        askedQuestions.set(normalized, 1);
    }
    return false; // No repetition detected yet
}
