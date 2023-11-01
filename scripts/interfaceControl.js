// Determines the number count and sets the appropriate interface
function interfaceControl() {
  if (numberCount >= 100) {
    TASKBAR.hide();
  }

  if (numberCount >= 200) {
    BUTTON1.hide();
  }

  if (numberCount >= 300) {
    BUTTON2.hide();
  }

  if (numberCount >= 400) {
    BUTTON3.hide();
  }

  if (numberCount >= 500) {
    TOOLBOX.hide();
  }

  if (numberCount === 600) {
    CHATBOXCONTAINER.show();
  }

  // Console messages
  if (numberCount === 100) {
    console.log("%cThe taskbar appeared.", "color:#3b82f7");
  }

  if (numberCount === 200) {
    console.log("%cThe first button appeared.", "color:#3b82f7");
  }

  if (numberCount === 300) {
    console.log("%cThe second button appeared.", "color:#3b82f7");
  }

  if (numberCount === 400) {
    console.log("%cThe third button appeared.", "color:#3b82f7");
  }

  if (numberCount === 500) {
    console.log("%cThe toolbox appeared.", "color:#3b82f7");
  }
}

// Runs the function whenever Herold is clicked
HEROLD.click(interfaceControl);
