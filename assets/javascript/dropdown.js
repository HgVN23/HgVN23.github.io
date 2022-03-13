window.onload = dropdownCreate();

function dropdownCreate() {
	var toggler = document.getElementsByClassName("dropdown");
	var i;
	for (i = 0; i < toggler.length; i++) {
		toggler[i].addEventListener("click", dropdownActive);
	}
}
function dropdownActive() {
	this.classList.toggle("dropdownActive");
	this.parentElement.querySelector(".dropdownHide").classList.toggle("dropdownShow");
}