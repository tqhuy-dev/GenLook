import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantValue } from '../common/constant.common';
import { ApiLink } from '../common/api-constant.common';
import { ResponseReturn } from '../interface/response.interface';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient , @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  login(account, password) {

    const userInfor = {
      account: account,
      password: password
    };
    const encode = btoa(`${account}:${password}`);
    this.httpOptions.headers.set('Authorization' , `Basic ${encode}`);
    return new Promise((resolve, reject) => {
      this.httpClient.post(ConstantValue.BASE_URL_API + ApiLink.API_LOGIN, userInfor, this.httpOptions)
        .subscribe((response: ResponseReturn) => {
          if (response.message !== ConstantValue.LOGIN_FAIL_MESSAGE) {
            resolve(true);
            this.storage.set('uuid', response.message);
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
