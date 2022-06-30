const footer = `
	<div>
		<a class="socialLogo logoYoutube" href="https://youtube.com/c/HgVN23?sub_confirmation=1" target="_blank"></a>
		<a class="socialLogo logoDiscord" href="https://discordapp.com/users/451348781460619264/" target="_blank"></a>
		<a class="socialLogo logoTwitter" href="https://twitter.com/HgVN23?s=0" target="_blank"></a>
		<a class="socialLogo logoFacebook" href="https://www.facebook.com/HgVN23" target="_blank"></a>
	</div>
	<div class="copyright">
		<div class="copyright1">Copyright © 2021-<div class="year"></div></div>
		<div class="copyrightSide"></div>
		<p class="copyright2">Wiki by <a class="textLink" href="https://hgvn23.github.io/fromHg/Hg.html">Hg</a></p>
		<div class="copyrightSide"></div>
		<p class="copyright3">Hosted by <a class="textLink" href="https://github.com/" target="_blank">Github</a></p>
	</div>
`;

const footerCreate = document.createElement('footer');
footerCreate.innerHTML = footer;
document.querySelector("body").appendChild(footerCreate);
document.querySelector(".year").innerHTML = new Date().getFullYear();