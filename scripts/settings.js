// Double click to toggle settings
TOGGLESETTINGS.on("dblclick", function () {
  let settingsHidden = SETTINGS.hasClass("hidden");
  SETTINGS.toggleClass("hidden");
  TOOLBOXMENU.addClass("hidden");
  console.log("%cToggled settings.", "color:#3b82f7");
  BODY.toggleClass("hideContent", settingsHidden);
});

// Makes close button functional
SETTINGSCLOSEBUTTON.click(function () {
  SETTINGS.addClass("hidden");
  BODY.removeClass("hideContent");
});

// Light mode and dark mode switch
$(".switch").on("change", function () {
  const CURRENTTHEME = $("html").attr("data-theme");
  let NEWTHEME;
  if (CURRENTTHEME === "dark") {
    NEWTHEME = "light";
    TOOLBOX.html("🧰");
  } else {
    NEWTHEME = "dark";
    TOOLBOX.html("⚒️");
  }

  $("html").attr("data-theme", NEWTHEME);

  // Console logs
  if (NEWTHEME === "dark") {
    console.log(
      `%cChanged theme to %c${NEWTHEME}%c.`,
      "color:#3b82f7",
      "background-color: black; color: #3b82f7;",
      "color:#3b82f7"
    );
  }

  if (NEWTHEME === "light") {
    console.log(
      `%cChanged theme to %c${NEWTHEME}%c.`,
      "color:#3b82f7",
      "background-color: white; color: #3b82f7;",
      "color:#3b82f7"
    );
  }
});
