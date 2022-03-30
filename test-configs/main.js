let chai = require('chai');
const allure = require('allure-commandline')
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
        './src/test-scripts/account/TC1_Login.js'
    ],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableMochaHooks: true,
        issueLinkTemplate: "https:/mybug-tracker.com/{}",
        tmsLinkTemplate: "https:/my-test.com/{}",

    }]],
    before: function () {
        global.chaiExpect = chai.expect // to distinguish with 'expect' of webdriverio
    },

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            browser.takeScreenshot()
        }
    },
}