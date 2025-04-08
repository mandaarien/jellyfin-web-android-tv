function isAndroidTV() {
    const userAgent = navigator.userAgent.toLowerCase();

    const isTV =
        userAgent.includes("android") &&
        (userAgent.includes("tv") ||
            userAgent.includes("aft") ||
            userAgent.includes("shield"));

    console.log(`[Jellyfin-TV] User-Agent: ${userAgent}`);
    console.log(`[Jellyfin-TV] Android TV detected: ${isTV}`);

    return isTV;
}

function loadCSS(name) {
    const href = `https://cdn.jsdelivr.net/gh/mandaarien/jellyfin-web-android-tv/web/${name}`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);

    console.log(`[Jellyfin-TV] Loaded CSS: ${name}`);
}

window.addEventListener("DOMContentLoaded", () => {
    if (!isAndroidTV()) {
        console.log("[Jellyfin-TV] Not an Android TV device – skipping TV UI styles.");
        return;
    }

    document.body.classList.add("android-tv");
    console.log("[Jellyfin-TV] .android-tv class added to <body>");

    // Base styles
    loadCSS("tv.css");

    // Fokusstil aus localStorage
    const focusStyle = localStorage.getItem("jellyfin_focus") || "focus-scale";
    loadCSS(`${focusStyle}.css`);

    // Theme aus localStorage
    const theme = localStorage.getItem("jellyfin_theme") || "theme-standard";
    loadCSS(`${theme}.css`);
});