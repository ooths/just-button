const checkbox = document.getElementById("switch");
const body = document.body;

checkbox.addEventListener("click", function () {
	if (checkbox.checked) {
		body.classList.add("lightMode");
		body.classList.remove("darkMode");
	} else {
		body.classList.remove("lightMode");
		body.classList.add("darkMode");
	}
});
