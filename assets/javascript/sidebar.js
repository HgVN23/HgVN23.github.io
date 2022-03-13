function sidebarOpen() {
	document.querySelector(".sidebarIconClose").classList.add("sidebarIconHide");
	document.querySelector(".sidebarIconOpen").classList.remove("sidebarIconHide");
	document.querySelector(".sidebar").classList.remove("sidebarClose");
	document.querySelector(".sidebarBlur").classList.remove("sidebarClose");
}

function sidebarClose() {
	document.querySelector(".sidebarIconClose").classList.remove("sidebarIconHide");
	document.querySelector(".sidebarIconOpen").classList.add("sidebarIconHide");
	document.querySelector(".sidebar").classList.add("sidebarClose");
	document.querySelector(".sidebarBlur").classList.add("sidebarClose");
}