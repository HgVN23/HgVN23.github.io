let uuidList = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];

function generator() {
	let uuid = "";
	for (let i = 0; i < 32; i++) {
		if (i == 8 || i == 12 || i == 16 || i == 20)
			uuid += "-";
		uuid += uuidList[Math.floor(Math.random() * 14 + 1)];
	};
	document.querySelector(".uuid").innerHTML = uuid;
};

function copy() {
	let copyText = document.querySelector(".uuid").innerHTML;
	navigator.clipboard.writeText(copyText);

	document.getElementById("copy").innerHTML = "Đã sao chép";

	const myTimeout = setTimeout(
		document.getElementById("copy").innerHTML = "Sao chép",
	1000);
};