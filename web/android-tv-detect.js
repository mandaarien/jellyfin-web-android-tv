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

(function() {
    const userAgent = navigator.userAgent.toLowerCase();

    const isAndroidTV =
        userAgent.includes("android") &&
        (userAgent.includes("tv") || userAgent.includes("aft") || userAgent.includes("shield"));

    if (isAndroidTV) {
        document.documentElement.classList.add("android-tv");
        console.log("[Jellyfin-TV] Android TV detected – .android-tv class added.");
    } else {
        console.log("[Jellyfin-TV] Android TV NOT detected – default web UI.");
    }
})();