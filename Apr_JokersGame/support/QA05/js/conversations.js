const conversations = [
    {
        question: "Who are you?",
        answers: ["I'm the question you should've asked years ago."]
    },
    {
        question: "Were you always like this?",
        answers: ["No one is born a monster. They are made."]
    },
    {
        question: "Do we know you?",
        answers: ["You knew me once. You just didn't notice."]
    },
    {
        question: "Why the Joker persona?",
        answers: ["Chaos needs a face. I chose one fitting."]
    },
    {
        question: "What is your real name?",
        answers: ["Names are masks. I burned mine long ago."]
    },
    {
        question: "Did we arrest you before?",
        answers: ["Your memory is as dusty as these archives."]
    },
    {
        question: "Does your name matter?",
        answers: ["It only matters when you scream it at the end."]
    },
    {
        question: "Were you someone we trusted?",
        answers: ["Trust is a fragile thing. Easily shattered."]
    },
    {
        question: "Why are you doing this?",
        answers: ["Because someone has to make you see."]
    },
    {
        question: "See what?",
        answers: ["The cracks beneath your perfect little world."]
    },
    {
        question: "Is this revenge?",
        answers: ["Revenge is just the beginning."]
    },
    {
        question: "Do you feel justified?",
        answers: ["Injustice demands answers. I’m simply the echo."]
    },
    {
        question: "Where is the next victim?",
	answers: ["Clocktower Library.  Hurry. Time is ticking."]
    },
    {
        question: "Who is the victim?",
        answers: ["Patience. You will know soon enough."]
    },
    {
        question: "How much time do we have?",
        answers: ["Less than your nerves can handle."]
    },
    {
        question: "Can we bargain for their life?",
        answers: ["Every bargain comes at a cost."]
    },
    {
        question: "Is there hope for them?",
        answers: ["Hope is a sharp blade. Handle it carefully."]
    },
    {
        question: "What do you want from us?",
        answers: ["Your pride. Your certainty. Your fall."]
    },
    {
        question: "Why target these people?",
        answers: ["Because you believe you’re untouchable."]
    },
    {
        question: "Do you want fame?",
        answers: ["Fame is for fools. I want the truth revealed."]
    },
    {
        question: "Is this a personal vendetta?",
        answers: ["Oh, it's very, very personal."]
    },
    {
        question: "How do we save them?",
        answers: ["Save them? Solve me first."]
    },
    {
        question: "Solve what exactly?",
        answers: ["The riddles, the lies, the little trails of blood."]
    },
    {
        question: "Give us a real clue.",
        answers: ["Real? Reality bends in my playground."]
    },
    {
        question: "Is there a shortcut?",
        answers: ["Only if you're willing to bleed for it."]
    },
    {
        question: "Why leave clues?",
        answers: ["Because simply killing is too easy."]
    },
    {
        question: "Is this a game to you?",
        answers: ["It's the only game that matters."]
    },
    {
        question: "Are you testing us?",
        answers: ["Tests reveal true character, or lack of it."]
    },
    {
        question: "Do you want us to win?",
        answers: ["Victory is just another shade of failure."]
    },
    {
        question: "What do the Joker cards mean?",
        answers: ["Each card is a key to your fate. And every key unlocks another door."]
    },
    {
        question: "What happens when we reach the last door?",
        answers: ["You don’t want to know what lies beyond."]
    },
    {
        question: "Are they part of the puzzle?",
        answers: ["Everything is a puzzle. You just haven’t seen it yet."]
    },
    {
        question: "Why give us a clue?",
        answers: ["Clues are the only way to make it interesting."]
    },
    {
        question: "How many victims are there?",
        answers: ["More than you'd care to count. Less than I desire."]
    },
    {
        question: "Are they all connected?",
        answers: ["Connection is an illusion. Just like you."]
    },
    {
        question: "How many more will there be?",
        answers: ["It depends on how long you play."]
    },
    {
        question: "What happens if we find them all?",
        answers: ["You’ll find the truth... if you survive."]
    },
    {
        question: "What is your endgame?",
        answers: ["My endgame is watching you unravel. How far will you go before you break?"]
    },
    {
        question: "Do you want us to break?",
        answers: ["I want to see you crack. It’s so much more fun."]
    },
    {
        question: "Do you plan to end it soon?",
        answers: ["Ending is just another beginning. For me."]
    },
    {
        question: "Are you trying to destroy us?",
        answers: ["Destroying? No. I'm just testing your limits."]
    },
    {
        question: "Why target the these people?",
        answers: ["They think they’re above the law. Time to bring them down."]
    },
    {
        question: "Do you blame all of us?",
        answers: ["Blame is for those who think they have time. I don’t care for it."]
    },
    {
        question: "Do you see yourself as a hero?",
        answers: ["A hero? No, detective. I’m your nightmare."]
    },
    {
        question: "Are you watching us?",
        answers: ["I’m always watching. I’m always listening."]
    },
    {
        question: "Where are you right now?",
        answers: ["Does it matter? I’m everywhere."]
    },
    {
        question: "Can we stop you?",
        answers: ["You think you can stop me? You can’t even catch up."]
    },
    {
        question: "Why not show yourself?",
        answers: ["The shadows are where I thrive. You should try it sometime."]
    },
    {
        question: "Are you in the building right now?",
        answers: ["Oh, I’m far closer than you think, detective."]
    },
    {
        question: "Are you close to the victim?",
        answers: ["They’re closer than you can imagine."]
    },
    {
        question: "Can we negotiate?",
        answers: ["Negotiate? I don’t do deals. I make the rules."]
    },
    {
        question: "Do you think we’ll ever catch you?",
        answers: ["Catch me? I’ve already won."]
    },
    {
        question: "Is there any way to stop this?",
        answers: ["The only way to stop it is to solve the puzzle. But you’ll never get there."]
    },
    {
        question: "Do you want to be caught?",
        answers: ["Caught? What’s the fun in being caught?"]
    },
    {
        question: "Why keep leaving clues?",
        answers: ["Clues make the game more interesting. But caught? Never."]
    },
    {
        question: "Are you taunting us?",
        answers: ["Oh, no. I’m just showing you your limits."]
    },
    {
        question: "Do you think you’ll escape forever?",
        answers: ["Escape is irrelevant. The question is, can you solve the puzzle before I’m done?"]
    },
    {
        question: "Why did you target the journalist?",
        answers: ["The journalist was a pawn in a bigger game. And they were too loud."]
    },
    {
        question: "What was their story about?",
        answers: ["A story that could’ve killed them, if only they knew."]
    },
    {
        question: "Did the journalist know you?",
        answers: ["They knew me more than they’d like to admit."]
    },
    {
        question: "Are you working alone?",
        answers: ["Alone? How boring. But yes, for now."]
    },
    {
        question: "Is there anyone helping you?",
        answers: ["Help is for the weak. I don’t need help."]
    },
    {
        question: "Do you have allies in the police?",
        answers: ["No. I don’t need them. But I’ve always been underestimated."]
    },
    {
        question: "How do you choose your victims?",
        answers: ["They brought harm to a person I love.  I will bring the world crashing down on them."]
    },
    {
        question: "The victims are not random?",
        answers: ["Nothing in this game is random."]
    },
    {
        question: "Do you have a pattern?",
        answers: ["The pattern is chaos, detective. You should try it sometime."]
    },
    {
        question: "How can we trust you’re telling the truth?",
        answers: ["Trust? It’s just a game of perception. What do you believe?"]
    },
    {
        question: "Are you being honest?",
        answers: ["Honesty is overrated. Lies are where the real fun begins."]
    },
    {
        question: "Is anything you say real?",
        answers: ["Reality is a concept you’ve yet to grasp."]
    },
    {
        question: "Where is the next clue?",
        answers: ["The next clue? It’s where you least expect it."]
    },
    {
        question: "Should we look for another card?",
        answers: ["Cards are for children. You need something sharper."]
    },
    {
        question: "Is there a way to stop you?",
        answers: ["Stop me? You’re too late for that."]
    },
    {
        question: "Can we stop the puzzle?",
        answers: ["You can’t stop something that’s already started."]
    },
    {
        question: "Will killing you end it?",
        answers: ["Killing me won’t solve anything. It only makes you part of the game."]
    },
    {
        question: "Is there any way to stop the next victim from dying?",
        answers: ["The clock ticks down. It’s your problem now."]
    },
    {
        question: "Are we just pawns in your game?",
        answers: ["Pawns? No. You’re more like players in a grander scheme."]
    },
    {
        question: "Is the game just for your amusement?",
        answers: ["Everything is for amusement. Even you."]
    },
    {
        question: "Why not tell us the truth?",
        answers: ["The truth is overrated. Lies are far more entertaining."]
    },
    {
        question: "Are you watching us suffer?",
        answers: ["Suffering? Oh no. I’m watching you learn."]
    },
    {
        question: "Did you plan this for months?",
        answers: ["Months? This has been in the making for years."]
    },
    {
        question: "What made you start?",
        answers: ["People like you. People who think they’re untouchable."]
    },
    {
        question: "How long have you been watching us?",
        answers: ["Long enough to see your weaknesses."]
    },
    {
        question: "What happened to make you snap?",
        answers: ["I didn’t snap. I evolved."]
    },
    {
        question: "Are we too late?",
        answers: ["Late? Time is just a measurement. It’s never too late for you to play."]
    },
    {
        question: "How much time do we have left?",
        answers: ["Time’s up when the puzzle is solved. How long will you last?"]
    },
    {
        question: "Will we be able to save the victim?",
        answers: ["The only way to save them is to solve it before it’s too late."]
    },
    {
        question: "Is there any chance for a happy ending?",
        answers: ["Happiness is a fleeting thing. Let’s see if you can find it."]
    },
    {
        question: "Why leave riddles instead of just killing?",
        answers: ["Riddles are the key to understanding, detective. Killing is too easy."]
    },
    {
        question: "Do you want us to suffer?",
        answers: ["Suffering is for the weak. I want you to evolve."]
    },
    {
        question: "Why not just end it quickly?",
        answers: ["Quick endings are boring. Puzzles are far more interesting."]
    },
    {
        question: "Are you afraid of death?",
        answers: ["Death is inevitable. But let’s see if you can escape it."]
    },
    {
        question: "Is this personal?",
        answers: ["Personal? It’s always personal for me. But not in the way you think."]
    },
    {
        question: "Did we do something to you?",
        answers: ["Oh, you’ve done plenty. But you don’t know it yet."]
    },
    {
        question: "Why target us specifically?",
        answers: ["You’re just the ones who caught my attention. That’s all."]
    },
    {
        question: "Is this about revenge?",
        answers: ["Revenge? It’s bigger than that. Much bigger."]
    },
    {
        question: "Were you someone we once knew?",
        answers: ["Maybe you knew me. Maybe you didn’t. Does it really matter?"]
    },
    {
        question: "Were we friends?",
        answers: ["Friends? No. I never had friends. Just players."]
    },
    {
        question: "Did you once work with us?",
        answers: ["I worked with no one. I was always alone."]
    },
    {
        question: "Are you trying to make us remember?",
        answers: ["Remembering is a dangerous game. I suggest you forget."]
    },
    {
        question: "Is there a way to end this peacefully?",
        answers: ["Peace is just a lie. There’s no peace in a game like this."]
    },
    {
        question: "What if we cooperate with you?",
        answers: ["Cooperation is futile. I’ll only win in the end."]
    },
    {
        question: "Is it possible to stop without anyone getting hurt?",
        answers: ["You’re already hurt, whether you see it or not."]
    },
    {
        question: "Do you want us to fight back?",
        answers: ["Fight back if you must. It won’t change the outcome."]
    },
    {
        question: "Are you playing by rules?",
        answers: ["Rules? There are no rules. Just pieces on the board."]
    },
    {
        question: "Do you have your own rules?",
        answers: ["I make the rules as I go along. There are no limits."]
    },
    {
        question: "What happens if we break the rules?",
        answers: ["Breaking the rules? That’s what I’m waiting for."]
    },
    {
        question: "Do you follow any code?",
        answers: ["Code is a crutch for those who can’t think for themselves."]
    },
    {
        question: "What happens to those who refuse to play?",
        answers: ["Refuse to play? Then you’ll miss the fun."]
    },
    {
        question: "Do you punish those who don’t participate?",
        answers: ["Punish? No. I just move on to the next player."]
    },
    {
        question: "Can we walk away from this?",
        answers: ["You can walk away, but the game won’t stop."]
    },
    {
        question: "Do you let anyone quit?",
        answers: ["Quitting isn’t an option. The game plays you."]
    },
    {
        question: "What is the significance of the Joker card?",
        answers: ["The card is a reminder. A reminder that everything can be turned on its head."]
    },
    {
        question: "Why leave it at the scene?",
        answers: ["Because it’s my mark. My signature."]
    },
    {
        question: "What does the card represent?",
        answers: ["It represents chaos. And you’re dancing in it."]
    },
    {
        question: ["Can you explain?", "Do you care to explain?"],
        answers: ["You must be kidding me."]
    },
    {
        question: "What’s so special about this card?",
        answers: ["Special? It’s the beginning. Not the end."]
    }
];
