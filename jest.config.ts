import type { Config } from "@jest/types"

const baseDir = '<rootDir>/src/app/passwordChecker'
const baseTestDir = '<rootDir>/src/test/passwordChecker'

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    //use coverage when done !
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`
    ],
    testMatch: [
        `${baseTestDir}/**/*.ts`

    ]
}
export default config