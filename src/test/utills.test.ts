import { StringUtils, getStringInfo, toUpperCase } from "../app/utils"


describe('util test', () => {

    test("Should return upper case of valid string ", () => {
        //Arrange : 
        // sut = system under test 
        const sut = toUpperCase
        const expected = "ABC"

        //Act :
        const actual = toUpperCase('abc')

        //Assert
        expect(actual).toBe(expected)
    })
    describe("StringUtils test", () => {

        //Jest Hooks
        let sut: StringUtils;
        beforeEach(() => {
            sut = new StringUtils()
            console.log("before Hook")
        })

        afterEach(() => {
            console.log("after each")


        })

        it("should return ToUpperCase", () => {
            const actual = sut.toUpperCase("abv")

            expect(actual).toBe("ABV")
        })
        // jest errors
        it("should throw error on invalid argument , 1 - function & 2 - arrow function", () => {
            function expectError() {
                const actual = sut.toUpperCase('')
            }
            expect(expectError).toThrow
            expect(() => sut.toUpperCase('')).toThrowError("Invalid argument")
        })

        it("should throw error on invalid argument ,3 -  try catch block", () => {
            // the problem in try catch block , if there isn't throw error in the function declaration then it won't fail the test
            // to avoid this problem we should use done("with specific error in try block") and done() without argument in catch block
            try {
                sut.toUpperCase('')
                // done("invalid argument");
            } catch (error) {
                expect(error).toBeInstanceOf(Error)
                expect(error).toHaveProperty("message", "Invalid argument")
                // done();
            }
        })

    })



    //Multiple inputs    describe('toUpperCase examples', () => {
    it.each([
        { input: "abc", expected: "ABC" },
        { input: "hello", expected: "HELLO" },
        { input: "hey", expected: "HEY" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
        const actual = toUpperCase(input)
        expect(actual).toBe(expected)
    })

})

// jest Matches
describe('get string info should', () => {

    test('should return right length', () => {
        const actual = getStringInfo("my-string")
        expect(actual.characters.length).toEqual(9)
        expect(actual.characters).toHaveLength(9)
        expect(actual.length).toEqual(9)
    })

    test('should return upper case', () => {
        const actual = getStringInfo('My-String');
        expect(actual.upperCase).toBe('MY-STRING');
    })

    test('return right lower case', () => {
        const actual = getStringInfo('My-String');
        expect(actual.lowerCase).toBe('my-string');
    });

    test('return right characters', () => {
        const actual = getStringInfo('My-String');
        expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
        expect(actual.characters).toContain<string>('M');
        expect(actual.characters).toEqual(
            expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
        );
    });

    test('return defined extra info', () => {
        const actual = getStringInfo('My-String');
        expect(actual.extraInfo).toBeDefined();
    });

    test('return right extra info', () => {
        const actual = getStringInfo('My-String');
        expect(actual.extraInfo).toEqual({})
    });

})

//     it.only("should return info of valid string", () => {
//         const sut = getStringInfo

//         test("test")
//         const actual = getStringInfo("my-string")
//         //for primitive value
//         expect(actual.lowerCase).toBe("my-string")
//         //for object
//         expect(actual.extraInfo).toEqual({})

//         expect(actual.characters).toContain<string>("s")
//         //Check if the array contains elements 
//         expect(actual.characters).toEqual(
//             expect.arrayContaining(['m', 'y', '-', 's', 't', 'r', 'i', 'n'])
//         )
//         expect(actual.extraInfo).not.toBe(undefined)
//         expect(actual.extraInfo).not.toBeUndefined()
//         expect(actual.extraInfo).toBeDefined()
//         expect(actual.extraInfo).toBeTruthy()



//     })


// })