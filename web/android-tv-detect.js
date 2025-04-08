function isAndroidTV() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes("android") && ua.includes("tv");
}

function loadCSS(name) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://cdn.jsdelivr.net/gh/mandaarien/jellyfin-web-android-tv/web/${name}`;
    document.head.appendChild(link);
}

window.addEventListener("DOMContentLoaded", () => {
    if (!isAndroidTV()) return;

    document.body.classList.add("android-tv");

    // CSS-Basis für Android TV
    loadCSS("tv.css");

    // Fokusstil aus localStorage
    const focusStyle = localStorage.getItem("jellyfin_focus") || "focus-scale";
    loadCSS(`${focusStyle}.css`);

    // Theme aus localStorage
    const theme = localStorage.getItem("jellyfin_theme") || "theme-standard";
    loadCSS(`${theme}.css`);
});