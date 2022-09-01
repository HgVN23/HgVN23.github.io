const header = `
	<div class="sidebarIcon sidebarIconClose cursorClickE"></div>
	<a class="logoWiki cursorClickE" href="https://hgvn23.github.io"></a>
	<a class="headerTitle cursorClickE" href="https://hgvn23.github.io">MCBE Command Wiki</a>
	<div class="themeIcon themeIconDark cursorClickE"></div>
	<div class="search">
		<div class="searchBar">
			<div class="searchIcon cursorClickE" onclick="searchEnter()"></div>
			<input class="searchInput" placeholder="Nhập để tìm kiếm..." type="search">
		</div>
		<div class="searchBox searchBoxHide cursorClickE"></div>
	</div>
`;

const headerCreate = document.createElement('header');
headerCreate.innerHTML = header;
document.querySelector("body").insertBefore(headerCreate, document.querySelector("body").children[1]);