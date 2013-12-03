window.onload = init;

config = {
	click: {
		closeBtn: pClose,
		closeMenuItem: pClose,
		closeBtnPopup: popUpClose,
		test: test
	}
};

function init() {
	for (var ev in config) {
		for (var el in config[ev]) {
			var domEl = document.getElementById(el);
			with (domEl) {
				addEventListener(ev, config.click[el]);
				style.cursor = "pointer";
			}
		}
	}
	
	var menus = document.querySelectorAll(".menu");
	for (var m=0; m<menus.length; m++) {
		
	}
}

function pClose() {
	window.close();
}

function test() {
	alert(document.querySelectorAll(".menu"));
}

function popUpClose() {
	document.getElementById("popup").style.display = "none";
}