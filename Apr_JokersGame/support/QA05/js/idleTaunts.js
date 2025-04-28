// List of random taunts Joker says if player is idle
const idleTaunts = [
    "Cat got your tongue?",
    "Tick-tock, detective.",
    "Even silence has a sound.",
    "Lost for words? I expected more.",
    "The clock’s ticking. I'm getting bored."
];

let idleTimer = null;

// Start idle timer after each action
function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        const randomTaunt = idleTaunts[Math.floor(Math.random() * idleTaunts.length)];
        simulateJokerTyping(randomTaunt);
    }, 20000); // 20 seconds idle time
}
