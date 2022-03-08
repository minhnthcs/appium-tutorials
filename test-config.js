exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    host: 'localhost',
    logLevel: "info",
    framework: "mocha",
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,
    sync: true,
    specs: [
        // './src/test_scripts/account/TC_001_Login_PageObject_01.js'
        './src/test_scripts/account/TC_001_Login_PageObject_Global_Wait.js'
    ],
    capabilities: [
        {
            "platformName": "Android",
            "automationName": "UiAutomator2",
            "appPackage": "com.wdiodemoapp",
            "udid": "emulator-5554",
            "appActivity": "MainActivity"
        }
    ]
}