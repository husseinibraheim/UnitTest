import { PasswordErrors, passwordChecker } from "../../app/passwordChecker/passwordCheker"

describe('password checker test ', () => {
    let sut: passwordChecker
    beforeEach(() => {
        sut = new passwordChecker()
    })
    it("password with less than 8 chars should be invalid", () => {

        const actual = sut.checkPassword('1234567')

        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.SHORT)
    })


    it("password with more than 8 chars should be true", () => {

        const actual = sut.checkPassword('1234567812As39')

        expect(actual.valid).toBe(true)
    })

    it("password has no upper case letters should be invalid", () => {

        const actual = sut.checkPassword('1234abc')

        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    })
    it("password has upper case letters should be valid", () => {

        const actual = sut.checkPassword('1234abcD')

        expect(actual.valid).toBe(true)
    })

    it("password has no lower case letters should be invalid", () => {

        const actual = sut.checkPassword('1234AVS')


        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    })
    it("password has lower case letters should be valid", () => {

        const actual = sut.checkPassword('1234AsaAAcc')

        expect(actual.valid).toBe(true)

    })
})