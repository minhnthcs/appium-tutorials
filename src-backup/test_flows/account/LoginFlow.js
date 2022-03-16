import Login from '../../page_objects/account/Login'
class LoginFlow {
    login_with_credentials(email, password) {
        Login.login_icon.click()
        Login.email_txt_field.setValue(email)
        Login.password_txt_field.setValue(password)
        Login.login_button.click()
    }

    verify_email_text_field(name) {
        chaiExpect(Login.email_txt_field.getText()).to.be.equal(name)
    }
}
export default new LoginFlow()