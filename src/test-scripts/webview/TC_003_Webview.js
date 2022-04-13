import NavBar from '../../page-objects/common/NavBar'
const DOCS_LINK = '=Docs'
describe("Webview on ${browser.capabilities.deviceName}", () => {
    it("should get all contexts", () => {
        NavBar.webview_icon.click()
        let contexts = driver.getContexts()
        console.log("All contexts: " + contexts)

        driver.switchContext(contexts[1])
        $("button[aria-label='Navigation bar toggle']").click()

        $(DOCS_LINK).waitForDisplayed({ timeout: 30000 })
        $(DOCS_LINK).click()
        browser.pause(10000)
    })
})