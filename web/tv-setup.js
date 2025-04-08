
// tv-setup.js - Fügt dem Body Datenattribute basierend auf URL-Parametern hinzu
const params = new URLSearchParams(window.location.search);
document.body.setAttribute("data-tvcss", params.get("tvcss") || "standard");
document.body.setAttribute("data-focus", params.get("focus") || "scale");
