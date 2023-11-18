// Variables
window.numberCount = 0;
const CHATBOXCONTAINER = $("#chatboxContainer");
const TEXTCONTENT = $("#textContent");
const TASKBAR = $("#taskbar");
const HEROLD = $("#herold");
const COUNTER = $("#counter");
const TOGGLESETTINGS = $("#toggleSettings");
const SETTINGS = $("#settings");
const TOOLBOX = $("#toolbox");
const BUTTON1 = $("#button1");
const BUTTON2 = $("#button2");
const BUTTON3 = $("#button3");
const BODY = $("body");

// Runs the functions on Herold click
HEROLD.click(function () {
  window.numberCount += 1;
  COUNTER.html(window.numberCount);
  messageControl();
  interfaceControl();
  firstClick();
});
