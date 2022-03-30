const { config } = require('./main')

config.capabilities = [
    {
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "appPackage": "com.wdiodemoapp",
        "udid": "emulator-5554",
        "appActivity": "MainActivity",
        "systemPort": 6001,
        port: 6000,
        deviceName: "Pixel_4_API_31"
    },

    {
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "appPackage": "com.wdiodemoapp",
        "udid": "emulator-5556",
        "appActivity": "MainActivity",
        "systemPort": 7001,
        port: 7000,
        deviceName: "Pixel_3_XL_API_30"
    }
]

exports.config = config