const themeIcon = document.querySelector(".themeIcon");
themeIcon.addEventListener("click", themeLight);

const themeAll = document.querySelector(".themeDark")

function themeLight() {
	localStorage.setItem("theme", 1);
	themeIcon.addEventListener("click", themeDark);
	themeIcon.removeEventListener("click", themeLight);
	themeIcon.classList.add("themeIconLight");
	themeIcon.classList.remove("themeIconDark");
	themeAll.classList.add("themeLight");
	themeAll.classList.remove("themeDark");
}

function themeDark() {
	localStorage.removeItem("theme");
	themeIcon.addEventListener("click", themeLight);
	themeIcon.removeEventListener("click", themeDark);
	themeIcon.classList.add("themeIconDark");
	themeIcon.classList.remove("themeIconLight");
	themeAll.classList.add("themeDark");
	themeAll.classList.remove("themeLight");
}

if (localStorage.theme == 1) {
	themeLight();
}