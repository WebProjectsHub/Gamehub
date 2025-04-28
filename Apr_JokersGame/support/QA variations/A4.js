// Define conversation tree
const conversationTree = [
  {
    id: "start",
    keywords: ["who", "killer"],
    response: "The game’s not over yet, Detective... Want to guess again?",
    followUps: [
      {
        id: "killer_guess_daniel",
        keywords: ["daniel"],
        response: "Wrong. Daniel was a pawn, not the player."
      },
      {
        id: "killer_guess_joker",
        keywords: ["joker", "killer"],
        response: "Now you're thinking like me..."
      }
    ]
  },
  {
    id: "clue_stage",
    keywords: ["where", "clue"],
    response: "The stage is set. But not everything is meant to be seen under the spotlight.",
    followUps: [
      {
        id: "clue_spotlight_hide",
        keywords: ["spotlight", "hide"],
        response: "Exactly. It's what's *behind* the light you should fear."
      }
    ]
  },
  {
    id: "daniel_murder",
    keywords: ["why", "daniel"],
    response: "Some stories are too dangerous to tell. He found one."
  }
];

let currentConversation = conversationTree;

// Typing animation
function typeResponse(text, elementId, speed = 50) {
  const element = document.getElementById(elementId);
  element.innerHTML = ""; // use innerHTML
  let index = 0;
  function type() {
    if (index < text.length) {
      let char = text.charAt(index);
      // Replace space character with non-breaking space
      if (char === " ") {
        element.innerHTML += "&nbsp;";
      } else {
        element.innerHTML += char;
      }
      index++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Levenshtein Distance Calculator
function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
  for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i-1) === a.charAt(j-1)) {
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, matrix[i][j-1] + 1, matrix[i-1][j] + 1);
      }
    }
  }
  return matrix[b.length][a.length];
}

// Smarter keyword matching
function smartMatch(input, keywords) {
  const words = input.split(/\s+/);
  let matches = 0;
  for (const keyword of keywords) {
    for (const word of words) {
      const distance = levenshteinDistance(word, keyword);
      if (distance <= 2 || word.includes(keyword)) {
        matches++;
        break;
      }
    }
  }
  return matches === keywords.length;
}

// Analyze player's question
function analyzeQuestion() {
  const input = document.getElementById("questionInput").value.toLowerCase().trim();
  let matchedNode = null;

  for (const node of currentConversation) {
    if (smartMatch(input, node.keywords)) {
      matchedNode = node;
      break;
    }
  }

  if (matchedNode) {
    typeResponse(matchedNode.response, "response");
    currentConversation = matchedNode.followUps || conversationTree;
  } else {
    const fallbackResponses = [
      "You're not asking the right questions...",
      "Tick-tock, the game moves on.",
      "Try again, little detective.",
      "Even riddles get bored of wrong guesses."
    ];
    const randomMsg = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    typeResponse(randomMsg, "response");
  }

  document.getElementById("questionInput").value = "";
}

// Restart the conversation
function restartConversation() {
  currentConversation = conversationTree;
  document.getElementById("response").innerText = "The Joker chuckles... 'Starting over, are we?'";
}
