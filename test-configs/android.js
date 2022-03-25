const { config } = require('./main')

config.capabilities = [
    {
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "appPackage": "com.wdiodemoapp",
        "udid": "emulator-5554",
        "appActivity": "MainActivity"
    }
]

exports.config = config