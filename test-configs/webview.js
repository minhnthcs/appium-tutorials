const { config } = require('./main')
config.capabilities = [{
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "appPackage": "com.wdiodemoapp",
    "udid": "emulator-5554",
    "appActivity": "MainActivity",
    // "systemPort": 6001,
    // port: 6000,
    // deviceName: "Pixel_4_API_31"
}]

config.specs = [
    './src/test-scripts/webview/TC_003_Webview.js'
]

exports.config = config