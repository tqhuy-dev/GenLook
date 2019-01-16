import { PatternValid } from '../interface/patternValid.interface';
import { ConstantValue } from './constant.common';

export class PatternCommon {
    static readonly AccountPattern: PatternValid = {
        max: ConstantValue.MAX_LENGTH_ACCOUNT,
        min: ConstantValue.MIN_LENGTH_ACCOUNT,
        pattern: ConstantValue.PATTERN_ACCOUNT,
        uppercase: true
    };

    static readonly PasswordPattern: PatternValid = {
        max: ConstantValue.MAX_LENGTH_PASSWORD,
        min: ConstantValue.MIN_LENGTH_PASSWORD,
        pattern: ConstantValue.PATTERN_PASSWORD,
        uppercase: true
    };
    static readonly NamePattern: PatternValid = {
        max: ConstantValue.MAX_LENGTH_NAME_USER,
        min: ConstantValue.MIN_LENGTH_NAME_USER,
        pattern: ConstantValue.PATTERN_NAME_USER,
        uppercase: true
    };
}
