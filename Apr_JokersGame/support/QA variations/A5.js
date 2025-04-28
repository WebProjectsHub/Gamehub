const questions = [
  {
    main: "Who are you?",
    jokerAnswer: "I'm the question you should've asked years ago.",
    branches: [
      { question: "Were you always like this?", jokerAnswer: "No one is born a monster. They are made." },
      { question: "Do we know you?", jokerAnswer: "You knew me once. You just didn't notice." },
      { question: "Why the Joker persona?", jokerAnswer: "Chaos needs a face. I chose one fitting." }
    ]
  },
  {
    main: "What is your real name?",
    jokerAnswer: "Names are masks. I burned mine long ago.",
    branches: [
      { question: "Did we arrest you before?", jokerAnswer: "Your memory is as dusty as these archives." },
      { question: "Does your name matter?", jokerAnswer: "It only matters when you scream it at the end." },
      { question: "Were you someone we trusted?", jokerAnswer: "Trust is a fragile thing. Easily shattered." }
    ]
  },
  // ... CONTINUING FOR ALL 32
];

let currentBranch = null;

function processInput() {
  const input = document.getElementById('playerInput').value.toLowerCase();
  const chat = document.getElementById('chat');
  
  chat.innerHTML += `<p class="detective"><strong>Detective:</strong> ${input}</p>`;
  
  if (currentBranch) {
    const branch = currentBranch.branches.find(b => input.includes(b.question.toLowerCase()));
    if (branch) {
      chat.innerHTML += `<p class="joker"><strong>The Joker:</strong> ${branch.jokerAnswer}</p>`;
      currentBranch = null; // Reset branch
    } else {
      chat.innerHTML += `<p class="joker"><strong>The Joker:</strong> "Wrong move, detective. Choose carefully."</p>`;
    }
  } else {
    const q = questions.find(q => input.includes(q.main.toLowerCase()));
    if (q) {
      chat.innerHTML += `<p class="joker"><strong>The Joker:</strong> ${q.jokerAnswer}</p>`;
      // Show branch options to the player
      q.branches.forEach((branch, index) => {
        chat.innerHTML += `<p class="joker">[${index+1}] ${branch.question}</p>`;
      });
      currentBranch = q;
    } else {
      chat.innerHTML += `<p class="joker"><strong>The Joker:</strong> "Tsk, tsk. Try harder, detective."</p>`;
    }
  }
  
  document.getElementById('playerInput').value = '';
  chat.scrollTop = chat.scrollHeight;
}
