// Keybinds
$(document).on("keydown", function (event) {
  switch (event.key) {
    // Increases number count by 25
    case "ArrowUp":
      window.numberCount += 25;
      COUNTER.html(window.numberCount);
      interfaceControl();
      messageControl();
      break;

    // Decreases number count by 25
    case "ArrowDown":
      window.numberCount = Math.max(window.numberCount - 25, 0);
      COUNTER.html(window.numberCount);
      interfaceControl();
      messageControl();
      break;

    // Reloads page
    case "r":
      location.reload();
      break;
  }
});
