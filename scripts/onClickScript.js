// Variables
window.numberCount = 0; // Number count = NC

// Elements
const herold = document.getElementById("herold");
const counter = document.getElementById("counter");
const taskbar = document.getElementById("taskbar");
const gridButton = document.getElementById("gridButton");
const piechartButton = document.getElementById("piechartButton");
const blockButton = document.getElementById("blockButton");
const chatboxContainer = document.getElementById("chatboxContainer");
const chatboxTriangle = document.getElementById("chatboxTriangle");
const chatboxMessage = document.getElementById("chatboxMessage");
const toolbox = document.getElementById("toolbox");

// Chatbox messages
const messages = {
	500: "Oof.",
	510: "So much button pressing.",
	520: "Holy smokes, I can talk.",
	530: "I can dance!",
	540: "Okay. maybe I can't dance.",
	550: "I wonder what those symbols are.",
	560: "Do you know?",
	570: "Wait.",
	580: "Let me try something.",
	590: "Here we go.",
	600: "What the hell?",
};

// Chatbox message at beginning of game
if (numberCount === 0) {
	chatboxMessage.innerHTML = "Double click the top of the screen.";
}

// Updates number count every time button is clicked
function updateCounter() {
	numberCount++;
	counter.innerHTML = numberCount;
}

// Removes chatbox and clears message after first click
function firstNC() {
	chatboxContainer.classList.add("hidden");
	chatboxTriangle.classList.add("hidden");
	chatboxMessage.innerHTML = "";
}

// Updates the chatbox message depending on the number count
function chatboxMessageControl() {
	let lastKey = null;
	for (const key in messages) {
		if (numberCount >= key) {
			lastKey = key;
		}
	}
	if (lastKey) {
		chatboxMessage.innerHTML = messages[lastKey];
	}
}

// Updates the interface depending on the number count
function interfaceControl() {
	if (numberCount >= 100) taskbar.classList.remove("hidden");
	if (numberCount >= 200) gridButton.classList.remove("hidden");
	if (numberCount >= 300) piechartButton.classList.remove("hidden");
	if (numberCount >= 400) blockButton.classList.remove("hidden");
	if (numberCount >= 500) {
		chatboxContainer.classList.remove("hidden");
		chatboxTriangle.classList.remove("hidden");
	}
	if (numberCount >= 600) toolbox.classList.remove("hidden");
}

// Runs functions for button click
herold.addEventListener("click", function () {
	// Removes chatbox and clears message after first click
	if (numberCount === 0) {
		firstNC();
	}

	// Updates number count every time button is clicked
	updateCounter();

	// Updates the chatbox message depending on the number count
	chatboxMessageControl();

	// Updates the interface depending on the number count
	interfaceControl();
});

// Runs functions for keybinds
function updateGame() {
	// Removes chatbox and clears message after first click
	if (numberCount === 0) {
		firstNC();
	}

	// Updates html every time button is clicked
	counter.innerHTML = numberCount;

	// Updates the chatbox message depending on the number count
	chatboxMessageControl();

	// Updates the interface depending on the number count
	interfaceControl();
}
