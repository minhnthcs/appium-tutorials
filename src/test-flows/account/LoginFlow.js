import Login from '../../page-objects/account/Login'
import NavBar from '../../page-objects/common/NavBar'
import LoginMessagePopup from '../../page-objects/account/LoginMessagePopup'
class LoginFlow {

    // class constructor
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }

    login_with_credentials() {
        NavBar.login_icon.click()
        Login.email_txt_field.setValue(this.email)
        Login.password_txt_field.setValue(this.pass)
        Login.login_btn.click()
        return this
    }

    verify_success_successfully() {
        let expect_message_title = "Success"
        let expect_message_content = "You are logged in!"
        chaiExpect(LoginMessagePopup.success_message.getText()).to.be.equal(expect_message_title)
        chaiExpect(LoginMessagePopup.login_message.getText()).to.be.equal(expect_message_content)
    }
}

export default LoginFlow