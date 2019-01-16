import { Component, OnInit } from '@angular/core';
import { ValidateCommon } from '../../common/validate.common';
import { PatternCommon } from '../../common/pattern.common';
import { AccountService } from '../account.service';
import { ConstantValue } from 'src/app/common/constant.common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateCommon = new ValidateCommon();
  account = '';
  password = '';
  statusMessage = '';
  constructor(private accountServices: AccountService , private router: Router) {
  }

  ngOnInit() {
  }

  checkValidAccount() {
    const isValidAccount = this.validateCommon.checkValidate(this.account, PatternCommon.AccountPattern);
    const isValidPassword = this.validateCommon.checkValidate(this.password, PatternCommon.PasswordPattern);
    if (isValidAccount === ValidateCommon.VALID_TRUE && isValidPassword === ValidateCommon.VALID_TRUE) {
      return true;
    } else {
      return false;
    }
  }

  loginServer() {
    if (this.checkValidAccount()) {
      this.accountServices.login(this.account, this.password).then((data) => {
        this.statusMessage = 'success';
        this.router.navigate(['/home']);

      }).catch((error) => {
        this.statusMessage = 'fail';
      });
    } else {
      this.statusMessage = 'valid error';
    }
  }

  checkValidPassword(password: String) {
  }
}
