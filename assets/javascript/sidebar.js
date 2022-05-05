const sidebarIcon = document.querySelector(".sidebarIcon");
sidebarIcon.addEventListener("click", sidebarOpen);

const sidebarAll = document.querySelector(".sidebar");
const sidebarBlur = document.querySelector(".sidebarBlur");

function sidebarOpen() {
	sidebarIcon.addEventListener("click", sidebarClose);
	sidebarIcon.removeEventListener("click", sidebarOpen);
	sidebarIcon.classList.add("sidebarIconOpen");	
	sidebarIcon.classList.remove("sidebarIconClose");
	sidebarAll.classList.remove("sidebarClose");
	sidebarBlur.classList.remove("sidebarClose");
}

function sidebarClose() {
	sidebarIcon.addEventListener("click", sidebarOpen);
	sidebarIcon.removeEventListener("click", sidebarClose);
	sidebarIcon.classList.add("sidebarIconClose");	
	sidebarIcon.classList.remove("sidebarIconOpen");
	sidebarAll.classList.add("sidebarClose");
	sidebarBlur.classList.add("sidebarClose");
}