const MESSAGES = {
  500: "Oof.",
  510: "So much button pressing.",
  520: "Holy smokes, I can talk.",
  530: "I can dance!",
  540: "Okay. maybe I can't dance.",
  550: "I wonder what those symbols are.",
  560: "Do you know?",
  570: "Wait.",
  580: "Let me try something.",
  590: "Here we go.",
  600: "What the hell?",
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
  for (const messagesKey in MESSAGES) {
    if (window.numberCount >= messagesKey) {
      TEXTCONTENT.html(MESSAGES[messagesKey]);
    }
  }
}
