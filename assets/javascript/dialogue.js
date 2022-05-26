const saveFile = document.getElementById('saveFile');

saveFile.addEventListener('click', e => {
	let fileName = document.getElementById('fileName').value;
	let scene_tag = document.getElementById('scene_tag').value;
	let npc_name = document.getElementById('npc_name').value;
	var text = document.getElementById('text').value;
	var buttons = ``;
	let button1 = ``;
	let name1 = document.getElementById('name1').value;
	let commands1 = document.getElementById('commands1').value;
	let button2 = ``;
	let name2 = document.getElementById('name2').value;
	let commands2 = document.getElementById('commands2').value;
	let button3 = ``;
	let name3 = document.getElementById('name3').value;
	let commands3 = document.getElementById('commands3').value;
	let button4 = ``;
	let name4 = document.getElementById('name4').value;
	let commands4 = document.getElementById('commands4').value;
	let button5 = ``;
	let name5 = document.getElementById('name5').value;
	let commands5 = document.getElementById('commands5').value;
	let button6 = ``;
	let name6 = document.getElementById('name6').value;
	let commands6 = document.getElementById('commands6').value;
	var on_open_commands = document.getElementById('on_open_commands').value;
	var on_close_commands = document.getElementById('on_close_commands').value;

	npc_name = checkName(npc_name);

	if(!text)
		text = ``;
	else {
		text = text.replaceAll("\n", "\\n")
		text = text.replaceAll("\"", "\\\"");
	}

	button1 = checkButton(button1, name1, commands1);
	button2 = checkButton(button2, name2, commands2);
	button3 = checkButton(button3, name3, commands3);
	button4 = checkButton(button4, name4, commands4);
	button5 = checkButton(button5, name5, commands5);
	button6 = checkButton(button6, name6, commands6);

	buttons += groupButton(button1);
	buttons += groupButton(button2);
	buttons += groupButton(button3);
	buttons += groupButton(button4);
	buttons += groupButton(button5);
	buttons += groupButton(button6);
	buttons = buttons.replace(`,`, ``);

	if(!on_open_commands)
		on_open_commands = ``;
	else {
		on_open_commands = on_open_commands.replaceAll("\"", "\\\"");
		on_open_commands = `\n\t\t\t\t\t\"${on_open_commands.replaceAll("\n", "\",\n\t\t\t\t\t\"")}\"\n\t\t\t\t`;
	}

	if(!on_close_commands)
		on_close_commands = ``;
	else {
		on_close_commands = on_close_commands.replaceAll("\"", "\\\"");
		on_close_commands = `\n\t\t\t\t\t\"${on_close_commands.replaceAll("\n", "\",\n\t\t\t\t\t\"")}\"\n\t\t\t\t`;
	}

	const dialogue =
	`{
	"format_version": "1.17",
	"minecraft:npc_dialogue": {
		"scenes": [
			{
				"scene_tag": "${scene_tag}",
				"npc_name": "${npc_name}",
				"text": "${text}",
				"buttons": [${buttons}\n\t\t\t\t],
				"on_open_commands": [${on_open_commands}],
				"on_close_commands": [${on_close_commands}]
			}
		]
	}\n}`;

	if(fileName && scene_tag)
		downloadFile(fileName, dialogue);
	else
		changeText("Điền thiếu");
});

function checkButton(buttonValue, nameValue, commandsValue) {
	if(nameValue || commandsValue) {
		nameValue = checkName(nameValue);
		commandsValue = checkCommands(commandsValue);
		buttonValue = 
		`\n\t\t\t\t\t{
			\t\t\t"name": "${nameValue}",
			\t\t\t"commands": [${commandsValue}]
		\t\t\t}`;
		return buttonValue;
	}
	else
		return ``;
}

function checkName(checkValue) {
	if(!checkValue)
		checkValue = ``;
	else
		checkValue = checkValue.replaceAll("\"", "\\\"");
	return checkValue;
}

function checkCommands(checkValue) {
	if(!checkValue)
		checkValue = ``;
	else {
		checkValue = checkValue.replaceAll("\"", "\\\"");
		checkValue = `\n\t\t\t\t\t\t\t\"${checkValue.replaceAll("\n", "\",\n\t\t\t\t\t\t\t\"")}\"\n\t\t\t\t\t\t`;
	}
	return checkValue;
}

function groupButton(buttonValue) {
	if(buttonValue != ``)
		return `,${buttonValue}`;
	else
		return ``;
}

function downloadFile(fileName, dialogue) {
	const element = document.createElement('a');
	const blob = new Blob([dialogue], { type: 'plain/text' });
	const fileUrl = URL.createObjectURL(blob);

	element.setAttribute('href', fileUrl);
	element.setAttribute('download', `${fileName}.json`);
	element.style.display = 'none';

	document.body.appendChild(element);
	element.click();

	document.body.removeChild(element);

	changeText("Đã tải File")
};

function changeText(cT1) {
	saveFile.innerHTML = cT1;

	const timeout = setTimeout(reset, 1000);
	function reset() {
		saveFile.innerHTML = "Tải File";
	}
};