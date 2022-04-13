const { config } = require('./main')

config.capabilities = [
    {
        "appium:platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:udid": "emulator-5554",
        "appium:appActivity": "MainActivity",
        "appium:deviceName": "Pixel_4_API_31"
    },

    {
        "appium:platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:udid": "emulator-5556",
        "appium:appActivity": "MainActivity",
        "appium:deviceName": "Pixel_3_XL_API_30"
    }
]

exports.config = config