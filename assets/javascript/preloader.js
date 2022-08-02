const preloader = `
	<div class="cube">
		<div class="top"></div>
		<div>
			<span class="front" style="--i: 0"></span>
			<span class="side1" style="--i: 1"></span>
			<span class="back" style="--i: 2"></span>
			<span class="side2" style="--i: 3"></span>
		</div>
	</div>
	<div class="loading">Loading...</div>
`;

const preloaderCreate = document.createElement('div');
preloaderCreate.classList.add('preloader');
preloaderCreate.innerHTML = preloader;
document.querySelector("body").appendChild(preloaderCreate);