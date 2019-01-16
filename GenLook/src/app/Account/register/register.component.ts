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
  firstName = '';
  lastName = '';
  statusMessage = '';
  constructor() { }

  ngOnInit() {
  }

  checkValidate() {
    const isValidAccount = this.validateCommon.checkValidate(this.name , PatternCommon.AccountPattern);
    const isValidPassword = this.validateCommon.checkValidate(this.password , PatternCommon.PasswordPattern);
    const isValidFirstName = this.validateCommon.checkValidate(this.firstName , PatternCommon.NamePattern);
    const isValidLastName = this.validateCommon.checkValidate(this.lastName, PatternCommon.NamePattern);

    if (isValidAccount === ValidateCommon.VALID_TRUE &&
      isValidPassword === ValidateCommon.VALID_TRUE &&
      isValidFirstName === ValidateCommon.VALID_TRUE &&
      isValidLastName === ValidateCommon.VALID_TRUE) {
      if (this.password === this.confirmPassword) {
        this.statusMessage = 'success';
      } else {
        this.statusMessage = ConstantValue.PASSWORD_IS_NOT_SAME;
      }
    } else {
      this.statusMessage = 'invalid error';
    }
  }
}
