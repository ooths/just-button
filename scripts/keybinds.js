const settingsToggle = document.getElementById("settingsToggle");
const settings = document.getElementById("settings");

document.addEventListener("keydown", function (event) {
	switch (event.key) {
		case "ArrowUp":
			numberCount += 100;
			counter.innerHTML = numberCount;
			updateCounter();
			certainNumberAction();
			break;
		case "ArrowDown":
			numberCount -= 100;
			counter.innerHTML = numberCount;
			updateCounter();
			certainNumberAction();
			break;
		case "Alt":
			refreshKeybindAlt = true;
			break;
		case "s":
			if (refreshKeybindAlt) location.reload();
			break;
		default:
			break;
	}
});

settingsToggle.addEventListener("dblclick", function () {
	settings.classList.toggle("hidden");
});
