import CredentialForm from './CredentialForm'
const LOGIN_BTN = '~button-LOGIN'
class Login extends CredentialForm {

    get login_btn() {
        $(LOGIN_BTN).waitForDisplayed()
        return $(LOGIN_BTN)
    }

}

export default new Login()