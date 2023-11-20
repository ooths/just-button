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
  if (playerIncrements > 1) {
    toolboxIncrements += 1;
    playerIncrements -= 1;
    interfaceControl();
    TOOLBOXINCREMENTSTEXT.html(`Player increments: ${toolboxIncrements}`);
    PLAYERINCREMENTSTEXT.html(
      `(${currentPlayerIncrementsUpgrade}) Player increments: ${playerIncrements}`
    );
  } else {
    console.log(
      "%cYou need at least 2 increments to feed the toolbox.",
      "color:#3b82f7"
    );
  }
});

// Increase player increments
INCREASEINCREMENTS.click(function () {
  if (currentPlayerIncrementsUpgrade < 10 && window.numberCount >= 501) {
    playerIncrements += 10;
    window.numberCount -= 500;
    currentPlayerIncrementsUpgrade += 1;
    interfaceControl();
    PLAYERINCREMENTSTEXT.html(
      `(${currentPlayerIncrementsUpgrade}) Player increments: ${playerIncrements}`
    );
  } else {
    if (window.numberCount < 501) {
      console.log(
        "%cYou need at least 501 increments to increase player increments.",
        "color:#3b82f7"
      );
    } else {
      INCREASEINCREMENTS.css("textDecoration", "line-through");
      INCREASEINCREMENTSBUTTONTEXT.css("textDecoration", "line-through");
      PLAYERINCREMENTSTEXT.html(`(MAX) Player increments: ${playerIncrements}`);
      console.log("%cMax player increments upgrade reached.", "color:#3b82f7");
    }
  }
});
