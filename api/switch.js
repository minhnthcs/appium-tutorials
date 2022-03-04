
describe("learning webdriverIO api", function () {

    it("switch button api", function () {

        const FORM_ICON = "~Forms"
        const SWITCH_BUTTON = "~switch"
        // 0. Go to the forms field and
        $(FORM_ICON).click()

        // 1. Toggle the switch button api
        $(SWITCH_BUTTON).click()

        // 2. Wait a little to see result
        browser.pause(2000)
    })
})