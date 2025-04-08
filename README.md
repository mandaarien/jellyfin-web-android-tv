# Jellyfin Web Android TV

An Android TV WebView shell app that runs the Jellyfin web client with custom CSS and navigation optimizations for remote control use.

## 🚀 Features

- Native Android TV support with WebView
- Hardware-accelerated video and audio playback
- Server URL, CSS mode, and focus style configurable via built-in setup screen
- CSS injection and theme switching via GitHub or self-hosted CDN
- Full remote navigation with tailored UI feedback (scale, outlines, opacity)

## 🖼️ Screenshots

Coming soon...

## 📦 Installation

🔧 Configuration
At first launch, the app will ask you to:

Enter your Jellyfin server URL

Select a CSS style (minimal, standard, full)

Choose a focus feedback mode (scale, outline, subtle)

The app saves your settings and loads Jellyfin with custom parameters:

https://yourserver.com/?tvcss=standard&focus=scale


🎨 CSS Customization

You can host your CSS and JavaScript on GitHub Pages or locally.
Example to include in Jellyfin’s dashboard:

@import url("https://mandaarien.github.io/jellyfin-web-android-tv/web/tv.css");


### ✅ `LICENSE` (MIT)
