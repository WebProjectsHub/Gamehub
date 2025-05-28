// wrongQuestionTaunts.js

// Random taunts for wrong or confusing questions
const wrongQuestionResponses = [
    { text: "Are you even trying, detective?",   audio: "./audio/wrongQ_even-trying.mp3" },
    { text: "You're lost... and it shows.",   audio: "./audio/wrongQ_your-lost.mp3" },
    { text: "Maybe ask a better question next time.",   audio: "./audio/wrongQ_ask-better.mp3" },
    { text: "Your confusion is delicious.",   audio: "./audio/wrongQ_confusion.mp3" },
    { text: "Is that supposed to make sense?",   audio: "./audio/wrongQ_make-sense.mp3" },
    { text: "You might want to rethink that one.",   audio: "./audio/wrongQ_rethink.mp3" },
    { text: "What kind of question is that?",   audio: "./audio/wrongQ_what-kind.mp3" },
    { text: "And you call yourself a detective?",   audio: "./audio/wrongQ_call-yourself.mp3" },
    { text: "Just kill me now!",   audio: "./audio/wrongQ_kill-now.mp3" },
    { text: "Keep guessing. It's entertaining.",   audio: "./audio/wrongQ_keep-guessing.mp3" }
];

// Pick a random wrong question taunt and play its audio
function getWrongQuestionResponse() {
    const randomIndex = Math.floor(Math.random() * wrongQuestionResponses.length);
    const response = wrongQuestionResponses[randomIndex];
    playAudio(response.audio);
    return response.text;
}