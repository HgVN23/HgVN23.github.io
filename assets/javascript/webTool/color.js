const color = document.getElementById("color");

color.addEventListener("input", function(){
	document.querySelector(".result").innerHTML = parseInt(color.value.slice(1), 16);
}, false);