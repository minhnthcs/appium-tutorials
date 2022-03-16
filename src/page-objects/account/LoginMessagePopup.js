const SUCCESS_MESSAGE = '//*[@resource-id="android:id/alertTitle"]'
const LOGIN_MESSAGE = '//*[@resource-id="android:id/message"]'
const OK_BTN = '//*[@resource-id="android:id/button1"]'

class LoginMessagePopup {

    get success_message() {
        $(SUCCESS_MESSAGE).waitForDisplayed()
        return $(SUCCESS_MESSAGE)
    }

    get login_message() {
        $(LOGIN_MESSAGE).waitForDisplayed()
        return $(LOGIN_MESSAGE)
    }

    get ok_btn() {
        $(OK_BTN).waitForDisplayed()
        return $(OK_BTN)
    }
}
export default new LoginMessagePopup()