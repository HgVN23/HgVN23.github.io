const header = `
	<div class="sidebarIcon sidebarIconClose"></div>
	<a class="logoWiki" href="https://hgvn23.github.io"></a>
	<a class="headerTitle" href="https://hgvn23.github.io">MCBE Command Wiki</a>
	<div class="themeIcon themeIconDark"></div>
	<div class="search">
		<div class="searchBar">
			<div class="searchIcon" onclick="searchEnter()"></div>
			<input class="searchInput" placeholder="Nhập để tìm kiếm..." type="search">
		</div>
		<div class="searchBox searchBoxHide"></div>
	</div>
`;

const headerCreate = document.createElement('header');
headerCreate.innerHTML = header;
document.querySelector("body").insertBefore(headerCreate, document.querySelector("body").children[1]);