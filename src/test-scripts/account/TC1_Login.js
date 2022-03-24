import LoginFlow from '../../test-flows/account/LoginFlow'
import { INVALID_CREDS, VALID_CREDS } from '../../test-data/account/TC1_Login'

describe('Account function', () => {
    it('should login successfully with valid credential', () => {
        let { email, password } = VALID_CREDS
        let login = new LoginFlow(email, password)
        login
            .login_with_credentials()
            .verify_login_successfully()
    })

    it('should see valid message when login with wrong creds', function () {
        let { email, password } = INVALID_CREDS
        let login = new LoginFlow(email, password)
        login
            .login_with_credentials()
            .verify_login_unsuccessfully()
    })
})