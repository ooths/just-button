// Variables
let numberCount = window.numberCount; // Number count = NC

// Elements
const settingsToggle = document.getElementById("settingsToggle");
const settings = document.getElementById("settings");

// Up arrow keybind
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		numberCount += 25;
		updateGame();
	}
});

// Down arrow keybind
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowDown") {
		numberCount -= 25;
		updateGame();
	}
});

// Reload keybind
document.addEventListener("keydown", function (event) {
	if (event.key === "r") {
		location.reload();
	}
});

// Settings toggle
settingsToggle.addEventListener("dblclick", function () {
	settings.classList.toggle("hidden");
});
