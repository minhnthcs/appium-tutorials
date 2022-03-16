const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'

class CredentialForm {

    wai_till_scree_displayed() {
        $(EMAIL_TXT_FIELD).waitForDisplayed()
    }

    get email_txt_field() {
        $(EMAIL_TXT_FIELD).waitForDisplayed()
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field() {
        $(PASSWORD_TXT_FIELD).waitForDisplayed()
        return $(PASSWORD_TXT_FIELD)
    }
}

export default CredentialForm