// wrongQuestionTaunts.js

// Random taunts for wrong or confusing questions
const wrongQuestionResponses = [
    "Are you even trying, detective?",
    "You're lost... and it shows.",
    "Maybe ask a better question next time.",
    "Your confusion is delicious.",
    "Is that supposed to make sense?",
    "You might want to rethink that one.",
    "What kind of question is that?",
    "And you call yourself a detective?",
    "Just kill me now!",
    "Keep guessing. It's entertaining."
];

// Pick a random wrong question taunt
function getWrongQuestionResponse() {
    const randomIndex = Math.floor(Math.random() * wrongQuestionResponses.length);
    return wrongQuestionResponses[randomIndex];
}
