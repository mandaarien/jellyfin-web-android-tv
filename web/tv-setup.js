(function() {
    // Utility: get query param
    function getQueryParam(name) {
        const url = new URL(window.location.href);
        return url.searchParams.get(name);
    }

    // Get settings from query
    const focusMode = getQueryParam('tvcss') || 'focus-scale'; // default fallback
    const themeMode = getQueryParam('theme') || 'theme-dark';

    // Inject body classes
    document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add(focusMode);
        document.body.classList.add(themeMode);

        // Inject CSS if not already loaded
        const cssUrl = 'https://cdn.jsdelivr.net/gh/mandaarien/jellyfin-web-android-tv/web/tv.css';
        const alreadyLoaded = [...document.styleSheets].some(sheet => sheet.href === cssUrl);
        if (!alreadyLoaded) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssUrl;
            document.head.appendChild(link);
        }
    });
})();