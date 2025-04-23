let currentConversation = conversationTree; // Start at root

function analyzeQuestion() {
  const input = document.getElementById("questionInput").value.toLowerCase().trim();
  const responseBox = document.getElementById("response");

  let matchedNode = null;

  for (const node of currentConversation) {
    const matched = node.keywords.every(keyword => input.includes(keyword));
    if (matched) {
      matchedNode = node;
      break;
    }
  }

  if (matchedNode) {
    responseBox.innerText = matchedNode.response;
    // Set follow-ups if they exist
    currentConversation = matchedNode.followUps || conversationTree; // Reset if no followUps
  } else {
    const fallbackResponses = [
      "You're not asking the right questions...",
      "Tick-tock, the game moves on.",
      "Try again, little detective.",
      "Even riddles get bored of wrong guesses."
    ];
    responseBox.innerText = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }
}
