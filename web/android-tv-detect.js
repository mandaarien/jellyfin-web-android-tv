// Funktion zur Erkennung von Android TV
function detectAndroidTV() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("android") && userAgent.includes("tv")) {
        document.body.classList.add("android-tv");
    }
}

// Erkenne Android TV nach dem Laden der Seite
window.onload = detectAndroidTV;