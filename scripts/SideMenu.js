function toggleSideMenu() {
	let sidemenu = document.getElementById("sidemenuContent");
	let spoiledHistory = document.getElementById("historyContainer");
    if (sidemenu.style.display === "none") {
		if (spoiledHistory.style.display === "block") {
			spoiledHistory.style.display = "none"
		}
        sidemenu.style.display = "block";
    } else {
        sidemenu.style.display = "none";
    }
}