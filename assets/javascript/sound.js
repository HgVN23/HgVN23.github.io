const audioCreate = document.createElement('audio');
audioCreate.loop = true;
audioCreate.volume = 0.02;
document.querySelector("body").appendChild(audioCreate);

const sourceCreate = document.createElement('source');
sourceCreate.src = "assets/media/sound/otherside.ogg";
document.querySelector("audio").appendChild(sourceCreate);

window.addEventListener('click', () => {
	document.querySelector("audio").play();
})