import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantValue } from '../common/constant.common';
import { ApiLink } from '../common/api-constant.common';
import { City } from 'src/app/interface/city.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  cities: City[] = [];
  constructor(private httpClient: HttpClient) { }
  getLocation() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(ConstantValue.BASE_URL_API + ApiLink.API_GET_POPULAR_CITY
        + ConstantValue.API_ACCESS_KEY_DEV)
        .subscribe((response: any) => {
          resolve(response.data);
        });
    });
  }
}
