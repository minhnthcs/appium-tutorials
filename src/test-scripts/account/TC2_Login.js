import LoginFlow from '../../test-flows/account/LoginFlow'
import { INVALID_CREDS, VALID_CREDS } from '../../test-data/account/TC1_Login'
import allureReporter from '@wdio/allure-reporter'

describe(`Smoke test for ${browser.capabilities.deviceName}`, () => {
    it('smoke 001', () => {
        expect(true).toBe(true)
    })

    it('smoke 002', () => {
        expect(true).toBe(true)
    })
})