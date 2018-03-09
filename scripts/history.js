function toggleHistory() {
	let history = document.getElementById("history");
    if (history.style.display === "none") {
        history.style.display = "block";
    } else {
        history.style.display = "none";
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
	alert(entry.textContent);
	calculationNumbers = entry.textContent;
	output.innerHTML = calculationNumbers;
}