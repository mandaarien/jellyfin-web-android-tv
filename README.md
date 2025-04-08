# Jellyfin Web Android TV

An Android TV WebView shell app that runs the Jellyfin web client with custom CSS and navigation optimizations for remote control use.

A lightweight Android TV wrapper for Jellyfin Web, optimized for TV navigation and theming.

## Features

- Native-feeling TV interface using WebView
- Custom CSS themes and focus styles
- Server selection and setup screen
- Hardware-accelerated video playback

## Project Structure

This app uses a WebView to load a local setup page which redirects to your self-hosted Jellyfin instance with custom styling parameters.


## 🚀 Features

- Native Android TV support with WebView
- Hardware-accelerated video and audio playback
- Server URL, CSS mode, and focus style configurable via built-in setup screen
- CSS injection and theme switching via GitHub or self-hosted CDN
- Full remote navigation with tailored UI feedback (scale, outlines, opacity)

## 🖼️ Screenshots

Coming soon...

## 📦 Installation

Wenn du Jellyfin selbst hostest, kannst du das Skript direkt in deine index.html injizieren:

html
Kopieren
Bearbeiten
<script src="https://mandaarien.github.io/jellyfin-web-android-tv/web/tv-setup.js"></script>
Oder über einen nginx-Proxy / Reverse Proxy injecten – je nach Setup.

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
