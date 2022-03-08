
import LoginPage from '../../page_objects/account/Login'
describe("Account function", () => {

    it("should use successfully method chaining", () => {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click();


        LoginPage
            .waitScreenDisplay()
            .inputEmail("teo")
            .inputPass("ti")
            .clickLogin()

        browser.pause(2000)
    })
})