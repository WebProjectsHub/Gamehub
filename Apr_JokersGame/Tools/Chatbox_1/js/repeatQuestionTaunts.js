// repeatQuestionTaunts.js

// Track previous questions
const askedQuestions = new Map();

// Mocking messages when a player repeats a question
const repeatTaunts = [
  { text: "Déjà vu, detective?", audio: "repeat_deja_vu.mp3" },
  { text: "Asked that already... running out of ideas?", audio: "repeat_asked_already.mp3" },
  { text: "I'm flattered you liked that question so much.", audio: "repeat_flaunted.mp3" },
  { text: "Repeating yourself won't help you!", audio: "repeat_dont_repeat.mp3" },
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
            const repeat = repeatTaunts[Math.floor(Math.random() * repeatTaunts.length)];
            simulateJokerTyping(repeat.text, repeat.audio);
            return true; // We handled this repetition
        }
    } else {
        askedQuestions.set(normalized, 1);
    }
    return false; // No repetition detected yet
}
