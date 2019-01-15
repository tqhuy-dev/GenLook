import { PatternValid } from '../interface/patternValid.interface';
import { FormControl, Validators } from '@angular/forms';

export class ValidateCommon {
    static readonly MIN_LENGTH_ERROR = 1;
    static readonly MAX_LENGTH_ERROR = 2;
    static readonly EMPTY_ERROR = 3;
    static readonly WRONG_PATTERN = 4;
    static readonly VALID_TRUE = 5;

    /*
    1.check empty value
    2.check min and max value
    3.check pattern
    4.check uppercase
    */
    checkValidate(text: String, patternValid: PatternValid) {
        if (text === '') {
            return ValidateCommon.EMPTY_ERROR;
        }
        const minValid = new FormControl(text.length, Validators.min(patternValid.min));
        if (minValid.invalid) {
            return ValidateCommon.MIN_LENGTH_ERROR;
        }
        const maxValid = new FormControl(text.length, Validators.max(patternValid.max));
        if (maxValid.invalid) {
            return ValidateCommon.MAX_LENGTH_ERROR;
        }
        if (patternValid.pattern !== '') {
            const patValid = new FormControl(text, Validators.pattern(patternValid.pattern));
            if (patValid.invalid) {
                return ValidateCommon.WRONG_PATTERN;
            }
        }
        return ValidateCommon.VALID_TRUE;
    }
}
