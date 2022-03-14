// Declare Selector values on the page
import CredentialForm from "./CredentialForm";
const LOGIN_BTN = '~button-LOGIN'
class Login extends CredentialForm {

    get login_button() {
        $(LOGIN_BTN).waitForDisplayed()
        return $(LOGIN_BTN);
    }

    click_loginBtn() {
        this.login_button.click()
        return this
    }

}

// import an instance NOT a class
export default new Login()