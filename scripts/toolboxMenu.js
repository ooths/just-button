let toolboxIncrements = 0;
let playerIncrements = 1;

// Press the toolbox button to toggle the toolbox menu
TOOLBOX.click(function () {
  let toolboxMenuHidden = TOOLBOXMENU.hasClass("hidden");
  TOOLBOXMENU.toggleClass("hidden");
  SETTINGS.addClass("hidden");
  console.log("%cToggled toolbox menu.", "color:#3b82f7");
  BODY.toggleClass("hideContent", toolboxMenuHidden);
});

// Toolbox increments
FEEDTOOLBOX.click(function () {
  toolboxIncrements += 1;
  
  TOOLBOXINCREMENTSTEXT.html(`Player increments: ${toolboxIncrements}`);
});
