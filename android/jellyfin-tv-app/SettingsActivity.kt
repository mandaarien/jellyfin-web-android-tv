
package com.example.jellyfintv

import android.content.Intent
import android.os.Bundle
import android.widget.*
import androidx.activity.ComponentActivity

class SettingsActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val layout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(40, 60, 40, 60)
        }

        val serverInput = EditText(this).apply {
            hint = "Jellyfin Server URL"
        }

        val cssOptions = arrayOf("minimal", "standard", "full")
        val cssSpinner = Spinner(this).apply {
            adapter = ArrayAdapter(this@SettingsActivity, android.R.layout.simple_spinner_dropdown_item, cssOptions)
        }

        val focusOptions = arrayOf("scale", "outline", "subtle")
        val focusSpinner = Spinner(this).apply {
            adapter = ArrayAdapter(this@SettingsActivity, android.R.layout.simple_spinner_dropdown_item, focusOptions)
        }

        val saveButton = Button(this).apply {
            text = "Speichern und starten"
            setOnClickListener {
                val prefs = getSharedPreferences("tvprefs", MODE_PRIVATE).edit()
                prefs.putString("server_url", serverInput.text.toString())
                prefs.putString("css_mode", cssSpinner.selectedItem.toString())
                prefs.putString("focus_mode", focusSpinner.selectedItem.toString())
                prefs.apply()
                startActivity(Intent(this@SettingsActivity, MainActivity::class.java))
                finish()
            }
        }

        layout.apply {
            addView(TextView(this@SettingsActivity).apply { text = "Server URL:" })
            addView(serverInput)
            addView(TextView(this@SettingsActivity).apply { text = "CSS Modus:" })
            addView(cssSpinner)
            addView(TextView(this@SettingsActivity).apply { text = "Fokus-Stil:" })
            addView(focusSpinner)
            addView(saveButton)
        }

        setContentView(layout)
    }
}
