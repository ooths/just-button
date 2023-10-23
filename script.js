let isClickAllowed = true;
let numberCount = 0;

const mainButton = document.getElementById("mainButton");
const counter = document.getElementById("counter");
const taskbar = document.getElementById("taskbar");
const gridButton = document.getElementById("gridButton");
const piechartButton = document.getElementById("piechartButton");
const blockButton = document.getElementById("blockButton");
const chatbox = document.getElementById("chatbox");
const chatboxMessage = document.getElementById("chatboxMessage");

mainButton.addEventListener("click", function () {
	// Things that happen on every click
	if (isClickAllowed) {
		numberCount++;
		counter.innerHTML = numberCount;
		// isClickAllowed = false;

		setTimeout(() => (isClickAllowed = true), 150);
	}

	// Things that happen after certain number of clicks
	switch (numberCount) {
		case 100:
			taskbar.classList.add("visibleFlex");
			break;
		case 200:
			gridButton.classList.add("visibleBlock");
			break;
		case 300:
			piechartButton.classList.add("visibleBlock");
			break;
		case 400:
			blockButton.classList.add("visibleBlock");
			break;
		case 500:
			chatbox.style.display = "flex";
			chatboxMessage.innerHTML = "Hi James, this is the end so far.";
			break;
	}
});