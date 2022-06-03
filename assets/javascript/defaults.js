function defaults() {
	// ======================================================================
	// Script
	for(let script of scriptList) {
		var scriptCreate = document.createElement('script');
		scriptCreate.src = `https://hgvn23.github.io/assets/javascript/${script}.js`;
		// scriptCreate.src = `../assets/javascript/${script}.js`;
		// scriptCreate.src = `assets/javascript/${script}.js`;
		document.getElementById("script").appendChild(scriptCreate);
	};
	// ======================================================================
	// Header
	document.getElementById("header").innerHTML = header;
	// ======================================================================
	// Sidebar
	document.getElementById("sidebar").innerHTML = sidebar;
	// ======================================================================
	// Footer
	document.getElementById("footer").innerHTML = footer;
	document.querySelector(".year").innerHTML = new Date().getFullYear();
	// ======================================================================
	// Go top
	const goTopCreate = document.createElement('a');
	goTopCreate.classList.add('goTop', 'goTopIcon');
	goTopCreate.href = "#";
	document.querySelector("body").appendChild(goTopCreate);
	// ======================================================================
}
const scriptList = [
	"theme",
	"cursor",
	"sidebar",
	"filter",
	"search",
	"dropdown",
	// "sound",
	"ads"
];
const header = `
	<div class="sidebarIcon sidebarIconClose"></div>
	<a class="logoWiki" href="https://hgvn23.github.io"></a>
	<a class="headerTitle" href="https://hgvn23.github.io">MCBE Command Wiki</a>
	<div class="themeIcon themeIconDark"></div>
	<div class="search">
		<div class="searchBar">
			<div class="searchIcon" onclick="searchEnter()"></div>
			<input class="searchInput" placeholder="Nhập để tìm kiếm..." type="search">
		</div>
		<div class="searchBox searchBoxHide"></div>
	</div>
`;
const sidebar = `
	<div class="sidebar sidebarClose">
		<div class="sidebarTitle">Mục lục</div>
		<div class="sidebarLine"></div>
		<li><a class="textLink" href="https://hgvn23.github.io">Trang chủ</a></li>
		<div>
			<li class="dropdown">Commands</li>
			<div class="dropdownHide">
				<li><a class="textLink" href="https://hgvn23.github.io/commands/1help.html">/?</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/ability.html">/ability</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/alwaysday.html">/alwaysday</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/camerashake.html">/camerashake</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/clear.html">/clear</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/clearspawnpoint.html">/clearspawnpoint</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/clone.html">/clone</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/connect.html">/connect</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/damage.html">/damage</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/daylock.html">/daylock</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/deop.html">/deop</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/dialogue.html">/dialogue</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/difficulty.html">/difficulty</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/effect.html">/effect</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/enchant.html">/enchant</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/event.html">/event</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/execute.html">/execute</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/fill.html">/fill</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/fog.html">/fog</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/function.html">/function</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/gamemode.html">/gamemode</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/gamerule.html">/gamerule</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/gametest.html">/gametest</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/give.html">/give</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/help.html">/help</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/immutableworld.html">/immutableworld</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/kick.html">/kick</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/kill.html">/kill</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/list.html">/list</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/locate.html">/locate</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/loot.html">/loot</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/me.html">/me</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/mobevent.html">/mobevent</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/msg.html">/msg</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/music.html">/music</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/op.html">/op</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/particle.html">/particle</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/playanimation.html">/playanimation</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/playsound.html">/playsound</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/reload.html">/reload</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/replaceitem.html">/replaceitem</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/ride.html">/ride</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/say.html">/say</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/schedule.html">/schedule</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/scoreboard.html">/scoreboard</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/script.html">/script</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/setblock.html">/setblock</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/setmaxplayers.html">/setmaxplayers</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/setworldspawn.html">/setworldspawn</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/spawnpoint.html">/spawnpoint</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/spreadplayers.html">/spreadplayers</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/stopsound.html">/stopsound</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/structure.html">/structure</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/summon.html">/summon</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/tag.html">/tag</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/teleport.html">/teleport</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/tell.html">/tell</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/tellraw.html">/tellraw</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/testfor.html">/testfor</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/testforblock.html">/testforblock</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/testforblocks.html">/testforblocks</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/tickingarea.html">/tickingarea</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/time.html">/time</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/title.html">/title</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/titleraw.html">/titleraw</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/toggledownfall.html">/toggledownfall</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/tp.html">/tp</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/volumearea.html">/volumearea</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/w.html">/w</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/wb.html">/wb</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/weather.html">/weather</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/worldbuilder.html">/worldbuilder</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/wsserver.html">/wsserver</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/commands/xp.html">/xp</a></li>
			</div>
		</div>
		<div>
			<li class="dropdown">Danh sách Id</li>
			<div class="dropdownHide">
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/animationId.html">Animation</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/blockStateId.html">Block state</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/componentId.html">Component</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/damageId.html">Damage</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/effectId.html">Effect</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/enchantmentId.html">Enchantment</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/eventId.html">Event</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/fogId.html">Fog</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/gameruleId.html">Gamerule</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/lootId.html">Loot</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/particleId.html">Particle</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/rawMessageId.html">Raw message</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/target.html">Target</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/soundId.html">Sound</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/danhSachId/trackId.html">Track</a></li>
			</div>
		</div>
		<div>
			<li class="dropdown">Thông tin liên quan</li>
			<div class="dropdownHide">
				<li><a class="textLink" href="https://hgvn23.github.io/thongTinLienQuan/toanTuKiTu.html">Toán tử kí tự</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/thongTinLienQuan/cauTrucCommand.html">Cấu trúc Command</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/thongTinLienQuan/commandBlock.html">Command Block</a></li>
			</div>
		</div>
		<div>
			<li class="dropdown">Web Tool</li>
			<div class="dropdownHide">
				<li><a class="textLink" href="https://hgvn23.github.io/webTool/uuidV4Generator.html">Tạo UUID</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/webTool/glyph.html">Tra kí tự glyph</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/webTool/color.html">Hex -> Dec Color Code</a></li>
				<li><a class="textLink" href="https://hgvn23.github.io/webTool/dialogueGenerator.html">Tạo dialogue.json</a></li>
			</div>
		</div>
		<div class="sidebarEnd"></div>
	</div>
	<div class="sidebarBlur sidebarClose" onclick="sidebarClose()"></div>
`;
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
		<div class="copyright2">Wiki by <a class="textLink" href="https://hgvn23.github.io/fromHg/Hg.html">Hg</a></div>
		<div class="copyrightSide"></div>
		<div class="copyright3">Hosted by <a class="textLink" href="https://github.com/" target="_blank">Github</a></div>
	</div>
`;