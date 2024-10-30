const hamburgerIcon = document.getElementById("toggler");
const hamburgerIconSpans = document.querySelectorAll("#toggler span");
const nav = document.querySelectorAll("header nav ");
let widthMatch = window.matchMedia("(min-width: 768px)");
let isShowed = false;

function showNav() {
	nav[0].style.display = "block";
	for (const element of hamburgerIcon.children) {
		element.style.transform = "scale(0.8)";
		element.style.background = "#a29d9d";
	}
	isShowed = true;
}

function hideNav() {
	nav[0].style.display = "none";
	for (const element of hamburgerIcon.children) {
		element.style.transform = "scale(1)";
		element.style.background = "black";
	}
	isShowed = false;
}

widthMatch.addEventListener("change", () => {
	if (widthMatch.matches) {
		showNav();
	} else {
		hideNav();
	}
});

hamburgerIcon.addEventListener("click", () => {
	if (isShowed) {
		hideNav();
	} else {
		showNav();
	}
});
