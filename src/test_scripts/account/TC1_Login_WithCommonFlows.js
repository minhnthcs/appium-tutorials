import login_flow from '../../test_flows/account/LoginFlow'
describe("Login functionality", () => {

    it("should check email text field ", () => {

        let email = 'abc@abc'
        let password = '...'

        login_flow.login_with_credentials(email, password)
        login_flow.verify_email_text_field(email)

    })

})