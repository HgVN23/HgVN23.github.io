let uuidList = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];

function generator() {
	let uuid = "";
	for (let i = 0; i < 32; i++) {
		if (i == 8 || i == 12 || i == 16 || i == 20)
			uuid += "-";
		uuid += uuidList[Math.floor(Math.random() * 16)];
	};
	document.querySelector(".uuid").innerHTML = uuid;
};