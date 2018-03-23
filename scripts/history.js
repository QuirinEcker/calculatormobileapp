"use strict";

function toggleHistory() {
	let historyContainer = document.getElementById("historyContainer");
	let spoiledSideMenu = document.getElementById("sidemenuContent");
    if (historyContainer.style.height === "0%") {
		if (spoiledSideMenu.style.height === "80%"){
			spoiledSideMenu.style.height = "0%"
		}
        historyContainer.style.height = "80%";
    } else {
        historyContainer.style.height = "0%";
    }
}

function storeHistory(historyline) {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(historyline));
	li.setAttribute("onclick", "fetchHistory(this)")
	let history = document.getElementById("history");
	history.appendChild(li);
}

function fetchHistory(entry) {
	reset();
	calculationNumbers = entry.textContent;
	output.innerHTML = calculationNumbers;
}