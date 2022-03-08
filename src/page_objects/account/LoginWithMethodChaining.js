import Dashboard from '../../page_objects/account/Dashboard'
const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'
const LOGIN_BTN = '~button-LOGIN'

class LogingWithMethodChaining {

    waitScreenDisplay() {
        $(EMAIL_TXT_FIELD).waitForDisplayed({ timeout: 5000 })
        return this
    }
    inputEmail(email) {

        $(EMAIL_TXT_FIELD).setValue(email)
        return this

    }

    inputPass(password) {
        $(PASSWORD_TXT_FIELD).setValue(password)
        return this
    }

    clickLogin() {
        $(LOGIN_BTN).click();
        return Dashboard
    }
}
export default LogingWithMethodChaining;