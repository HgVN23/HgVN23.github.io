const tSearch = `
	<div class="tSearchBar">
		<div class="searchIcon"></div>
		<input class="tSearchInput" placeholder="Nhập để lọc theo Tên gọi" type="text">
	</div>
`;

const tParent = document.querySelector(".table").parentElement;

const tSearchCreate = document.createElement('div');
tSearchCreate.classList.add('tSearch');
tSearchCreate.innerHTML = tSearch;
tParent.insertBefore(tSearchCreate, tParent.children[1]);

const tSearchInput = document.querySelector(".tSearchInput");
const rows = document.querySelectorAll("tbody tr");

tSearchInput.onkeyup = (e) => {
	const tSearchValue = event.target.value.toLowerCase();
	rows.forEach((row) => {
		// row.querySelector("td").textContent.toLowerCase().startsWith(tSearchValue) 
		row.querySelector("td").textContent.toLowerCase().includes(tSearchValue)
		? (row.style.display = "table-row")
		: (row.style.display = "none");
	});
};