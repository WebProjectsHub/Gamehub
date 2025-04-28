// jokerVoice.js

// Speak text using browser's SpeechSynthesis
function speakJoker(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Try to find a creepy male voice, if available
        const voices = speechSynthesis.getVoices();
        const jokerVoice = voices.find(voice => 
            voice.name.toLowerCase().includes('evil') || 
            voice.name.toLowerCase().includes('dark') || 
            (voice.gender === 'male' && voice.lang.startsWith('en'))
        );

        if (jokerVoice) {
            utterance.voice = jokerVoice;
        }

        // Joker-style settings
        utterance.pitch = 0.7; // Deeper voice
        utterance.rate = 0.85; // Slightly slow for creepy effect
        utterance.volume = 1.0; // Max volume

        speechSynthesis.speak(utterance);
    } else {
        console.warn('Speech Synthesis not supported in this browser.');
    }
}
