import LoginPage from '../../page_objects/account/Login'

describe('Account function', () => {

    it('should use inheritance PO successfully', () => {

        // 1. Click on Login icon from home page_objects
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        $(LOGIN_ICON_HOME_SCREEN).click();

        // 2. User Login Page Object to interact with elements
        // let loginPage = new LoginPage()
        LoginPage.wait_till_screen_display()
        LoginPage.email_txt_field.setValue('teo')
        LoginPage.password_txt_field.setValue('ti')
        LoginPage.login_btn.click()
    })
})