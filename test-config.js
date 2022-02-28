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
        './playWithMocha.js'
    ],
    capabilities: [
        {
            "platformName": "Android",
            "automationName": "UiAutomator2",
            "appPackage": "arevo.scooter_dashboard",
            "udid": "5a99c71bf31f7246",
            "appActivity": "MainActivity"
        }
    ]
}