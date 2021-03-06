const HOME_ICON = '~Home-screen'
const WEBVIEW_ICON = '~Webview'
const LOGIN_ICON = '~Login'
const FORUMS_ICON = '~Forms'
const SWIPE_ICON = '~Forms'
const DRAG_ICON = '~Drag'

class NavBar {

    wai_till_screen_displayed() {
        $(HOME_ICON).waitForDisplayed()
    }

    get home_icon() {
        $(HOME_ICON).waitForDisplayed()
        return $(HOME_ICON)
    }

    get login_icon() {
        $(LOGIN_ICON).waitForDisplayed()
        return $(LOGIN_ICON)
    }

    get webview_icon() {
        return $(WEBVIEW_ICON)
    }

}

export default new NavBar()