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
	<div class="loading">
		<span style="--i: 0">L</span>
		<span style="--i: 1">o</span>
		<span style="--i: 2">a</span>
		<span style="--i: 3">d</span>
		<span style="--i: 4">i</span>
		<span style="--i: 5">n</span>
		<span style="--i: 6">g</span>
		<span style="--i: 7">.</span>
		<span style="--i: 8">.</span>
		<span style="--i: 9">.</span>
	</div>
`;

const preloaderCreate = document.createElement('div');
preloaderCreate.classList.add('preloader');
preloaderCreate.innerHTML = preloader;
document.querySelector("body").appendChild(preloaderCreate);