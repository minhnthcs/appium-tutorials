// Declare Selector values on the page

const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'
const LOGIN_BTN = '~button-LOGIN'


class loginWithGlobalWait {

    wait_till_screen_display() {
        $(EMAIL_TXT_FIELD).waitForDisplayed({ timeout: 5000 })
    }
    get email_txt_field() {

        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field() {
        return $(PASSWORD_TXT_FIELD)
    }

    get login_btn() {

        return $(LOGIN_BTN)
    }
}

// import an instance NOT a class
export default new loginWithGlobalWait()