
export enum PasswordErrors {
    SHORT = 'Password is too short!',
    NO_UPPER_CASE = 'Upper case letter required!',
    NO_LOWER_CASE = 'Lower case letter required!',
    NO_NUMBER = 'At least one number required!'
}


export interface CheckResult {
    valid: boolean,
    reasons: PasswordErrors[]
}

export class passwordChecker {

    public checkPassword(password: string): CheckResult {
        let reasons: PasswordErrors[] = []

        this.checkForLength(password, reasons);
        this.checkForUpperCase(password, reasons);
        this.checkForLowerCase(password, reasons);
        return {
            valid: reasons.length > 0 ? false : true,
            reasons: reasons
        };

    }



    private checkForLength(password: string, reasons: PasswordErrors[]) {
        if (password.length < 8) {
            reasons.push(PasswordErrors.SHORT);
        }
    }

    private checkForUpperCase(password: string, reasons: PasswordErrors[]) {
        if (password == password.toLowerCase()) {
            reasons.push(PasswordErrors.NO_UPPER_CASE);
        }
    }

    private checkForLowerCase(password: string, reasons: PasswordErrors[]) {
        if (password == password.toUpperCase()) {
            reasons.push(PasswordErrors.NO_LOWER_CASE);
        }
    }
}