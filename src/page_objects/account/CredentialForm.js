const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'

class CredentialForm {

    get email_txt_field() {

        $(EMAIL_TXT_FIELD).waitForDisplayed();
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field() {
        $(PASSWORD_TXT_FIELD).waitForDisplayed();
        return $(PASSWORD_TXT_FIELD)
    }

    waitScreenDisplay() {
        $(EMAIL_TXT_FIELD).waitForDisplayed()
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

    verify_email_text_displayed(value) {
        expect(this.email_txt_field).toHaveText(value, { trim: true })
        chaiExpect(this.email_txt_field.getText()).to.be.equal(value, "[ERR] the email field value is incorrect")
    }
}

export default CredentialForm