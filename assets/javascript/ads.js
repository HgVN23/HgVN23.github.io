let adsPc = `
	<div class="contentGroup">
		<div class="contentIcon iconLuuY"></div>
		<div class="contentTitle">Ads</div>
	</div>
	<!-- Ads 1 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2430509461017367" data-ad-slot="6618344666" data-ad-format="auto" data-full-width-responsive="true"></ins>
	<!-- Ads 2 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2430509461017367" data-ad-slot="1982672065" data-ad-format="auto" data-full-width-responsive="true"></ins>
	<!-- Ads 3 -->
	<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2430509461017367" data-ad-slot="7686386895" data-ad-format="auto" data-full-width-responsive="true"></ins>
`;
let adsPhone = `
	<div class="contentGroup">
		<div class="contentIcon iconLuuY"></div>
		<div class="contentTitle">Ads</div>
	</div>
	<!-- Ads 4 -->
	<ins class="adsbygoogle" style="display:block; width:300px; height:300px" data-ad-client="ca-pub-2430509461017367" data-ad-slot="1239821054"></ins>
`;

// AdsPc
let adsCreatePc = document.createElement('div');
adsCreatePc.classList.add('contentBox', 'adsPc');
adsCreatePc.innerHTML = adsPc;
document.querySelector(".content").appendChild(adsCreatePc);

// AdsPhone
let adsCreatePhone = document.createElement('div');
adsCreatePhone.classList.add('contentBox', 'adsPhone');
adsCreatePhone.innerHTML = adsPhone;
document.querySelector(".content").appendChild(adsCreatePhone);

for (var i = 0; i < 4; i++)
	(adsbygoogle = window.adsbygoogle || []).push({});
