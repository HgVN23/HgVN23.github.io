const hear = document.getElementsByClassName('hear');
const playsoundId = new Audio();

for(let i = 0; i < hear.length; i++) {
	hear[i].addEventListener('click', playsound);
};

function playsound() {
	let soundId = this.parentElement.parentElement.querySelector('td:nth-child(2)').textContent;
	playsoundId.pause();
	playsoundId.src = `https://github.com/misode/mcmeta/blob/assets/assets/minecraft/sounds/${soundId}.ogg?raw=true`;
	playsoundId.play();
};