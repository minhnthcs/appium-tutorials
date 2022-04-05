// const { config } = require('./main.js')
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

config.suites = {
    smokeTest: [
        './src/test-scripts/account/TC2_Login.js'
    ],
    regressionTest: [
        './src/test-scripts/account/TC1_Login.js'
    ]
}

exports.config = config