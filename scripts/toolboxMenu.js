let toolboxIncrements = 0;
let playerIncrements = 1;

let toolboxMenuOpen = false;
let toolboxMenuOpenCount = 0;

let currentPlayerIncrementsUpgrade = 0;
let maxPlayerIncrementsUpgrade = 10;

// Press the toolbox button to open/close the toolbox menu
TOOLBOX.click(function () {
  if (toolboxMenuOpen) {
    closeToolbox();

    return;
  }
  openToolbox();
});

function openToolbox() {
  toolboxMenuOpen = true;
  toolboxMenuOpenCount += 1;

  TOOLBOXMENU.removeClass("hidden");
  SETTINGS.addClass("hidden");
  BODY.addClass("hideContent");
  console.log("%Opened toolbox menu.", "color:#3b82f7");
  messageControl();
}

function closeToolbox() {
  toolboxMenuOpen = false;

  TOOLBOXMENU.addClass("hidden");
  BODY.removeClass("hideContent");
  console.log("%Closed toolbox menu.", "color:#3b82f7");
  messageControl();
}

// Makes close button functional
TOOLBOXMENUCLOSEBUTTON.click(function () {
  closeToolbox();
});

// Increase toolbox increments
FEEDTOOLBOX.click(function () {
  if (window.numberCount > 1) {
    toolboxIncrements += 1;
    window.numberCount -= 1;
    interfaceControl();
    TOOLBOXINCREMENTSTEXT.html(`Toolbox increments: ${toolboxIncrements}`);
  } else {
    console.log(
      "%cYou need at least 2 increments to feed the toolbox.",
      "color:#3b82f7"
    );
  }
});

// Increase player increments
INCREASEINCREMENTS.click(function () {
  // Check if the number count is sufficient and the maximum upgrade hasn't been reached
  if (currentPlayerIncrementsUpgrade < 10 && window.numberCount >= 501) {
    playerIncrements += 1;
    window.numberCount -= 500;
    currentPlayerIncrementsUpgrade += 1;
    interfaceControl();
    PLAYERINCREMENTSTEXT.html(
      `(${currentPlayerIncrementsUpgrade}) Player increments: ${playerIncrements}`
    );
    if (window.numberCount <= 599) {
      TOOLBOXMENU.addClass("hidden");
    }
  } else {
    // If number count is insufficient
    if (window.numberCount < 501) {
      console.log(
        "%cThe button needs at least 501 numbers to increase player increments.",
        "color:#3b82f7"
      );
    }
    // If maximum upgrade is reached
    else {
      INCREASEINCREMENTS.css("textDecoration", "line-through");
      INCREASEINCREMENTSBUTTONTEXT.css("textDecoration", "line-through");
      PLAYERINCREMENTSTEXT.html(`(MAX) Player increments: ${playerIncrements}`);
      console.log("%cMax player increments upgrade reached.", "color:#3b82f7");
    }
  }
});
