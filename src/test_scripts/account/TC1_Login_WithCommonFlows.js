import login_flow from '../../test_flows/account/LoginFlow'
import testData from '../../test_data/account/TC1_Login_WithCommonFlows'
describe("Login functionality", () => {

    it("should check email text field ", () => {

        const { VALID_CREDS } = testData.loginData
        const { email, password } = VALID_CREDS

        login_flow.login_with_credentials(email, password)
        login_flow.verify_email_text_field(email)

    })

})