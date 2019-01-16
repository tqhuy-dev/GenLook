import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantValue } from '../common/constant.common';
import { ApiLink } from '../common/api-constant.common';
import { ResponseReturn } from '../interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  login(account, password) {

    const userInfor = {
      account: account,
      password: password
    };
    return new Promise((resolve, reject) => {
      this.httpClient.post(ConstantValue.BASE_URL_API + ApiLink.API_LOGIN, userInfor, this.httpOptions)
        .subscribe((response: ResponseReturn) => {
          if (response.message !== ConstantValue.LOGIN_FAIL_MESSAGE) {
            resolve(true);
          } else {
            reject(false);
          }
        });
    });
  }

  signin(form, callback) {
    this.httpClient.put(ConstantValue.BASE_URL_API + ApiLink.API_SIGNIN, form, this.httpOptions)
      .subscribe((response: ResponseReturn) => {
        callback(response.message);
      });
  }
}
