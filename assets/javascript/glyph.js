let glyphList = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];

function glyph() {
	let glyphTable = document.getElementById("glyphTable").value.toUpperCase();
	let glyphRow = document.getElementById("glyphRow").value.toUpperCase();
	let glyphCol = document.getElementById("glyphCol").value.toUpperCase();

	if (glyphTable == "" || glyphRow == "" || glyphCol == "")
		missing();
	else {
		let n = glyphTable + glyphRow + glyphCol;
		document.querySelector(".glyph").innerHTML = `&#x${n};`;
	}
};

function missing() {
	document.getElementById("create").innerHTML = "Thiếu";

	const timeout = setTimeout(reset, 1000);
	function reset() {
		document.getElementById("create").innerHTML = "Tạo";
	}
};