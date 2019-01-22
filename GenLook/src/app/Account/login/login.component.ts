import { Component, OnInit, Inject } from '@angular/core';
import { ValidateCommon } from '../../common/validate.common';
import { PatternCommon } from '../../common/pattern.common';
import { AccountService } from '../account.service';
import { ConstantValue } from 'src/app/common/constant.common';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateCommon = new ValidateCommon();

  account = new FormControl('', [
    Validators.minLength(ConstantValue.MIN_LENGTH_ACCOUNT),
    Validators.maxLength(ConstantValue.MAX_LENGTH_ACCOUNT),
    Validators.pattern(ConstantValue.PATTERN_ACCOUNT),
    Validators.required]);
  password = new FormControl('', [
    Validators.minLength(ConstantValue.MIN_LENGTH_PASSWORD),
    Validators.maxLength(ConstantValue.MAX_LENGTH_PASSWORD),
    Validators.pattern(ConstantValue.PATTERN_PASSWORD),
    Validators.required
  ]);

  statusMessage = '';

  loginForm = this.formBuider.group({
    username: this.account,
    password: this.password
  });
  // loginForm:
  constructor(
    private accountServices: AccountService,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private formBuider: FormBuilder) {
  }

  ngOnInit() {
    if (this.storage.get('uuid') !== null) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }

  loginServer() {
    if (this.loginForm.valid) {
      this.accountServices.login(this.loginForm.value.username, this.loginForm.value.password).then((data) => {
        this.statusMessage = 'success';
        this.router.navigate(['/home']);

      }).catch((error) => {
        this.statusMessage = 'fail';
      });
    } else {
      this.statusMessage = 'valid error';
    }
  }

  checkValid() {
    console.log(this.loginForm.valid);
  }

}
