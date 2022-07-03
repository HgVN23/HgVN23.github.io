const glyphList = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F"
];

const result = document.querySelector(".result");

const create = document.getElementById("create");
create.addEventListener('click', glyphCreate);

const glyphTd = document.getElementsByTagName("td");
for(var i = 0; i < glyphTd.length; i++) {
	glyphTd[i].addEventListener('click', glyphThis);
};

function glyphThis() {
	if(this.innerText == "")
		result.innerHTML = `Không có`;
	else
		result.innerHTML = `${this.innerText}`;
};

function glyphCreate() {
	const glyphTable = document.getElementById("glyphTable").value.toUpperCase();

	if(glyphTable == "")
		missing();
	else {
		let i = 0;
		for(let glyphRow of glyphList) {
			for(let glyphCol of glyphList) {
				glyphTd[i].innerHTML = `&#x${glyphTable}${glyphRow}${glyphCol};`;
				i++;
			}
		}
	}
};

function missing() {
	document.getElementById("create").innerHTML = "Thiếu";

	const timeout = setTimeout(reset, 1000);
	function reset() {
		document.getElementById("create").innerHTML = "Tạo";
	}
};