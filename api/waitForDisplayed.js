
describe("learning webdriverIO api", function () {

    it("wait for a element displays", function () {
        const FORM_ICON = "~Forms"
        const LOG_IN = "~Login"
        const SWITCH_BUTTON = "~switch"
        // 0. Go to the login form
        $(LOG_IN).click()

        // 1. Toggle the switch button
        $(SWITCH_BUTTON).waitForDisplayed({ timeout: 6000 })
        $(SWITCH_BUTTON).click()

        // 2. Wait a little to see result
        browser.pause(2000)
    })
})