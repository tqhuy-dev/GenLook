import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { ConstantValue } from '../common/constant.common';
import { ApiLink } from '../common/api-constant.common';
import { ResponseReturn } from '../interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  login(account , password , callback) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const userInfor = {
      account: account,
      password: password
    };
    this.httpClient.post(ConstantValue.BASE_URL_API + ApiLink.API_LOGIN , userInfor, httpOptions)
    .subscribe((response: ResponseReturn) => {
      callback(response.message);
    });
  }
}
