// Random Joker Laughs
const jokerLaughs = [
    "Heh...",
    "Hahaha!",
    "You’re funny without trying!",
    "AHAHAHA!",
    "Oh, you kill me!"
];

// Spellcheck Taunts
const spellingTaunts = [
    "Learn to spell, detective.",
    "Did you fall asleep on the keyboard?",
    "Even toddlers spell better than that."
];

// Missing Question Mark Taunts
const punctuationTaunts = [
    "Not even sure what you're asking?",
    "No question mark? Am I supposed to guess?",
    "Questions usually end with a '?', genius."
];

// Randomly inject Joker's laugh
function maybeLaugh() {
    if (Math.random() < 0.2) { // 20% chance after each Joker reply
        const randomLaugh = jokerLaughs[Math.floor(Math.random() * jokerLaughs.length)];
        setTimeout(() => simulateJokerTyping(randomLaugh), 1500);
    }
}

// Check for spelling errors and missing question mark
function checkPlayerInput(playerInput) {
    let taunt = null;

    // Very basic spellcheck: check for very short words or gibberish patterns
    const gibberishPattern = /(.)\1{2,}/; // e.g., "hmmm" "aaaa"

    if (gibberishPattern.test(playerInput)) {
        taunt = spellingTaunts[Math.floor(Math.random() * spellingTaunts.length)];
    }

    // Check if there is no question mark
    if (!playerInput.includes('?') && Math.random() < 0.5) { 
        // 50% chance of taunting about punctuation (not every time)
        taunt = punctuationTaunts[Math.floor(Math.random() * punctuationTaunts.length)];
    }


    if (taunt) {
        simulateJokerTyping(taunt);
    }
}
