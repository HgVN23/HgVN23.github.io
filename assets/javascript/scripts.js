const scriptList = [
	"preloader",
	"header",
	"theme",
	"sidebar",
	"filter",
	"search",
	"dropdown",
	"goTop",
	"cursor",
	"ads",
	"footer",
	"done"
];

window.onload = function() {
	const scriptsCreate = document.createElement('div');
	scriptsCreate.setAttribute('id','script')
	document.querySelector("body").insertBefore(scriptsCreate, document.querySelector("body").children[0]);

	scriptF(scriptList);
};

let timeOut = 0;
function scriptF(scriptList) {
	for(let script of scriptList) {
		setTimeout(function sF() {
			var scriptCreate = document.createElement('script');
			scriptCreate.src = `https://hgvn23.github.io/assets/javascript/${script}.js`;
			// scriptCreate.src = `../assets/javascript/${script}.js`;
			// scriptCreate.src = `assets/javascript/${script}.js`;
			document.getElementById("script").appendChild(scriptCreate);
		}, timeOut*80);
		timeOut++;
	};
};








// const scriptList1 = [
// 	"header",
// 	"ads",
// 	"goTop"
// ]

// const scriptList2 = [
// 	"theme",
// 	"sidebar",
// 	"filter",
// 	"search"
// ];

// const scriptList3 = [
// 	"dropdown",
// 	"cursor",
// 	"footer"
// ];

// window.onload = function() {
// 	const scriptsCreate = document.createElement('div');
// 	scriptsCreate.setAttribute('id','script')
// 	document.querySelector("body").insertBefore(scriptsCreate, document.querySelector("body").children[0]);

// 	scriptF(scriptList1);
	
// 	const scriptTimeout1 = setTimeout(scriptF(scriptList2), 3000);
// 	const scriptTimeout2 = setTimeout(scriptF(scriptList3), 6000);
// }

// function scriptF(scriptList) {
// 	for(let script of scriptList) {
// 		var scriptCreate = document.createElement('script');
// 		scriptCreate.src = `https://hgvn23.github.io/assets/javascript/${script}.js`;
// 		// scriptCreate.src = `../assets/javascript/${script}.js`;
// 		// scriptCreate.src = `assets/javascript/${script}.js`;
// 		document.getElementById("script").appendChild(scriptCreate);
// 	};
// };