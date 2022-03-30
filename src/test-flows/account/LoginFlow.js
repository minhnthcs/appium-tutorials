import Login from '../../page-objects/account/Login'
import NavBar from '../../page-objects/common/NavBar'
import LoginMessagePopup from '../../page-objects/account/LoginMessagePopup'
import allureReporter from '@wdio/allure-reporter'
class LoginFlow {

    // class constructor
    constructor(email, pass) {
        this.email = email;
        this.password = pass;
    }

    login_with_credentials() {
        if (!Login.is_on_login_screen()) {
            NavBar.login_icon.click()
        }

        allureReporter.addStep(`input email as ${this.email}`)
        Login.email_txt_field.setValue(this.email)
        allureReporter.addStep(`input password as ${this.password}`)
        Login.password_txt_field.setValue(this.password)
        allureReporter.addStep(`click on Login button`)
        Login.login_btn.click()
        return this
    }

    verify_login_successfully() {
        let expect_message_title = "Success"
        let expect_message_content = "You are logged in!"
        chaiExpect(LoginMessagePopup.success_message.getText()).to.be.equal(expect_message_title)
        chaiExpect(LoginMessagePopup.login_message.getText()).to.be.equal(expect_message_content)

        LoginMessagePopup.ok_btn.click()
    }

    verify_login_unsuccessfully() {

        // - Login_003: Make sure "Please enter a valid email address" displayed() ONLY
        if (!this.email && this.password.length >= 8) {

            chaiExpect(Login.is_invalid_email_format_msg_displayed()).to.equal(true)
            chaiExpect(Login.is_invalid_password_format_msg_displayed()).to.equal(false)

        }
        // - Login_004: Make sure "Please enter a valid password address" displayed
        else if (this.email.length > 0 && this.password.length < 8) {
            chaiExpect(Login.is_invalid_email_format_msg_displayed()).to.equal(false)
            chaiExpect(Login.is_invalid_password_format_msg_displayed()).to.equal(true)
        }
        // - Login_002: Make sure both "Please enter a valid email address" and "Please enter a valid password address" displayed
        else {

            chaiExpect(Login.is_invalid_email_format_msg_displayed()).to.equal(true)
            chaiExpect(Login.is_invalid_password_format_msg_displayed()).to.equal(true)
        }


    }
}

export default LoginFlow