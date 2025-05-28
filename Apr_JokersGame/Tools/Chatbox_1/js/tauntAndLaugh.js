// tauntsAndLaughs.js

// Array of random laughs
//const laughs = [
//    "Hahaha, that's hilarious!",
//    "Hehehe, you really think you can escape?",
//    "Hahahaha, you're too funny!",
//    "Hohoho, I love your sense of humor!",
//    "Heh heh, you're making me laugh."
//];

// Array of taunts for spelling mistakes
const taunts = [
    { text: "Learn to spell, detective.", audio: "taunt_learn-spell.mp3" },
    { text: "Did you fall asleep on the keyboard?", audio: "taunt_fall-asleep.mp3" },
    { text: "Even toddlers spell better than that.", audio: "taunt_toddler-spell.mp3" }
];

// Array of taunts for grammar mistakes
const grammarTaunts = [
    { text: "Your grammar is a joke.", audio: "taunt_grammar-joke.mp3" },
    { text: "Looks like your sentence structure is in chaos!", audio: "taunt_sentence-chaos.mp3" },
    { text: "Your grammar's as messy as a puzzle with missing pieces!", audio: "taunt_grammar-messy.mp3" },
    { text: "Oh no, someone forgot their grammar rules - again!", audio: "taunt_grammar-rules.mp3" }
];

// Array of taunts for wrong capitalization
const capitalizationTaunts = [
    { text: "Capitals missing, genius.", audio: "taunt_capital-missing.mp3" },
    { text: "Lowercase? Really?", audio: "taunt_lowercase.mp3" },
    { text: "Still forgetting capitals.", audio: "taunt_still-forgetting.mp3" },
    { text: "That sentence looks like it needs a proper noun or two.", audio: "taunt_noun-or-two.mp3" }
];

// Check if the player input contains a question mark
function checkForPunctuation(input) {
  if (!input.includes('?')) {
    const responses = [
  	  { text: "Is that even a question?", audio: "taunt_is-that-a-question.mp3" },
  	  { text: "No question mark? Am I supposed to guess?", audio: "taunt_no-question-mark.mp3" },
  	  { text: "Questions usually end with a '?', genius.", audio: "taunt_question-mark-end.mp3" }
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
  return null; // No taunt if a question mark is present
}


// Simulate Joker typing
function simulateJokerTyping(reply, audioFile = null) {
    addMessage("...", 'joker');
    setTimeout(() => {
        const chat = document.getElementById('chat');
        chat.removeChild(chat.lastChild);
        addMessage(reply, 'joker');

        if (audioFile) {
            const audio = new Audio(audioFile);
            audio.play().catch(e => {
                console.warn("Audio playback failed:", e);
            });
        }

        if (Math.random() < 0.3) {
            const laugh = triggerRandomLaugh();
            setTimeout(() => {
                addMessage(laugh, 'joker');
                speakJoker(laugh); // Optional: TTS fallback
            }, 800);
        }
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
        // Combine all texts into one message
        const combinedText = tauntsCollected.map(t => t.text).join(' ');
        const audioFile = "audio/" + tauntsCollected[0].audio; // Play only the first audio
        return { text: combinedText, audio: audioFile };
    }

    return null; // No taunts
}


// Trigger a random laugh after each response (could also be triggered by a timer or event)
function triggerRandomLaugh() {
    return getRandomLaugh();  // Randomly select a laugh when needed
}
