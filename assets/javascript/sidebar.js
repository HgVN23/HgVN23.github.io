const sidebar = `
	<div class="sidebar sidebarClose">
		<h2 class="sidebarTitle">Mục lục</h2>
		<div class="sidebarLine"></div>
		<a id="sidebarTrangChu" class="contentText textLink" href="https://hgvn23.github.io">Trang chủ</a>
		<div class="sidebarDropdown">
			<p class="contentText dropdown">Commands</p>
			<div class="dropdownStart dropdownHide"><div>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/1help.html">/?</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/ability.html">/ability</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/agent.html">/agent</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/alwaysday.html">/alwaysday</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/camerashake.html">/camerashake</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/clear.html">/clear</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/clearspawnpoint.html">/clearspawnpoint</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/clone.html">/clone</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/connect.html">/connect</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/damage.html">/damage</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/daylock.html">/daylock</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/deop.html">/deop</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/dialogue.html">/dialogue</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/difficulty.html">/difficulty</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/effect.html">/effect</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/enchant.html">/enchant</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/event.html">/event</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/execute.html">/execute</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/fill.html">/fill</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/fog.html">/fog</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/function.html">/function</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/gamemode.html">/gamemode</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/gamerule.html">/gamerule</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/gametest.html">/gametest</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/give.html">/give</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/help.html">/help</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/immutableworld.html">/immutableworld</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/kick.html">/kick</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/kill.html">/kill</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/list.html">/list</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/locate.html">/locate</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/loot.html">/loot</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/me.html">/me</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/mobevent.html">/mobevent</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/msg.html">/msg</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/music.html">/music</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/op.html">/op</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/particle.html">/particle</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/playanimation.html">/playanimation</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/playsound.html">/playsound</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/reload.html">/reload</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/replaceitem.html">/replaceitem</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/ride.html">/ride</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/say.html">/say</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/schedule.html">/schedule</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/scoreboard.html">/scoreboard</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/script.html">/script</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/setblock.html">/setblock</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/setmaxplayers.html">/setmaxplayers</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/setworldspawn.html">/setworldspawn</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/spawnpoint.html">/spawnpoint</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/spreadplayers.html">/spreadplayers</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/stopsound.html">/stopsound</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/structure.html">/structure</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/summon.html">/summon</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/tag.html">/tag</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/teleport.html">/teleport</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/tell.html">/tell</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/tellraw.html">/tellraw</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/testfor.html">/testfor</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/testforblock.html">/testforblock</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/testforblocks.html">/testforblocks</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/tickingarea.html">/tickingarea</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/time.html">/time</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/title.html">/title</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/titleraw.html">/titleraw</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/toggledownfall.html">/toggledownfall</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/tp.html">/tp</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/volumearea.html">/volumearea</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/w.html">/w</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/wb.html">/wb</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/weather.html">/weather</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/worldbuilder.html">/worldbuilder</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/wsserver.html">/wsserver</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/commands/xp.html">/xp</a>
				<div class="dropdownEnd"></div>
			</div></div>
		</div>
		<div class="sidebarDropdown">
			<p class="contentText dropdown">Danh sách Id</p>
			<div class="dropdownStart dropdownHide"><div>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/animationId.html">Animation</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/blockStateId.html">Block state</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/componentId.html">Component</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/damageId.html">Damage</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/effectId.html">Effect</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/enchantmentId.html">Enchantment</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/eventId.html">Event</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/fogId.html">Fog</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/gameruleId.html">Gamerule</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/lootId.html">Loot</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/particleId.html">Particle</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/rawMessageId.html">Raw message</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/target.html">Target</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/soundId.html">Sound</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/danhSachId/trackId.html">Track</a>
				<div class="dropdownEnd"></div>
			</div></div>
		</div>
		<div class="sidebarDropdown">
			<p class="contentText dropdown">Thông tin liên quan</p>
			<div class="dropdownStart dropdownHide"><div>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/thongTinLienQuan/toanTuKiTu.html">Toán tử kí tự</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/thongTinLienQuan/cauTrucCommand.html">Cấu trúc Command</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/thongTinLienQuan/commandBlock.html">Command Block</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/thongTinLienQuan/npc.html">NPC</a>
				<div class="dropdownEnd"></div>
			</div></div>
		</div>
		<div class="sidebarDropdown">
			<p class="contentText dropdown">Web Tool</p>
			<div class="dropdownStart dropdownHide"><div>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/webTool/uuidV4Gen.html">Tạo UUID v4</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/webTool/glyphSearch.html">Tìm kiếm Glyph</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/webTool/colorConvert.html">Chuyển đổi mã màu Hex sang Dec</a>
				<a class="dropdownText textLink" href="https://hgvn23.github.io/webTool/dialogueGen.html">Tạo dialogue.json</a>
				<div class="dropdownEnd"></div>
			</div></div>
		</div>
		<div class="sidebarEnd"></div>
	</div>
	<div class="sidebarBlur sidebarClose" onclick="sidebarClose()"></div>
`;

const sidebarCreate = document.createElement('aside');
sidebarCreate.innerHTML = sidebar;
document.querySelector("body").insertBefore(sidebarCreate, document.querySelector("body").children[2]);

const sidebarIcon = document.querySelector(".sidebarIcon");
sidebarIcon.addEventListener("click", sidebarOpen);

const sidebarAll = document.querySelector(".sidebar");
const sidebarBlur = document.querySelector(".sidebarBlur");

function sidebarOpen() {
	sidebarIcon.addEventListener("click", sidebarClose);
	sidebarIcon.removeEventListener("click", sidebarOpen);
	sidebarIcon.classList.add("sidebarIconOpen");	
	sidebarIcon.classList.remove("sidebarIconClose");
	sidebarAll.classList.remove("sidebarClose");
	sidebarBlur.classList.remove("sidebarClose");
}

function sidebarClose() {
	sidebarIcon.addEventListener("click", sidebarOpen);
	sidebarIcon.removeEventListener("click", sidebarClose);
	sidebarIcon.classList.add("sidebarIconClose");	
	sidebarIcon.classList.remove("sidebarIconOpen");
	sidebarAll.classList.add("sidebarClose");
	sidebarBlur.classList.add("sidebarClose");
}