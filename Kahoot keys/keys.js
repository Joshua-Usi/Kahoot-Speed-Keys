console.log("Kahoot speed keys enabled");

const button_id = [
	/* red button: */ 		"jKktkc",
	/* blue button: */		"kjJAPQ",
	/* yellow button: */ 	"YijXp",
	/* green button: */ 	"kYMAlB",
];
document.addEventListener('keydown', function(event) {
	let key = 0;
	let key_name = "";
	if (event.keyCode === 82) {
		key = 0;
		key_name = "r";
	}
	if (event.keyCode === 84) {
		key = 1;
		key_name = "t";
	}
	if (event.keyCode === 70) {
		key = 2;
		key_name = "f";
	}
	if (event.keyCode === 71) {
		key = 3;
		key_name = "g";
	}

	document.getElementsByClassName(button_id[key])[0].click();
	console.log(key_name + "was pressed");
});