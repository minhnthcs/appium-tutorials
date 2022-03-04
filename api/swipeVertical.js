describe("learning webdriverIO api", () => {

    it("learn swipe vertical action", function () {

        const ACTIVE_BTN = "~button-Active"
        const FORM_ICON = "~Forms"
        const FORM_COMPONENT = "~Forms-screen"
        // 0. click on Forms icon button
        $(FORM_ICON).click()



        // 1. Swipe up screen vertically
        const { width, height } = driver.getWindowSize()
        console.log(driver.getWindowSize())
        const anchorPercentage = 50 //50% * width
        const startPointPercentage = 90 // 90% * height
        const endPointPercentage = 10 // 10% * height

        const anchor = anchorPercentage * width / 100
        const startPoint = startPointPercentage * height / 100
        const endPoint = endPointPercentage * height / 100

        // Touch on screen before doing touch
        $(FORM_COMPONENT).click()

        // Press on start point, wait 1s, moveTo endPoint , release
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])

        // 2. click on ACTIVE button
        $(ACTIVE_BTN).click()
    })
})