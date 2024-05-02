tippy("#backToTop", {
	content: "Back To Top",
});
tippy("#changeTheme", {
	content: "Change Theme",
})
let theme = document.querySelector(".slider");
let body = document.querySelector("body");
var darkMode = false;
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	darkMode = true;
}
if (localStorage.getItem("theme") === "dark") {
	darkMode = true;
} else if (localStorage.getItem("theme") === "light") {
	darkMode = false;
}
if (darkMode) {
	body.classList.toggle("dark");
    theme.classList.toggle("active")
}
document.addEventListener("DOMContentLoaded", () => {
    theme.addEventListener("click", () => {
		body.classList.toggle("dark");      
        theme.classList.toggle("active")  
    	localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
	});
});
burger = document.querySelector(".burger");
header = document.querySelector("header");
burger.onclick = function () {
	burger.classList.toggle("open");
	header.classList.toggle("show");
}