// Variables
let isClickAllowed = true;
let numberCount = 0;

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

const messages = {
	500: "Oof.",
	510: "So much button pressing.",
	520: "Holy shit, I can talk.",
	530: "I can dance!",
	540: "Okay. maybe I can't dance.",
	550: "I wonder what those symbols are.",
	560: "Do you know?",
	570: "Wait.",
	580: "Let me try something.",
	590: "Here we go.",
	600: "What the fuck?",
};

// Updates numberCount every time button is clicked
const updateCounter = () => {
	numberCount++;
	counter.innerHTML = numberCount;
};

// Does things when a certain number is reached
const certainNumberAction = () => {
	if (numberCount in messages) {
		chatboxMessage.innerHTML = messages[numberCount];
	}
	if (numberCount === 100) taskbar.classList.remove("hidden");
	if (numberCount === 200) gridButton.classList.remove("hidden");
	if (numberCount === 300) piechartButton.classList.remove("hidden");
	if (numberCount === 400) blockButton.classList.remove("hidden");
	if (numberCount === 500) {
		chatboxContainer.classList.remove("hidden");
		chatboxTriangle.classList.remove("hidden");
	}
	if (numberCount === 600) toolbox.classList.remove("hidden");
};

// Updates variables when button is clicked
herold.addEventListener("click", function () {
	if (isClickAllowed) {
		updateCounter();
		certainNumberAction();
		setTimeout(() => (isClickAllowed = true), 150);
	}
});

// TEMPORARY ------------------------------------------------------------
document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		numberCount += 100;
		counter.innerHTML = numberCount;
		certainNumberAction();
	}
});

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowDown") {
		numberCount -= 100;
		counter.innerHTML = numberCount;
		certainNumberAction();
	}
});

let refreshKeybindAlt = false;
let refreshKeybindS = false;

document.addEventListener("keydown", function (event) {
	if (event.key === "Alt") {
		refreshKeybindAlt = true;
	}
	if (event.key === "s" && refreshKeybindAlt) {
		location.reload();
	}
});

document.addEventListener("keyup", function (event) {
	if (event.key === "Alt") {
		refreshKeybindAlt = false;
	}
	if (event.key === "s") {
		refreshKeybindS = false;
	}
});
