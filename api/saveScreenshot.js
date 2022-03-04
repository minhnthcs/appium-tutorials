
describe("learning webdriverIO api", () => {

    it("should", () => {

        const FORM_ICON = "~Forms"
        const SWITCH_BUTTON = "~switch"
        // 0. go to the form field and
        $(FORM_ICON).click()

        // 1. take a picture - wholescreen
        browser.saveScreenshot("./screenshot/API_learning_saveSreenshot.png")

        // 2. take a picture - switch button (a element)
        $(SWITCH_BUTTON).saveScreenshot("./screenshot/switchBtn.png")

    })
})