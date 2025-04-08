
package com.example.jellyfintv

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity

class MainActivity : ComponentActivity() {

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val prefs = getSharedPreferences("tvprefs", MODE_PRIVATE)
        val server = prefs.getString("server_url", null)

        if (server.isNullOrEmpty()) {
            startActivity(Intent(this, SettingsActivity::class.java))
            finish()
            return
        }

        val cssMode = prefs.getString("css_mode", "standard")
        val focusMode = prefs.getString("focus_mode", "scale")
        val finalUrl = "$server?tvcss=$cssMode&focus=$focusMode"

        val webView = WebView(this)
        webView.setLayerType(WebView.LAYER_TYPE_HARDWARE, null)
        setContentView(webView)

        val webSettings: WebSettings = webView.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.mediaPlaybackRequiresUserGesture = false
        webSettings.setAppCacheEnabled(true)
        webSettings.setSupportMultipleWindows(false)
        webSettings.allowFileAccess = true

        webView.webViewClient = WebViewClient()
        webView.loadUrl(finalUrl)
    }
}
