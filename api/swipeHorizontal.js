describe("learning webdriverIO api", () => {

    it("Swipe horizontal", function () {

        // define element 
        const SWIPE_MENU = '~Swipe'
        const FORM_HEADER_TXT = '~Swipe-screen'

        // 0. click on swipe menu
        $(SWIPE_MENU).click()

        // 1. click on form header before swiping
        $(FORM_HEADER_TXT).click()

        // 2. perform swipe right to left. Define numbers first
        let { width, height } = driver.getWindowSize()
        let anchorPercentage = 0.7 // 50% of height screen
        let startPointPercentage = 0.9 // 90% of width screen for right to left
        let endPointPercentage = 0.1 // 10% of width screen for right to left

        let anchor = anchorPercentage * height
        let startPoint = startPointPercentage * width
        let endPoint = endPointPercentage * width

        // perform action: press at starting point, wait 1s, move to endpoint, then release swipe
        for (let swipeTime = 0; swipeTime < 5; swipeTime++) {
            driver.touchPerform([
                {
                    action: 'press',
                    options: {
                        x: startPoint,
                        y: anchor
                    }
                },
                {
                    action: 'wait',
                    options: {
                        ms: 5000
                    }
                },
                {
                    action: 'moveTo',
                    options: {
                        x: endPoint,
                        y: anchor
                    }
                },
                {
                    action: 'release',
                    options: {}
                }
            ])
        }
    })
})