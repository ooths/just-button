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
if (window.numberCount === 0) {
	chatboxMessage.innerHTML = "Double click the top of the screen.";
}

// Updates number count every time button is clicked
function updateCounter() {
	window.numberCount++;
	counter.innerHTML = window.numberCount;
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
		if (window.numberCount >= key) {
			lastKey = key;
		}
	}
	if (lastKey) {
		chatboxMessage.innerHTML = messages[lastKey];
	}
}

// Updates the interface depending on the number count
function interfaceControl() {
	if (window.numberCount >= 100) taskbar.classList.remove("hidden");
	if (window.numberCount >= 200) gridButton.classList.remove("hidden");
	if (window.numberCount >= 300) piechartButton.classList.remove("hidden");
	if (window.numberCount >= 400) blockButton.classList.remove("hidden");
	if (window.numberCount >= 500) {
		chatboxContainer.classList.remove("hidden");
		chatboxTriangle.classList.remove("hidden");
	}
	if (window.numberCount >= 600) toolbox.classList.remove("hidden");
}

// Runs functions for button click
herold.addEventListener("click", function () {
	console.log("%cButton clicked.", "color:red;");
	// Removes chatbox and clears message after first click
	if (window.numberCount === 0) {
		firstNC();
		console.log(
			"%c    Removed chatbox and cleared message.",
			"color:rgba(255, 0, 0, 0.5);",
		);
	}

	// Updates number count every time button is clicked
	updateCounter();
	console.log("%c    Updated number count.", "color:rgba(255, 0, 0, 0.5);");

	// Updates the chatbox message depending on the number count
	chatboxMessageControl();
	console.log("%c    Updated chatbox message.", "color:rgba(255, 0, 0, 0.5);");

	// Updates the interface depending on the number count
	interfaceControl();
	console.log("%c    Updated interface.", "color:rgba(255, 0, 0, 0.5);");
});

// Runs functions for keybinds
function updateGame() {
	console.log("%cKeybinds used.", "color:red;");

	// Updates html every time button is clicked
	counter.innerHTML = window.numberCount;
	console.log("%c    Updated number count.", "color:rgba(255, 0, 0, 0.5);");

	// Updates the chatbox message depending on the number count
	chatboxMessageControl();
	console.log("%c    Updated chatbox message.", "color:rgba(255, 0, 0, 0.5);");

	// Updates the interface depending on the number count
	interfaceControl();
	console.log("%c    Updated interface.", "color:rgba(255, 0, 0, 0.5);");

	// Removes chatbox and clears message after first click
	if (window.numberCount >= 0) {
		firstNC();
		console.log(
			"%c    Removed chatbox and cleared message.",
			"color:rgba(255, 0, 0, 0.5);",
		);
	}
}
