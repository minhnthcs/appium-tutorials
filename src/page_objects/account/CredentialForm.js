const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'
const LOGIN_ICON_HOME_SCREEN = '~Login'

class CredentialForm {

    get email_txt_field() {

        $(EMAIL_TXT_FIELD).waitForDisplayed();
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field() {
        $(PASSWORD_TXT_FIELD).waitForDisplayed();
        return $(PASSWORD_TXT_FIELD)
    }

    get login_icon() {
        $(LOGIN_ICON_HOME_SCREEN).waitForDisplayed();
        return $(LOGIN_ICON_HOME_SCREEN)
    }

}

export default CredentialForm