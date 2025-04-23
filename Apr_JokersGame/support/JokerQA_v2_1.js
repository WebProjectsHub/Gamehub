const conversationTree = [
  {
    id: "start",
    keywords: ["who", "killer"],
    response: "The game’s not over yet, Detective... Want to guess again?",
    followUps: [
      {
        id: "killer_guess",
        keywords: ["daniel"],
        response: "Wrong. Daniel was a pawn, not the player.",
      },
      {
        id: "killer_guess",
        keywords: ["joker", "killer"],
        response: "Now you're thinking like me...",
      }
    ]
  },
  {
    id: "clue_stage",
    keywords: ["where", "clue"],
    response: "The stage is set. But not everything is meant to be seen under the spotlight.",
    followUps: [
      {
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
