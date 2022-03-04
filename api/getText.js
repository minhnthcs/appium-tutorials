
describe("learning webdriverIO api", function () {
    it("learn getValue api", function () {

        const FORM_ICON = "~Forms"
        const INPUT_FIELD = "~text-input"
        const YOU_HAVED_TYPED_FIELD = "~input-text-result"

        // 0. Click on forms icon from Home screen
        $(FORM_ICON).click()

        // 1. Try to input some values in the text field
        $(INPUT_FIELD).setValue("The Hello World")

        // 2. Get the value from the field [you have typed]
        let result = $(YOU_HAVED_TYPED_FIELD).getText()

        browser.pause(3000)

        // 3. Print out that value
        console.log(result)

    })
})