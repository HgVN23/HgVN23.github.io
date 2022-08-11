const tSearchInput = document.querySelector(".tSearchInput");
const rows = document.querySelectorAll("tbody tr");

tSearchInput.onkeyup = (e) => {
	const q = event.target.value.toLowerCase();
	rows.forEach((row) => {
		// row.querySelector("td").textContent.toLowerCase().startsWith(q) 
		// ? (row.style.display = "table-row")
		// : (row.style.display = "none");
		row.querySelector("td").textContent.toLowerCase().includes(q) 
		? (row.style.display = "table-row")
		: (row.style.display = "none");
	});
};