const MESSAGES = {
  500: "Damn.",
  510: "So much button pressing.",
  520: "Woah, I can talk.",
  530: "I can dance!",
  540: "Okay. maybe I can't dance.",
  550: "I wonder what those symbols are.",
  560: "Do you know?",
  570: "Wait.",
  580: "Let me try something.",
  590: "Here we go.",
  600: "What the hell?",
  610: "What is that thing?",
  620: "You can tap on it, I guess.",
  630: "I mean, if you haven't already.",
  640: "It's kinda hard to tell, to be honest.",
  650: "But, if you haven't yet.",
  660: "You should.",
  670: "No, really.",
  680: "Go on.",
  690: "Tap away.",
  700: "Isn't this like your job or something?",
  710: "Alright, here is a test.",
  720: "I'll stop talking unless you open it.",
  730: "Three, two, one.",
  740: "Were there mysteries inside?",
  750: "There were.",
  760: "That's cool.",
  770: "Wait, what?",
  780: "Have we met before?",
  790: "So that means...",
  800: "Time is cynical.",
  810: "Or...",
  820: "That the toolbox can mess with the fabric of time.",
  830: "Is time relative?",
  840: "Nah, what idiot came up with that kind of idea?",
  850: "I know what time is.",
  860: "I can keep track, see?",
};

const UPDATEDMESSAGES = {
  770: "An upgrade?",
  780: "Sounds like you should buy it.",
  790: "Like, pretty sure that's the point of all this.",
};

if (window.numberCount === 0) {
  TEXTCONTENT.html("Double click the top of the screen to toggle settings.");
}

// Removes the chatbox and clears message
function firstClick() {
  if (window.numberCount < 100) {
    CHATBOXCONTAINER.hide();
    TEXTCONTENT.html("");
  }
}

// Determines the number count and sets the appropriate message
function messageControl() {
  if (
    window.numberCount > 769 &&
    window.numberCount < 800 &&
    toolboxMenuOpenCount === 1
  ) {
    for (const UPDATEDMESSAGESKEY in MESSAGES) {
      if (window.numberCount >= UPDATEDMESSAGESKEY) {
        TEXTCONTENT.html(UPDATEDMESSAGES[UPDATEDMESSAGESKEY]);
      }
    }
    return;
  }

  if (window.numberCount > 729 && !toolboxMenuOpenCount) {
    TEXTCONTENT.html("");

    return;
  }

  if (window.numberCount > 799 && currentPlayerIncrementsUpgrade === 0) {
    TEXTCONTENT.html("");

    return;
  }

  for (const MESSAGESKEY in MESSAGES) {
    if (window.numberCount >= MESSAGESKEY) {
      TEXTCONTENT.html(MESSAGES[MESSAGESKEY]);
    }
  }
}
