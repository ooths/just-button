let toolboxIncrements = 0;
let playerIncrements = 1;

let currentPlayerIncrementsUpgrade = 0;
let maxPlayerIncrementsUpgrade = 10;

// Press the toolbox button to toggle the toolbox menu
TOOLBOX.click(function () {
  let toolboxMenuHidden = TOOLBOXMENU.hasClass("hidden");
  TOOLBOXMENU.toggleClass("hidden");
  SETTINGS.addClass("hidden");
  console.log("%cToggled toolbox menu.", "color:#3b82f7");
  BODY.toggleClass("hideContent", toolboxMenuHidden);
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
    playerIncrements += 10;
    window.numberCount -= 500;
    currentPlayerIncrementsUpgrade += 1;
    interfaceControl();
    PLAYERINCREMENTSTEXT.html(
      `(${currentPlayerIncrementsUpgrade}) Player increments: ${playerIncrements}`
    );
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
