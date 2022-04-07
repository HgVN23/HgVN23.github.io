function copy() {
	let copyText = document.getElementById("copyThis").innerHTML;
	navigator.clipboard.writeText(copyText);

	document.getElementById("copy").innerHTML = "Đã sao chép";

	const myTimeout = setTimeout(reset, 1000);
	function reset() {
		document.getElementById("copy").innerHTML = "Sao chép";
	}
};