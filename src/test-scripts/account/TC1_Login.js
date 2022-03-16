import LoginFlow from '../../test-flows/account/LoginFlow'
import { VALID_CREDS, INVALID_CREDS } from '../../test-data/account/TC1_Login'

describe('Account function', () => {
    it('should login successfully with valid credential', () => {
        let { email, password } = VALID_CREDS
        let login = new LoginFlow(email, password)
        login
            .login_with_credentials()
            .verify_success_successfully()
    })
})