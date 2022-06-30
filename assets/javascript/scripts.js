const scriptListFirst = [
	"header",
	"ads",
	"goTop"
]

const scriptListSecond = [
	"theme",
	"sidebar",
	"filter",
	"search",
	// "sound",
	"dropdown",
	"cursor",
	"footer"
];

window.onload = function() {
	const scriptsCreate = document.createElement('div');
	scriptsCreate.setAttribute('id','script')
	document.querySelector("body").insertBefore(scriptsCreate, document.querySelector("body").children[0]);

	for(let script of scriptListFirst) {
		var scriptCreate = document.createElement('script');
		scriptCreate.src = `https://hgvn23.github.io/assets/javascript/${script}.js`;
		// scriptCreate.src = `../assets/javascript/${script}.js`;
		// scriptCreate.src = `assets/javascript/${script}.js`;
		document.getElementById("script").appendChild(scriptCreate);
	};
	
	const myTimeout = setTimeout(function f() {
		for(let script of scriptListSecond) {
			var scriptCreate = document.createElement('script');
			scriptCreate.src = `https://hgvn23.github.io/assets/javascript/${script}.js`;
			// scriptCreate.src = `../assets/javascript/${script}.js`;
			// scriptCreate.src = `assets/javascript/${script}.js`;
			document.getElementById("script").appendChild(scriptCreate);
		};
	}, 300);
}