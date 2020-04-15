// ----
// Constants
// ----

const GenPass_Output = document.getElementById('PasswordInput')
const GenPass_Button = document.getElementById('GeneratePassword')

var setToCopy = 0

// ----
// Generating random password
// ----

function GeneratePassword() {
	GenPass_Output.value = (Math.random().toString(36).substring(2) +
		Math.random().toString(12).substring(2).toUpperCase())

	GenPass_Button.innerHTML = "Copy to clipboard"

	// Copying password to clipboard
	if (setToCopy == 0)
		setToCopy = 1

	else if (setToCopy == 1) {
		GenPass_Output.select()
		GenPass_Output.setSelectionRange(0, 99999)

		document.execCommand("copy")

		alert('Copied password: ' + GenPass_Output.value)

		setToCopy = 0
		GenPass_Button.innerHTML = "Generate Password"
	}
}