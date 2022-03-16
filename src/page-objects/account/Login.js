import CredentialForm from './CredentialForm'
const LOGIN_BTN = '~button-LOGIN'
class Login extends CredentialForm {

    wai_till_screen_displayed() {
        $(LOGIN_BTN).waitForDisplayed()
    }

    get login_btn() {
        $(LOGIN_BTN).waitForDisplayed()
        return $(LOGIN_BTN)
    }

}

export default new Login()