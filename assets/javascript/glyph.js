// const glyphList = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];

function glyph() {
	var glyphTable = document.getElementById("glyphTable").value.toUpperCase();
	var glyphRow = document.getElementById("glyphRow").value.toUpperCase();
	var glyphCol = document.getElementById("glyphCol").value.toUpperCase();

	if (glyphTable == "" || glyphRow == "" || glyphCol == "")
		missing();
	else {
		var n = glyphTable + glyphRow + glyphCol;
		document.querySelector(".result").innerHTML = `&#x${n};`;
	}
};

function missing() {
	document.getElementById("create").innerHTML = "Thiếu";

	const timeout = setTimeout(reset, 1000);
	function reset() {
		document.getElementById("create").innerHTML = "Tạo";
	}
};