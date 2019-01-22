import { PatternValid } from '../interface/patternValid.interface';
import { ConstantValue } from './constant.common';
import { Validator, Validators, ValidatorFn } from '@angular/forms';

export class PatternCommon {
    static readonly AccountPattern: ValidatorFn[] = [
        Validators.maxLength(ConstantValue.MAX_LENGTH_ACCOUNT),
        Validators.minLength(ConstantValue.MIN_LENGTH_ACCOUNT),
        Validators.pattern(ConstantValue.PATTERN_ACCOUNT),
        Validators.required
    ];

    static readonly PasswordPattern: ValidatorFn[] = [
        Validators.maxLength(ConstantValue.MAX_LENGTH_PASSWORD),
        Validators.minLength(ConstantValue.MIN_LENGTH_PASSWORD),
        Validators.pattern(ConstantValue.PATTERN_PASSWORD),
        Validators.required
    ];

    static readonly NamePattern: ValidatorFn[] = [
        Validators.maxLength(ConstantValue.MAX_LENGTH_NAME_USER),
        Validators.minLength(ConstantValue.MIN_LENGTH_NAME_USER),
        Validators.pattern(ConstantValue.PATTERN_NAME_USER),
        Validators.required
    ];
}
