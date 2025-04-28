// tauntsAndLaughs.js

// Array of random laughs
const laughs = [
    "Hahaha, that's hilarious!",
    "Hehehe, you really think you can escape?",
    "Hahahaha, you're too funny!",
    "Hohoho, I love your sense of humor!",
    "Heh heh, you're making me laugh."
];

// Array of taunts for spelling mistakes
const taunts = [
    "Learn to spell, detective.",
    "Did you fall asleep on the keyboard?",
    "Even toddlers spell better than that."
];

// Array of taunts for grammar mistakes
const grammarTaunts = [
    "I think your grammar needs a little work.",
    "Looks like your sentence structure is in chaos!",
    "Your grammar's as messy as a puzzle with missing pieces!",
    "Oh no, someone forgot their grammar rules. Try again!"
];

// Array of taunts for wrong capitalization
const capitalizationTaunts = [
    "I see you've forgotten your capital letters.",
    "Starting a sentence with a lowercase letter? Tsk tsk.",
    "You should always begin your sentences with a capital letter, my friend.",
    "That sentence looks like it needs a proper noun or two."
];

// Check if the player input contains a question mark
function checkForPunctuation(input) {
  if (!input.includes('?')) {
    const responses = [
  	  "Not even sure what you're asking?",
  	  "No question mark? Am I supposed to guess?",
  	  "Questions usually end with a '?', genius."
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
  return null; // No taunt if a question mark is present
}


// Simulate Joker typing
function simulateJokerTyping(reply) {
    addMessage("...", 'joker');
    setTimeout(() => {
        const chat = document.getElementById('chat');
        chat.removeChild(chat.lastChild);
        addMessage(reply, 'joker');

        // --- ADD THIS PART FOR RANDOM LAUGH ---
        if (Math.random() < 0.3) { // 30% chance to laugh after answering
            const laugh = triggerRandomLaugh();
            setTimeout(() => {
                addMessage(laugh, 'joker');
            }, 800); // Delay after answer for realism
        }
        // --------------------------------------
        
    }, 1000);
}



// Check for spelling mistakes
function checkForSpellingMistakes(input) {
    const commonMisspellings = ['teh', 'recieve', 'definately', 'seperately', 'ocurr', 'becuase'];
    for (let word of commonMisspellings) {
        if (input.includes(word)) {
            return taunts[Math.floor(Math.random() * taunts.length)];
        }
    }
    return null;
}

// Check for grammar mistakes (very basic check for sentence structure)
function checkForGrammarMistakes(input) {
    // Check for basic grammatical issues (could be expanded with a grammar checking library)
    const hasNoSubject = input.split(' ').length < 3; // A simple assumption: if the sentence is too short, it might lack a subject
    if (hasNoSubject) {
        return grammarTaunts[Math.floor(Math.random() * grammarTaunts.length)];
    }
    return null;
}

// Check for incorrect capitalization
function checkForCapitalization(input) {
    const words = input.split(' ');
    if (words[0] && words[0][0] !== words[0][0].toUpperCase()) {
        return capitalizationTaunts[Math.floor(Math.random() * capitalizationTaunts.length)];
    }
    return null;
}

// Randomly select a laugh from the array
function getRandomLaugh() {
    return laughs[Math.floor(Math.random() * laughs.length)];
}

// Handle taunts based on player input
function handleTaunts(playerQuestion) {
    const tauntsCollected = [];

    const punctuationTaunt = checkForPunctuation(playerQuestion);
    if (punctuationTaunt) tauntsCollected.push(punctuationTaunt);

    const spellingTaunt = checkForSpellingMistakes(playerQuestion);
    if (spellingTaunt) tauntsCollected.push(spellingTaunt);

    const grammarTaunt = checkForGrammarMistakes(playerQuestion);
    if (grammarTaunt) tauntsCollected.push(grammarTaunt);

    const capitalizationTaunt = checkForCapitalization(playerQuestion);
    if (capitalizationTaunt) tauntsCollected.push(capitalizationTaunt);

    if (tauntsCollected.length > 0) {
        // Join all taunts into one big Joker reply
        return tauntsCollected.join(' ');
    }

    return null; // No taunts
}


// Trigger a random laugh after each response (could also be triggered by a timer or event)
function triggerRandomLaugh() {
    return getRandomLaugh();  // Randomly select a laugh when needed
}
