const card1 = document.getElementById ("0");
const card2 = document.getElementById ("1");
const card3 = document.getElementById ("2");
const card4 = document.getElementById ("3");
const card5 = document.getElementById ("4");
const counter = document.getElementById ("counter");
const clearButton = document.getElementById ("clear-point-button");

var point = 0;

window.onload = () => {
	clearButton.onclick = () => {
		clearStorage();
	};

	card1.addEventListener ("click", () => {
		if (localStorage.point1 == "false") {
			localStorage.totalPoint = parseInt (localStorage.totalPoint) + 10;
		};
		localStorage.point1 = "true";
	});

	card2.addEventListener ("click", () => {
		if (localStorage.point2 == "false") {
			localStorage.totalPoint = parseInt (localStorage.totalPoint) + 10;
		};
		localStorage.point2 = "true";
	});
	
	card3.addEventListener ("click", () => {
		if (localStorage.point3 == "false") {
			localStorage.totalPoint = parseInt (localStorage.totalPoint) + 10;
		};
		localStorage.point3 = "true";
	});
	
	card4.addEventListener ("click", () => {
		if (localStorage.point4 == "false") {
			localStorage.totalPoint = parseInt (localStorage.totalPoint) + 10;
		};
		localStorage.point3 = "true";
	});
	
	card5.addEventListener ("click", () => {
		if (localStorage.point5 == "false") {
			localStorage.totalPoint = parseInt (localStorage.totalPoint) + 10;
		};
		localStorage.point5 = "true";
	});

	//alert (localStorage.getItem("totalPoint"));
	counter.innerText = localStorage.getItem("totalPoint") + "p";
};

function clearStorage() {
	localStorage.clear();
	for (var i = 1; i < 6; i++) {
		localStorage.setItem ("point" + i, false);
	}
	localStorage.setItem ("totalPoint", 0);
	
	counter.innerText = localStorage.totalPoint + "p";
}