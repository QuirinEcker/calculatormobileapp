function toggleHistory() {
	let historyContainer = document.getElementById("historyContainer");
    if (historyContainer.style.display === "none") {
        historyContainer.style.display = "block";
    } else {
        historyContainer.style.display = "none";
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