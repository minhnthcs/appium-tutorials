
describe("learning webdriverIO api", function () {
    it("should input email and password successfully", function () {
        const LOG_IN = "~Login" //For Android the accessibility id maps to the content-description for the element
        const EMAIL = '~input-email'
        const PASSWORD = '~input-password'
        const LOGIN_BUTTON = "~button-LOGIN"
        $(LOG_IN).click()
        browser.pause(3000)

        $(EMAIL).setValue("Minh@gmail.com")
        $(PASSWORD).setValue("abcxyz@123")
        $(LOGIN_BUTTON).click()
    })
})