// Keybinds
$(document).on("keydown", function (event) {
  switch (event.key) {
    // Increases number count by 25
    case "ArrowUp":
      numberCount += 25;
      COUNTER.html(numberCount);
      interfaceControl();
      messageControl();
      firstClick();
      console.log("%cIncreased by 25.", "color:#3b82f7");
      break;

    // Decreases number count by 25
    case "ArrowDown":
      numberCount = Math.max(numberCount - 25, 0);
      COUNTER.html(numberCount);
      interfaceControl();
      messageControl();
      firstClick();
      console.log("%cDecreased by 25.", "color:#3b82f7");
      break;

    // Reloads page
    case "r":
      location.reload();
      console.log("%cReloaded", "color:#3b82f7");
      break;
  }
});
