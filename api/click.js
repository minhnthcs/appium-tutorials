describe("learning webdriverIO api", function () {
    it("should login successfully", function () {
        const LOG_IN = "~Login" //For Android the accessibility id maps to the content-description for the element
        $(LOG_IN).click()
        browser.pause(3000)
    })
})