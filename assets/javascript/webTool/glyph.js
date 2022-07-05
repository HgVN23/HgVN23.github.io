const option = document.getElementsByTagName("option");
for(var i = 0; i < option.length; i++) {
	option[i].addEventListener('click', glyphCreate);
};

const create = document.getElementById("create");
create.addEventListener('click', glyphCreate);

const result = document.querySelector(".result");

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
	const glyphTable = document.getElementById("glyphTable").value;

	if(glyphTable == "")
		missing();
	else {
		result.innerHTML = `Chọn kí tự`
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
	document.getElementById("create").innerHTML = "Chưa chọn";

	const timeout = setTimeout(reset, 1000);
	function reset() {
		document.getElementById("create").innerHTML = "Tạo";
	}
};

const glyphList = [
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"
];