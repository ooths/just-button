let loggingDone = {};

// Determines the number count and sets the appropriate interface
function interfaceControl() {
  COUNTER.html(window.numberCount);

  // Common actions for each range
  [BUTTON1, BUTTON2, BUTTON3, CHATBOXCONTAINER, TOOLBOX].forEach((element) =>
    element.addClass("hidden")
  );

  if (window.numberCount >= 600) {
    TOOLBOX.removeClass("hidden");
  }

  if (window.numberCount >= 500) {
    CHATBOXCONTAINER.show();
  }

  if (window.numberCount >= 400) {
    BUTTON3.removeClass("hidden");
  }

  if (window.numberCount >= 300) {
    BUTTON2.removeClass("hidden");
  }

  if (window.numberCount >= 200) {
    BUTTON1.removeClass("hidden");
  }

  if (window.numberCount >= 100) {
    TASKBAR.removeClass("hidden");
  }

  // Console messages
  const LOGS = {
    100: "The taskbar appeared.",
    200: "The first button appeared.",
    300: "The second button appeared.",
    400: "The third button appeared.",
    500: "The chatbox appeared.",
    600: "The toolbox appeared.",
  };

  for (const LOGGEDKEY in LOGS) {
    const THRESHOLD = parseInt(LOGGEDKEY);
    if (window.numberCount >= THRESHOLD && !loggingDone[LOGGEDKEY]) {
      console.log(`%c${LOGS[LOGGEDKEY]}`, "color:#3b82f7");
      loggingDone[LOGGEDKEY] = true;
    }
  }
}
