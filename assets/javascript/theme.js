function themeLight() {
	localStorage.setItem("theme", 1);
	document.querySelector(".themeIconDark").classList.add("themeHide");
	document.querySelector(".themeIconLight").classList.remove("themeHide");
	document.querySelector(".themeDark").classList.add("themeLight");
	document.querySelector(".themeLight").classList.remove("themeDark");
}

function themeDark() {
	localStorage.removeItem("theme");
	document.querySelector(".themeIconLight").classList.add("themeHide");
	document.querySelector(".themeIconDark").classList.remove("themeHide");
	document.querySelector(".themeLight").classList.add("themeDark");
	document.querySelector(".themeDark").classList.remove("themeLight");
}

if (localStorage.theme == 1) {
	themeLight();
}