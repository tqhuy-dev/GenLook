import { Component, OnInit } from '@angular/core';
import { ValidateCommon } from 'src/app/common/validate.common';
import { PatternCommon } from 'src/app/common/pattern.common';
import { ConstantValue } from 'src/app/common/constant.common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  validateCommon = new ValidateCommon();
  name = '';
  password = '';
  confirmPassword = '';
  constructor() { }

  ngOnInit() {
  }

  checkValidate() {
    const isValidAccount = this.validateCommon.checkValidate(this.name , PatternCommon.AccountPattern);
    const isValidPassword = this.validateCommon.checkValidate(this.password , PatternCommon.PasswordPattern);
    if (isValidAccount === ValidateCommon.VALID_TRUE && isValidPassword === ValidateCommon.VALID_TRUE) {
      if (this.password === this.confirmPassword) {
        console.log('success');
      } else {
        console.log(ConstantValue.PASSWORD_IS_NOT_SAME);
      }
    } else {
      console.log('fail');
    }
  }
}
