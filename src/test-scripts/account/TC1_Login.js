import LoginFlow from '../../test-flows/account/LoginFlow'
import { INVALID_CREDS, VALID_CREDS } from '../../test-data/account/TC1_Login'
import allureReporter from '@wdio/allure-reporter'

describe('Account function', () => {
    it('should login successfully with valid credential', () => {
        allureReporter.addTestId("TC_001")
        allureReporter.addSeverity("critical")
        let { email, password } = VALID_CREDS
        let login = new LoginFlow(email, password)
        login
            .login_with_credentials()
            .verify_login_successfully()
    })

    it('should see valid message when login with wrong creds', function () {
        allureReporter.addIssue("TC_002")
        allureReporter.addTestId("002")
        expect(true).toBe(false)
        let { email, password } = INVALID_CREDS
        let login = new LoginFlow(email, password)
        login
            .login_with_credentials()
            .verify_login_unsuccessfully()
    })
})