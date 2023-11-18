// Double click to toggle settings
TOGGLESETTINGS.on("dblclick", function () {
  SETTINGS.toggleClass("hidden");
  console.log("%cToggled settings.", "color:#3b82f7");
  let settingsShown = !SETTINGS.hasClass("hidden");
  BODY.toggleClass("hideContent", settingsShown);
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
