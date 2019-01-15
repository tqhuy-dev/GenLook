import { Component, OnInit } from '@angular/core';
import { ValidateCommon } from '../../common/validate.common';
import { PatternCommon } from '../../common/pattern.common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateCommon = new ValidateCommon();
  name = '';
  password = '';
  constructor() { }

  ngOnInit() {
  }

  checkValidAccount() {
    const isValidAccount = this.validateCommon.checkValidate(this.name, PatternCommon.AccountPattern);
    const isValidPassword = this.validateCommon.checkValidate(this.password , PatternCommon.PasswordPattern);
    if (isValidAccount === ValidateCommon.VALID_TRUE && isValidPassword === ValidateCommon.VALID_TRUE) {
    } else {
    }
  }

  checkValidPassword(password: String) {
  }
}
