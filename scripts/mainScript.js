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
const TOOLBOXMENU = $("#toolboxMenu");
const FEEDTOOLBOX = $("#feedToolbox");
const INCREASEINCREMENTS = $("#increaseIncrements");
const PLAYERINCREMENTSTEXT = $("#playerIncrementsText");
const TOOLBOXINCREMENTSTEXT = $("#toolboxIncrementsText");
const INCREASEINCREMENTSBUTTONTEXT = $("#increaseIncrementsButtonText");
const TOOLBOXMENUCLOSEBUTTON = $("#toolboxMenuCloseButton");
const SETTINGSCLOSEBUTTON = $("#settingsCloseButton");

// Runs the functions on Herold click
HEROLD.click(function () {
  window.numberCount += playerIncrements;
  messageControl();
  interfaceControl();
  firstClick();
});
