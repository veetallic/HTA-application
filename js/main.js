window.onload = init;

function init() {
	config = {
		click: {
			closeBtn: pClose,
			closeMenuItem: pClose,
			closeBtnPopup: popUpClose,
			test: test
		}
	};
	
	for (var event in config) {
		for (var element in config[event]) {
			var domElement = document.getElementById(element);
			with (domElement) {
				addEventListener(event, config[event][element]);
				style.cursor = "pointer";
			}
		}
	}
	
	popUpOpen();
}

function pClose() {
	window.close();
}

function test() {
	alert(document.querySelectorAll(".menu"));
}

function popUpClose() {
	this.parentNode.style.display = "none";
}

function popUpOpen() {
	document.getElementById("popup").style.display = "block";
}