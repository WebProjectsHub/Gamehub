// List of random taunts Joker says if player is idle
const idleTaunts = [
    { text: "Cat got your tongue?", audio: "idle_cat_got_your_tongue.mp3" },
    { text: "Tick-tock, detective.", audio: "idle_tick_tock.mp3" },
    { text: "Even silence has a sound.", audio: "idle_silence.mp3" },
    { text: "Lost for words? I expected more.", audio: "idle_lost_for_words.mp3" },
    { text: "Tick-tock. Tick-tock. I am getting so very bored.", audio: "idle_clock_ticking.mp3" }
];

let idleTimer = null;

// Start idle timer after each action
function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        const taunt = idleTaunts[Math.floor(Math.random() * idleTaunts.length)];
        simulateJokerTyping(taunt.text, taunt.audio);  // Pass both text and audio
    }, 20000); // 20 seconds idle time
}
