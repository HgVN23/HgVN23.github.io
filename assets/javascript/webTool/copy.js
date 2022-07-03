const copy = document.getElementById("copy");
copy.addEventListener('click', copyRun);

function copyRun() {
	var copyText = document.getElementById("copyThis").innerHTML;
	navigator.clipboard.writeText(copyText);

	copy.innerHTML = "Đã sao chép";

	const myTimeout = setTimeout(reset, 1000);
	function reset() {
		copy.innerHTML = "Sao chép";
	}
};