const conversations = [
    {
        question: "Who are you?",
        answers: ["I'm the question you should've asked years ago."],
	audio: "01.mp3" 
    },
    {
        question: "Were you always like this?",
        answers: ["No one is born a monster. They are made."],
	audio: "02.mp3"
    },
    {
        question: "Do we know you?",
        answers: ["You knew me once. You just didn't notice."],
	audio: "03.mp3"
    },
    {
        question: "Why the Joker persona?",
        answers: ["Chaos needs a face. I chose one fitting."],
	audio: "04.mp3"
    },
    {
        question: "What is your real name?",
        answers: ["Names are masks. I burned mine long ago."],
	audio: "05.mp3"
    },
    {
        question: "Did we arrest you before?",
        answers: ["Your memory is as dusty as these archives."],
	audio: "06.mp3"
    },
    {
        question: "Does your name matter?",
        answers: ["It only matters when you scream it at the end."],
	audio: "07.mp3"
    },
    {
        question: "Were you someone we trusted?",
        answers: ["Trust is a fragile thing. Easily shattered."],
	audio: "08.mp3"
    },
    {
        question: "Why are you doing this?",
        answers: ["Because someone has to make you see."],
	audio: "09.mp3"
    },
    {
        question: "See what?",
        answers: ["The cracks beneath your perfect little world."],
	audio: "10.mp3"
    },
    {
        question: "Is this revenge?",
        answers: ["Revenge is just the beginning."],
	audio: "11.mp3"
    },
    {
        question: "Do you feel justified?",
        answers: ["Injustice demands answers. I’m simply the echo."],
	audio: "12.mp3"
    },
    {
        question: "Where is the next victim?",
	answers: ["Clocktower Library.  Hurry. Time is ticking."],
	audio: "13.mp3"
    },
    {
        question: "Who is the victim?",
        answers: ["Patience. You will know soon enough."],
	audio: "14.mp3"
    },
    {
        question: "How much time do we have?",
        answers: ["Less than your nerves can handle."],
	audio: "15.mp3"
    },
    {
        question: "Can we bargain for their life?",
        answers: ["Every bargain comes at a cost."],
	audio: "16.mp3"
    },
    {
        question: "Is there hope for them?",
        answers: ["Hope is a sharp blade. Handle it carefully."],
	audio: "17.mp3"
    },
    {
        question: "What do you want from us?",
        answers: ["Your pride. Your certainty. Your fall."],
	audio: "18.mp3"
    },
    {
        question: "Why target these people?",
        answers: ["Because you believe you’re untouchable."],
	audio: "19.mp3"
    },
    {
        question: "Do you want fame?",
        answers: ["Fame is for fools. I want the truth revealed."],
	audio: "20.mp3"
    },
    {
        question: "Is this a personal vendetta?",
        answers: ["Oh, it's very, very personal."],
	audio: "21.mp3"
    },
    {
        question: "How do we save them?",
        answers: ["Save them? Solve me first."],
	audio: "22.mp3"
    },
    {
        question: "Solve what exactly?",
        answers: ["The riddles, the lies, the little trails of blood."],
	audio: "23.mp3"
    },
    {
        question: "Give us a real clue.",
        answers: ["Real? Reality bends in my playground."],
	audio: "24.mp3"
    },
    {
        question: "Is there a shortcut?",
        answers: ["Only if you're willing to bleed for it."],
	audio: "25.mp3"
    },
    {
        question: "Why leave clues?",
        answers: ["Because simply killing is too easy."],
	audio: "26.mp3"
    },
    {
        question: "Is this a game to you?",
        answers: ["It's the only game that matters."],
	audio: "27.mp3"
    },
    {
        question: "Are you testing us?",
        answers: ["Tests reveal true character, or lack of it."],
	audio: "28.mp3"
    },
    {
        question: "Do you want us to win?",
        answers: ["Victory is just another shade of failure."],
	audio: "29.mp3"
    },
    {
        question: "What do the Joker cards mean?",
        answers: ["Each card is a key to your fate. And every key unlocks another door."],
	audio: "30.mp3"
    },
    {
        question: "What happens when we reach the last door?",
        answers: ["You don’t want to know what lies beyond."],
	audio: "31.mp3"
    },
    {
        question: "Are they part of the puzzle?",
        answers: ["Everything is a puzzle. You just haven’t seen it yet."],
	audio: "32.mp3"
    },
    {
        question: "Why give us a clue?",
        answers: ["Clues are the only way to make it interesting."],
	audio: "33.mp3"
    },
    {
        question: "How many victims are there?",
        answers: ["More than you'd care to count. Less than I desire."],
	audio: "34.mp3"
    },
    {
        question: "Are they all connected?",
        answers: ["Connection is an illusion. Just like you."],
	audio: "35.mp3"
    },
    {
        question: "How many more will there be?",
        answers: ["It depends on how long you play."],
	audio: "36.mp3"
    },
    {
        question: "What happens if we find them all?",
        answers: ["You’ll find the truth... if you survive."],
	audio: "37.mp3"
    },
    {
        question: "What is your endgame?",
        answers: ["My endgame is watching you unravel. How far will you go before you break?"],
	audio: "38.mp3"
    },
    {
        question: "Do you want us to break?",
        answers: ["I want to see you crack. It’s so much more fun."],
	audio: "39.mp3"
    },
    {
        question: "Do you plan to end it soon?",
        answers: ["Ending is just another beginning. For me."],
	audio: "40.mp3"
    },
    {
        question: "Are you trying to destroy us?",
        answers: ["Destroying? No. I'm just testing your limits."],
	audio: "41.mp3"
    },
    {
        question: "Why target the these people?",
        answers: ["They think they’re above the law. Time to bring them down."],
	audio: "42.mp3"
    },
    {
        question: "Do you blame all of us?",
        answers: ["Blame is for those who think they have time. I don’t care for it."],
	audio: "43.mp3"
    },
    {
        question: "Do you see yourself as a hero?",
        answers: ["A hero? No, detective. I’m your nightmare."],
	audio: "44.mp3"
    },
    {
        question: "Are you watching us?",
        answers: ["I’m always watching. I’m always listening."],
	audio: "45.mp3"
    },
    {
        question: "Where are you right now?",
        answers: ["Does it even matter, huh? I’m everywhere."],
	audio: "46.mp3"
    },
    {
        question: "Can we stop you?",
        answers: ["You think you can stop me? You can’t even catch up."],
	audio: "47.mp3"
    },
    {
        question: "Why not show yourself?",
        answers: ["The shadows are where I thrive. You should try it sometime."],
	audio: "48.mp3"
    },
    {
        question: "Are you in the building right now?",
        answers: ["Oh, I’m far closer than you think, detective."],
	audio: "49.mp3"
    },
    {
        question: "Are you close to the victim?",
        answers: ["They’re closer than you can imagine."],
	audio: "50.mp3"
    },
    {
        question: "Can we negotiate?",
        answers: ["Negotiate? I don’t do deals. I make the rules."],
	audio: "51.mp3"
    },
    {
        question: "Do you think we’ll ever catch you?",
        answers: ["Catch me? I’ve already won."],
	audio: "52.mp3"
    },
    {
        question: "Is there any way to stop this?",
        answers: ["The only way to stop it is to solve the puzzle. But you’ll never get there."],
	audio: "53.mp3"
    },
    {
        question: "Do you want to be caught?",
        answers: ["Caught? What’s the fun in being caught?"],
	audio: "54.mp3"
    },
    {
        question: "Why keep leaving clues?",
        answers: ["Clues make the game more interesting. But caught? Never."],
	audio: "55.mp3"
    },
    {
        question: "Are you taunting us?",
        answers: ["Oh, no. I’m just showing you your limits."],
	audio: "56.mp3"
    },
    {
        question: "Do you think you’ll escape forever?",
        answers: ["Escape is irrelevant. The question is, can you solve the puzzle before I’m done?"],
	audio: "57.mp3"
    },
    {
        question: "Why did you target the journalist?",
        answers: ["The journalist was a pawn in a bigger game."],
	audio: "58.mp3"
    },
    {
        question: "What was their story about?",
        answers: ["A story that could’ve killed them, if only they knew."],
	audio: "56.mp3"
    },
    {
        question: "Did the journalist know you?",
        answers: ["They knew me more than they’d like to admit."],
	audio: "60.mp3"
    },
    {
        question: "Are you working alone?",
        answers: ["Alone? How boring. But yes, for now."],
	audio: "61.mp3"
    },
    {
        question: "Is there anyone helping you?",
        answers: ["Help is for the weak. I don’t need help."],
	audio: "62.mp3"
    },
    {
        question: "Do you have allies in the police?",
        answers: ["No. I don’t need them. But I’ve always been underestimated."],
	audio: "63.mp3"
    },
    {
        question: "How do you choose your victims?",
        answers: ["They harmed someone I love. And so, I will bring the world crashing down on them."],
	audio: "64.mp3"
    },
    {
        question: "The victims are not random?",
        answers: ["Nothing in this game is random."],
	audio: "65.mp3"
    },
    {
        question: "Do you have a pattern?",
        answers: ["The pattern is chaos, detective. You should try it sometime."],
	audio: "66.mp3"
    },
    {
        question: "How can we trust you’re telling the truth?",
        answers: ["Trust? It’s just a game of perception. What do you believe?"],
	audio: "67.mp3"
    },
    {
        question: "Are you being honest?",
        answers: ["Honesty is overrated. Lies are where the real fun begins."],
	audio: "68.mp3"
    },
    {
        question: "Is anything you say real?",
        answers: ["Reality is a concept you’ve yet to grasp."],
	audio: "69.mp3"
    },
    {
        question: "Where is the next clue?",
        answers: ["The next clue? It’s where you least expect it."],
	audio: "70.mp3"
    },
    {
        question: "Should we look for another card?",
        answers: ["Cards are for children. You need something sharper."],
	audio: "71.mp3"
    },
    {
        question: "Is there a way to stop you?",
        answers: ["Stop me? You’re too late for that."],
	audio: "72.mp3"
    },
    {
        question: "Can we stop the puzzle?",
        answers: ["You can’t stop something that’s already started."],
	audio: "73.mp3"
    },
    {
        question: "Will killing you end it?",
        answers: ["Killing me won’t solve anything. It only makes you part of the game."],
	audio: "74.mp3"
    },
    {
        question: "Is there any way to stop the next victim from dying?",
        answers: ["The clock ticks down. It’s your problem now."],
	audio: "75.mp3"
    },
    {
        question: "Are we just pawns in your game?",
        answers: ["Pawns? No. You’re more like players in a grander scheme."],
	audio: "76.mp3"
    },
    {
        question: "Is the game just for your amusement?",
        answers: ["Everything is for amusement. Even you."],
	audio: "77.mp3"
    },
    {
        question: "Why not tell us the truth?",
        answers: ["The truth is overrated. Lies are far more entertaining."],
	audio: "78.mp3"
    },
    {
        question: "Are you watching us suffer?",
        answers: ["Suffering? Oh no. I’m watching you learn."],
	audio: "79.mp3"
    },
    {
        question: "Did you plan this for months?",
        answers: ["Months? This has been in the making for FIVE years."],
	audio: "80.mp3"
    },
    {
        question: "What made you start?",
        answers: ["People like you. People who think they’re untouchable."],
	audio: "81.mp3"
    },
    {
        question: "How long have you been watching us?",
        answers: ["Long enough to see your weaknesses."],
	audio: "82.mp3"
    },
    {
        question: "What happened to make you snap?",
        answers: ["I didn’t snap. I evolved."],
	audio: "83.mp3"
    },
    {
        question: "Are we too late?",
        answers: ["Late? Time is just a measurement. It’s never too late for you to play."],
	audio: "84.mp3"
    },
    {
        question: "How much time do we have left?",
        answers: ["Time’s up when the puzzle is solved. How long will you last?"],
	audio: "85.mp3"
    },
    {
        question: "Will we be able to save the victim?",
        answers: ["The only way to save them is to solve it before it’s too late."],
	audio: "86.mp3"
    },
    {
        question: "Is there any chance for a happy ending?",
        answers: ["Happiness is a fleeting thing. Let’s see if you can find it."],
	audio: "87.mp3"
    },
    {
        question: "Why leave riddles instead of just killing?",
        answers: ["Riddles are the key to understanding, detective. Killing is too easy."],
	audio: "88.mp3"
    },
    {
        question: "Do you want us to suffer?",
        answers: ["Suffering is for the weak. I want you to evolve."],
	audio: "89.mp3"
    },
    {
        question: "Why not just end it quickly?",
        answers: ["Quick endings are boring. Puzzles are far more interesting."],
	audio: "90.mp3"
    },
    {
        question: "Are you afraid of death?",
        answers: ["Death is inevitable. But let’s see if you can escape it."],
	audio: "91.mp3"
    },
    {
        question: "Is this personal?",
        answers: ["Personal? It’s always personal for me. But not in the way you think."],
	audio: "92.mp3"
    },
    {
        question: "Did we do something to you?",
        answers: ["Oh, you’ve done plenty. But you don’t know it yet."],
	audio: "93.mp3"
    },
    {
        question: "Why target us specifically?",
        answers: ["You’re just the ones who caught my attention. That’s all."],
	audio: "94.mp3"
    },
    {
        question: "Is this about revenge?",
        answers: ["Revenge? It’s bigger than that. Much bigger."],
	audio: "95.mp3"
    },
    {
        question: "Were you someone we once knew?",
        answers: ["Maybe you knew me. Maybe you didn’t. Does it really matter?"],
	audio: "96.mp3"
    },
    {
        question: "Were we friends?",
        answers: ["Friends? No. I never had friends. Just players."],
	audio: "97.mp3"
    },
    {
        question: "Did you once work with us?",
        answers: ["I worked with no one. I was always alone."],
	audio: "98.mp3"
    },
    {
        question: "Are you trying to make us remember?",
        answers: ["Remembering is a dangerous game. I suggest you forget."],
	audio: "99.mp3"
    },
    {
        question: "Is there a way to end this peacefully?",
        answers: ["Peace is just a lie. There’s no peace in a game like this."],
	audio: "100.mp3"
    },
    {
        question: "What if we cooperate with you?",
        answers: ["Cooperation is futile. I’ll only win in the end."],
	audio: "101.mp3"
    },
    {
        question: "Is it possible to stop without anyone getting hurt?",
        answers: ["You’re already hurt, whether you see it or not."],
	audio: "102.mp3"
    },
    {
        question: "Do you want us to fight back?",
        answers: ["Fight back if you must. It won’t change the outcome."],
	audio: "103.mp3"
    },
    {
        question: "Are you playing by rules?",
        answers: ["Rules? There are no rules. Just pieces on the board."],
	audio: "104.mp3"
    },
    {
        question: "Do you have your own rules?",
        answers: ["I make the rules as I go along. There are no limits."],
	audio: "105.mp3"
    },
    {
        question: "What happens if we break the rules?",
        answers: ["Breaking the rules? That’s what I’m waiting for."],
	audio: "106.mp3"
    },
    {
        question: "Do you follow any code?",
        answers: ["Code is a crutch for those who can’t think for themselves."],
	audio: "107.mp3"
    },
    {
        question: "What happens to those who refuse to play?",
        answers: ["Refuse to play? Then you’ll miss the fun."],
	audio: "108.mp3"
    },
    {
        question: "Do you punish those who don’t participate?",
        answers: ["Punish? No. I just move on to the next player."],
	audio: "109.mp3"
    },
    {
        question: "Can we walk away from this?",
        answers: ["Walk away, huh? But listen, the game? It won't stop."],
	audio: "110.mp3"
    },
    {
        question: "Do you let anyone quit?",
        answers: ["Quitting isn’t an option. The game plays you."],
	audio: "111.mp3"
    },
    {
        question: "What is the significance of the Joker card?",
        answers: ["The card is a reminder. A reminder that everything can be turned on its head."],
	audio: "112.mp3"
    },
    {
        question: "Why leave it at the scene?",
        answers: ["Because it’s my mark. My signature."],
	audio: "113.mp3"
    },
    {
        question: "What does the card represent?",
        answers: ["It represents chaos. And you’re dancing in it."],
	audio: "114.mp3"
    },
    {
        question: ["Can you explain?", "Do you care to explain?"],
        answers: ["You must be kidding me."],
	audio: "115.mp3"
    },
    {
        question: "What’s so special about this card?",
        answers: ["Special? It’s the beginning. Not the end."],
	audio: "116.mp3"
    }
];
