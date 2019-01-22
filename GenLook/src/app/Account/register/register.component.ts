import { Component, OnInit } from '@angular/core';
import { ValidateCommon } from 'src/app/common/validate.common';
import { PatternCommon } from 'src/app/common/pattern.common';
import { ConstantValue } from 'src/app/common/constant.common';
import { AccountService } from '../account.service';
import { ComponentServices } from 'src/app/component/component-services.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  statusMessage = '';
  account = new FormControl('', PatternCommon.AccountPattern);
  password = new FormControl('', PatternCommon.PasswordPattern);
  confirmPassword = new FormControl('', PatternCommon.PasswordPattern);
  firstName = new FormControl('', PatternCommon.NamePattern);
  lastName = new FormControl('', PatternCommon.NamePattern);
  birthDay = '';
  registerForm = this.formBuider.group({
    account: this.account,
    password: this.password,
    firstName: this.firstName,
    lastName: this.lastName,
    confirmPassword: this.confirmPassword
  });
  constructor(
    private accountService: AccountService,
    private componentServices: ComponentServices,
    private formBuider: FormBuilder,
    private router: Router) {
    this.componentServices.change.subscribe((data) => {
      this.birthDay = data;
    });
  }

  ngOnInit() {

  }

  register() {
    const body = {
      account: this.registerForm.value.account,
      password: this.registerForm.value.password,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      birthday: this.birthDay
    };
    if (this.registerForm.valid) {
      this.accountService.signin( body , (statusCode) => {
        if ( statusCode === 200) {
          this.router.navigate(['home']);
        }
      });
    }
  }
}
