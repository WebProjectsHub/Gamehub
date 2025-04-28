// jokerVoice.js

let availableVoices = [];

function preloadVoices() {
    if ('speechSynthesis' in window) {
        availableVoices = speechSynthesis.getVoices();

        // Some browsers need this event
        if (availableVoices.length === 0) {
            speechSynthesis.onvoiceschanged = () => {
                availableVoices = speechSynthesis.getVoices();
            };
        }
    }
}

// Call this as soon as the page loads
preloadVoices();

function speakJoker(text, mood = "creepy") {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        
        const jokerVoice = availableVoices.find(voice => 
            voice.name.toLowerCase().includes('evil') || 
            voice.name.toLowerCase().includes('dark') || 
            (voice.gender === 'male' && voice.lang.startsWith('en'))
        );

        if (jokerVoice) {
            utterance.voice = jokerVoice;
        }

        // Joker mood settings
        switch (mood) {
            case 'angry':
                utterance.pitch = 1.0;
                utterance.rate = 1.4;
                utterance.volume = 1.0;
                break;
            case 'sad':
                utterance.pitch = 0.6;
                utterance.rate = 0.7;
                utterance.volume = 0.7;
                break;
            case 'laughing':
                utterance.pitch = 1.3;
                utterance.rate = 1.6;
                utterance.volume = 1.0;
                break;
            case 'creepy':
            default:
                utterance.pitch = 0.7;
                utterance.rate = 0.85;
                utterance.volume = 1.0;
                break;
        }

        speechSynthesis.speak(utterance);
    }
}

