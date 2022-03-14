let chai = require('chai');
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
    waitforTimeout: 10000,
    maxInstances: 1,
    sync: true,
    specs: [
        './src/test_scripts/account/TC1_Login_WithCommonFlows.js'
    ],
    capabilities: [
        {
            "platformName": "Android",
            "automationName": "UiAutomator2",
            "appPackage": "com.wdiodemoapp",
            "udid": "emulator-5554",
            "appActivity": "MainActivity"
        }
    ],

    before: function () {
        global.chaiExpect = chai.expect // to distinguish with 'expect' of webdriverio
    }
}